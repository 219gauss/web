<?php

/* 连接数据库 */
$db = new SQLite3("test.db");


if (!$_POST["page7_name"]) {    //联系人姓名为空
    $_POST['flag'] = "-2";
}elseif (!$_POST["page7_old_name"]){    //没有选择联系人
    $_POST['flag'] = "-1";
}else {
    //判断新联系人姓名是否已存在
    $sql =<<<EOF
        SELECT page7_name from page7_contact where page7_name != '{$_POST["page7_old_name"]}' and page7_name = '{$_POST["page7_name"]}';
EOF;
    $ret = $db->query($sql);
    $row = $ret->fetchArray(SQLITE3_ASSOC);
    if ($row){
        $_POST['flag'] = "-3";
    }else {
        $sql =<<<EOF
            update page7_contact set
                page7_name = '{$_POST["page7_name"]}',
                page7_office_numbe = '{$_POST["page7_office_numbe"]}',
                page7_mobile_number = '{$_POST["page7_mobile_number"]}',
                page7_other_numbe = '{$_POST["page7_other_numbe"]}',
                page7_ring_tone = '{$_POST["page7_ring_tone"]}',
                page7_add_group = '{$_POST["page7_add_group"]}',
                page7_account = '{$_POST["page7_account"]}',
                page7_auto_divert = '{$_POST["page7_auto_divert"]}'
            where page7_name = '{$_POST["page7_old_name"]}'
EOF;

        $ret = $db->query($sql);
        (!$ret)? $_POST['flag'] = "0": $_POST['flag'] = "1";
    }
}

$db->close();
echo json_encode($_POST);
?>