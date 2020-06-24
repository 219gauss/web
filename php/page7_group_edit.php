<?php

/* 连接数据库 */
$db = new SQLite3("test.db");

if (!$_POST['page7_group_new']) {    //新组名为空
    $_POST['flag'] = -2;
}else{  //更新组名
    $sql =<<<EOF
        update page7_group set page7_group = '{$_POST["page7_group_new"]}',page7_group_ring_tone = '{$_POST["page7_group_ring_tone"]}'
        where page7_group = '{$_POST["page7_group_old"]}'
EOF;

    $ret = $db->query($sql);

    //更新联系人群组到新群组中
    $sql =<<<EOF
      update page7_contact set page7_add_group = '{$_POST["page7_group_new"]}' where page7_add_group = '{$_POST["page7_group_old"]}';
EOF;
    $ret3 = $db->query($sql);
    (!$ret)? $_POST['flag'] = "0": $_POST['flag'] = "1";
}

$db->close();
echo json_encode($_POST);

?>