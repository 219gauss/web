<?php

/* 连接数据库 */
$db = new SQLite3("test.db");

//清空表数据
$sql =<<<EOF
      delete from page7_group;
EOF;
$ret1 = $db->query($sql);

//重置ID
$sql =<<<EOF
      update sqlite_sequence SET seq = 0 where name ='page7_group';
EOF;
$ret2 = $db->query($sql);

//其他组的联系人归类到本地联系人中
$sql =<<<EOF
      update page7_contact set page7_add_group = 1 where page7_add_group != 0 and page7_add_group != 1;
EOF;
$ret3 = $db->query($sql);

(!$ret1 || !$ret2 || !$ret3)? $_POST['flag'] = "0": $_POST['flag'] = "1";
$db->close();

echo json_encode($_POST);
?>