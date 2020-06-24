<?php

/* 连接数据库 */
$db = new SQLite3("test.db");

if (!$_POST["page7_group"]) {   //要删除的组名为空
    $_POST['flag'] = -2;
}else{
    $sql =<<<EOF
        select id from page7_group where page7_group = '{$_POST["page7_group"]}';
EOF;
    $ret = $db->query($sql);
    $row = $ret->fetchArray(SQLITE3_ASSOC);
    if (!$row) {
        $_POST['flag'] = -3;    //要删除的群组不存在
    }else {
        $sql =<<<EOF
        delete from page7_group where ID = '{$row["ID"]}';
EOF;
        $ret1 = $db->query($sql);

        //重置ID
        $sql =<<<EOF
            update page7_group set ID = ID - 1 where ID > '{$row["ID"]}';
EOF;
        $ret2 = $db->query($sql);

        //其他组的联系人归类到本地联系人中
        $sql =<<<EOF
            update page7_contact set page7_add_group = 1 where page7_add_group = '{$_POST["page7_group"]}';
EOF;
        $ret3 = $db->query($sql);
        (!$ret1 || !$ret2 || !$ret3)? $_POST['flag'] = "0": $_POST['flag'] = "1";
    }
}

$db->close();
echo json_encode($_POST);
?>