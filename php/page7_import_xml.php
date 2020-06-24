<?php

/*
 * $_FILES["flag"]: 0 表示文件选择错误
 *                  1 表示文件上传成功
 *  */

$_FILES["flag"] = 0;
$allowedExts = array("wav","xml");  //文件指出的格式
$temp = explode(".", $_FILES["page7_xml_select"]["name"]);
$extension = end($temp);     // 获取文件后缀名

if (($_FILES["page7_xml_select"]["size"] < 1024000)  // 文件小于1M
    && in_array($extension, $allowedExts)){
        if ($_FILES["page7_xml_select"]["error"] > 0){
            $_FILES["flag"] = 0;
        }
        else{
            //删除上一个文件
            $files = scandir("../upload/xml/");
            foreach ($files as $value) {
                if (!is_dir("../upload/xml/".$value)) {
                    unlink("../upload/xml/".$value);
                }
            }
            // 拷贝文件
            move_uploaded_file($_FILES["page7_xml_select"]["tmp_name"], "../upload/xml/" . $_FILES["page7_xml_select"]["name"]);
            chmod("../upload/xml/" . $_FILES["page7_xml_select"]["name"],0777);
            $_FILES["flag"] = 1;
        }
}

/*------------------------------------------------------------------------*/
//解析xml
$file = "../upload/xml/" . $_FILES["page7_xml_select"]["name"];
$fh = fopen("$file",'r') or die($php_errormsg);
$simple = fread($fh,filesize("$file")); //读取xml
fclose($fh) or die($php_errormsg);

$p = xml_parser_create();
xml_parse_into_struct($p, $simple, $vals, $index);  //解析xml
xml_parser_free($p);

//获取群组信息
for ($i = 0; $i < count($index['GROUP']); $i++) {
    $group[$i] = $vals[$index['GROUP'][$i]]['attributes'];
}
//获取联系人信息
for ($i = 0; $i < count($index['CONTACT']); $i++) {
    $contact[$i] = $vals[$index['CONTACT'][$i]]['attributes'];
}

/*------------------------------------------------------------------------*/
/* 连接数据库 */
$db = new SQLite3("test.db");

//清空表数据
$sql =<<<EOF
      delete from page7_contact;
EOF;
$ret['1'] = $db->query($sql);

//重置ID
$sql =<<<EOF
      update sqlite_sequence SET seq = 0 where name ='page7_contact';
EOF;
$ret['2'] = $db->query($sql);

for ($i = 0; $i < count($contact); $i++) {
    if($contact[$i]['DISPLAY_NAME']){
        $sql =<<<EOF
                    INSERT INTO page7_contact ( ID,
                                                page7_name,
                                                page7_office_numbe,
                                                page7_mobile_number,
                                                page7_other_numbe,
                                                page7_ring_tone,
                                                page7_add_group,
                                                page7_account,
                                                page7_auto_divert)
                    VALUES (NULL,
                            '{$contact[$i]['DISPLAY_NAME']}',
                            '{$contact[$i]['OFFICE_NUMBER']}',
                            '{$contact[$i]['MOBILE_NUMBER']}',
                            '{$contact[$i]['OTHER_NUMBER']}' ,
                            '{$contact[$i]['RING']}',
                            '{$contact[$i]['GROUP_ID_NAME']}',
                            '{$contact[$i]['ACCOUNT']}',
                            '{$contact[$i]['AUTO_DIVERT']}');
EOF;
        $ret['3'][$i] = $db->exec($sql);
    }
}

//清空群组数据
$sql =<<<EOF
      delete from page7_group;
EOF;
$ret['4'] = $db->query($sql);

//重置ID
$sql =<<<EOF
      update sqlite_sequence SET seq = 0 where name ='page7_group';
EOF;
$ret['5'] = $db->query($sql);

for ($i = 0; $i < count($group); $i++) {
    if ($group[$i]['DISPLAY_NAME'] && $group[$i]['RING']) {
        $sql =<<<EOF
            INSERT INTO page7_group ( ID,page7_group,page7_group_ring_tone)
            VALUES (NULL,'{$group[$i]['DISPLAY_NAME']}','{$group[$i]['RING']}');
EOF;
        $ret['6'][$i] = $db->exec($sql);
    }
}
(array_sum($ret) != count($ret))? $_POST['flag'] = "0": $_POST['flag'] = "1";

echo json_encode($_FILES["flag"]);
?>