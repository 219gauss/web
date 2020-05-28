<?php

/* 连接数据库 */
$db = new SQLite3("test.db");


/* 查询数据 */
$sql =<<<EOF
            SELECT * from page3 where id = 1;
EOF;
$ret = $db->query($sql);
$data = $ret->fetchArray(SQLITE3_ASSOC);

$db->close();



$_POST['data'] = Array(
    "page3_internet"        => $data['page3_internet'],
    "ipv4_type_set"         => $data['ipv4_type_set'],
    "page3_ipv4_ipaddress"  => $data['page3_ipv4_ipaddress'],
    "page3_ipv4_mask"       => $data['page3_ipv4_mask'],
    "page3_ipv4_gateway"    => $data['page3_ipv4_gateway'],
    "ipv4_staticDNS"        => $data['ipv4_staticDNS'],
    "page3_ipv4_firstDNS"   => $data['page3_ipv4_firstDNS'],
    "page3_ipv4_secondDNS"  => $data['page3_ipv4_secondDNS'],
    "ipv6_type_set"         => $data['ipv6_type_set'],
    "page3_ipv6_ipaddress"  => $data['page3_ipv6_ipaddress'],
    "page3_ipv6_mask"       => $data['page3_ipv6_mask'],
    "page3_ipv6_gateway"    => $data['page3_ipv6_gateway'],
    "ipv6_staticDNS"        => $data['ipv6_staticDNS'],
    "page3_ipv6_firstDNS"   => $data['page3_ipv6_firstDNS'],
    "page3_ipv6_secondDNS"  => $data['page3_ipv6_secondDNS'],
    );
echo json_encode($_POST);
?>