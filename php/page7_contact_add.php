<?php

$page7_name=            $_POST["page7_name"];
$page7_office_numbe=    $_POST["page7_office_numbe"];
$page7_mobile_number=   $_POST["page7_mobile_number"];
$page7_other_numbe=     $_POST["page7_other_numbe"];
$page7_ring_tone=       $_POST["page7_ring_tone"];
$page7_add_group=       $_POST["page7_add_group"];
$page7_account=         $_POST["page7_account"];
$page7_auto_divert=     $_POST["page7_auto_divert"];
$page7_name_exit = false;

/* 连接数据库 */
$db = new SQLite3("test.db");



if ($page7_name == "") {
    $_POST['flag'] = "-1";  //联系人姓名为空
}else{
    //判断联系人是否存在
    $sql =<<<EOF
        SELECT page7_name from page7_contact;
EOF;
    $tmp = $db->query($sql);
    while ($data = $tmp->fetchArray(SQLITE3_ASSOC)){
        if ($data['page7_name'] == $page7_name) {
            $_POST['flag'] = "-2";  //联系人存在
            $page7_name_exit = true;
        }
    }

    //联系人不存在
    if (!$page7_name_exit) {
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
                        '$page7_name',
                        '$page7_office_numbe',
                        '$page7_mobile_number',
                        '$page7_other_numbe' ,
                        '$page7_ring_tone',
                        '$page7_add_group',
                        '$page7_account',
                        '$page7_auto_divert');
EOF;
        $ret = $db->exec($sql);
        (!$ret)? $_POST['flag'] = "0": $_POST['flag'] = "1";
    }
}

$db->close();

echo json_encode($_POST);

?>