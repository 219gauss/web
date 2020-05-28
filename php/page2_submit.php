<?php

$page2_account =    $_POST["page2_account"];
$path_activate =    $_POST["path_activate"];
$lable =            $_POST["lable"];
$show_name =        $_POST["show_name"];
$login_name =       $_POST["login_name"];
$user_name =        $_POST["user_name"];
$password =         $_POST["password"];
$server_address1 =  $_POST["server_address1"];
$port1 =            $_POST["port1"];
$transfer1 =        $_POST["transfer1"];
$heartbeat1 =       $_POST["heartbeat1"];
$repetition1 =      $_POST["repetition1"];
$server_address2 =  $_POST["server_address2"];
$port2 =            $_POST["port2"];
$transfer2 =        $_POST["transfer2"];
$heartbeat2 =       $_POST["heartbeat2"];
$repetition2 =      $_POST["repetition2"];
$Outbound =         $_POST["Outbound"];
$agency_server1 =   $_POST["agency_server1"];
$agency_server2 =   $_POST["agency_server2"];
$rollback =         $_POST["rollback"];
$nat =              $_POST["nat"];

/* 连接数据库 */
$db = new SQLite3("test.db");
/* if (!$db) {
    echo "creat error"."<br>";
}else {
    echo "creat seccuss"."<br>";
} */

/* 判断账号 */
$id = 1;
switch($page2_account){
    case "account_1":
        $id = 1;
        break;
    case "account_2":
        $id = 2;
        break;
    case "account_3":
        $id = 3;
        break;
    default: $id = 1;
};

/* 更新数据 */
$sql =<<<EOF
    UPDATE page2 set
        page2_account = '$page2_account',path_activate = '$path_activate',lable = '$lable',show_name = '$show_name',
        login_name = '$login_name',user_name = '$user_name',password = '$password',server_address1 = '$server_address1',port1 = '$port1',
        transfer1 = '$transfer1',heartbeat1 = '$heartbeat1',repetition1 = '$repetition1',server_address2 = '$server_address2',port2 = '$port2',
        transfer2 = '$transfer2',heartbeat2 = '$heartbeat2',repetition2 = '$repetition2',Outbound = '$Outbound',agency_server1 = '$agency_server1',
        agency_server2 = '$agency_server2',rollback = '$rollback',nat = '$nat'
    where ID='$id';
EOF;
$ret = $db->exec($sql);
if(!$ret){
	$_POST['flag'] = "0";
    //echo $db->lastErrorMsg();
} else {
	$_POST['flag'] = "1";
    //echo $db->changes(), " Record updated successfully\n";
}

$db->close();
echo json_encode($_POST);

?>