<?php

$page7_group=         $_POST["page7_group"];
$page7_group_ring_tone=     $_POST["page7_group_ring_tone"];
$page7_groupname_exit = false;

/* 连接数据库 */
$db = new SQLite3("test.db");

if ($page7_group == "") {
    $_POST['flag'] = "-1";  //组名为空
}else {
    //判断组名是否存在
    $sql =<<<EOF
        SELECT page7_group from page7_group;
EOF;
    $tmp = $db->query($sql);
    while ($data = $tmp->fetchArray(SQLITE3_ASSOC)){
        if ($data['page7_group'] == $page7_group) {
            $_POST['flag'] = "-2";  //组名存在
            $page7_groupname_exit = true;
        }
    }

    //组名不存在
    if (!$page7_groupname_exit) {
        $sql =<<<EOF
            INSERT INTO page7_group ( ID,page7_group,page7_group_ring_tone)
            VALUES (NULL,'$page7_group','$page7_group_ring_tone');
EOF;
        $ret = $db->exec($sql);
        (!$ret)? $_POST['flag'] = "0": $_POST['flag'] = "1";
    }
}

$db->close();

echo json_encode($_POST);
?>