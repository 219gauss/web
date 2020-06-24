<?php

/* 连接数据库 */
$db = new SQLite3("test.db");

//清空表数据
$sql =<<<EOF
      delete from page7_contact;
EOF;
$ret1 = $db->query($sql);

//重置ID
$sql =<<<EOF
      update sqlite_sequence SET seq = 0 where name ='page7_contact';
EOF;
$ret2 = $db->query($sql);

(!$ret1 || !$ret2)? $_POST['flag'] = "0": $_POST['flag'] = "1";

$db->close();

echo json_encode($_POST);

?>