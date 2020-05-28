<?php

/* 连接数据库 */
$db = new SQLite3("test.db");
/* if (!$db) {
 echo "creat error"."<br>";
 }else {
 echo "creat seccuss"."<br>";
 } */


/* 查询数据 */
$sql =<<<EOF
            SELECT * from page2 where id = 1;
EOF;
$ret = $db->query($sql);
$data = $ret->fetchArray(SQLITE3_ASSOC);

$db->close();

if ($data['path_activate'] == "open") {
    $path_activate = 1;
}elseif ($data['path_activate'] == "close"){
    $path_activate = 0;
}

if ($data['Outbound'] == "open") {
    $Outbound = 1;
}elseif ($data['Outbound'] == "close"){
    $Outbound = 0;
}

$_POST['data'] = Array(
    "page2_account" => "0",
    "reg_status" => $data['reg_status'],
    "path_activate" => $path_activate,
    "lable" => $data['lable'],
    "show_name" => $data['show_name'],
    "login_name" => $data['login_name'],
    "user_name" => $data['user_name'],
    "password" => $data['password'],
    "server_address1" => $data['server_address1'],
    "port1" => $data['port1'],
    "transfer1" => $data['transfer1'],
    "heartbeat1" => $data['heartbeat1'],
    "repetition1" => $data['repetition1'],
    "server_address2" => $data['server_address2'],
    "port2" => $data['port2'],
    "transfer2" => $data['transfer2'],
    "heartbeat2" => $data['heartbeat2'],
    "repetition2" => $data['repetition2'],
    "Outbound" => $Outbound,
    "agency_server1" => $data['agency_server1'],
    "agency_server2" => $data['agency_server2'],
    "rollback" => $data['rollback'],
    "nat" => $data['nat'],
    );
echo json_encode($_POST);
?>