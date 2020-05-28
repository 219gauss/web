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

    if ($data['page3_internet'] == "ipv4") {
        if ($data['ipv4_type_set'] == "dhcp") {
            $ip_address = "auto";
            $mask = "auto";
            $gateway = "auto";
            $first_dns = "auto";
            $second_dns = "auto";
        }elseif ($data['ipv4_type_set'] == "static"){
            $ip_address = $data['page3_ipv4_ipaddress'];
            $mask = $data['page3_ipv4_mask'];
            $gateway = $data['page3_ipv4_gateway'];
            $first_dns = $data['page3_ipv4_firstDNS'];
            $second_dns = $data['page3_ipv4_secondDNS'];
        }
    }elseif ($data['page3_internet'] == "ipv6"){
        if ($data['ipv6_type_set'] == "dhcp") {
            $ip_address = "auto";
            $mask = "auto";
            $gateway = "auto";
            $first_dns = "auto";
            $second_dns = "auto";
        }elseif ($data['ipv6_type_set'] == "static"){
            $ip_address = $data['page3_ipv6_ipaddress'];
            $mask = $data['page3_ipv6_mask'];
            $gateway = $data['page3_ipv6_gateway'];
            $first_dns = $data['page3_ipv6_firstDNS'];
            $second_dns = $data['page3_ipv6_secondDNS'];
        }
    }

    $_POST['data'] = Array(
        "firmware_version" => "unknow",
        "hardware_version" => "unknow",
        "certificate" => "unknow",
        "internet_port" => $data['page3_internet'],
        "wan_port" => $data['ipv4_type_set'],
        "ip_address" => $ip_address,
        "mask" => $mask,
        "gateway" => $gateway,
        "first_dns" => $first_dns,
        "second_dns" => $second_dns,
        "physical_address" => "unknow",
        "run_time" => "unknow",
        "now_time" => "unknow",
        "account_1" => "unknow",
        "account_2" => "unknow",
        "account_3" => "unknow",
    );
    echo json_encode($_POST);
?>