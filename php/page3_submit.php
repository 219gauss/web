<?php

$page3_internet =       $_POST["page3_internet"];
$ipv4_type_set =        $_POST["ipv4_type_set"];
$page3_ipv4_ipaddress = $_POST["page3_ipv4_ipaddress"];
$page3_ipv4_mask =      $_POST["page3_ipv4_mask"];
$page3_ipv4_gateway =   $_POST["page3_ipv4_gateway"];
$ipv4_staticDNS =       $_POST["ipv4_staticDNS"];
$page3_ipv4_firstDNS =  $_POST["page3_ipv4_firstDNS"];
$page3_ipv4_secondDNS = $_POST["page3_ipv4_secondDNS"];
$ipv6_type_set =        $_POST["ipv6_type_set"];
$page3_ipv6_ipaddress = $_POST["page3_ipv6_ipaddress"];
$page3_ipv6_mask =      $_POST["page3_ipv6_mask"];
$page3_ipv6_gateway =   $_POST["page3_ipv6_gateway"];
$ipv6_staticDNS =       $_POST["ipv6_staticDNS"];
$page3_ipv6_firstDNS =  $_POST["page3_ipv6_firstDNS"];
$page3_ipv6_secondDNS = $_POST["page3_ipv6_secondDNS"];

/* 连接数据库 */
$db = new SQLite3("test.db");

$sql =<<<EOF
    UPDATE page3 set
        page3_internet = '$page3_internet',ipv4_type_set = '$ipv4_type_set',page3_ipv4_ipaddress = '$page3_ipv4_ipaddress',page3_ipv4_mask = '$page3_ipv4_mask',
        page3_ipv4_gateway = '$page3_ipv4_gateway',ipv4_staticDNS = '$ipv4_staticDNS',page3_ipv4_firstDNS = '$page3_ipv4_firstDNS',page3_ipv4_secondDNS = '$page3_ipv4_secondDNS',
        ipv6_type_set = '$ipv6_type_set',page3_ipv6_ipaddress = '$page3_ipv6_ipaddress',page3_ipv6_mask = '$page3_ipv6_mask',page3_ipv6_gateway = '$page3_ipv6_gateway',
        ipv6_staticDNS = '$ipv6_staticDNS',page3_ipv6_firstDNS = '$page3_ipv6_firstDNS',page3_ipv6_secondDNS = '$page3_ipv6_secondDNS'
    where ID='1';
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