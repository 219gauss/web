<?php

$i=0;
$forward_account=array();

/* 连接数据库 */
$db = new SQLite3("test.db");

/* 查询数据 */
$sql =<<<EOF
            SELECT * from page5;
EOF;
$ret = $db->query($sql);
$data = $ret->fetchArray(SQLITE3_ASSOC);


/* 查询数据 */
$sql =<<<EOF
            select * from page2 where reg_status = 'reg_status';
EOF;
$ret = $db->query($sql);
while($data2 = $ret->fetchArray(SQLITE3_ASSOC)){
    $forward_account[$i] = $data2['show_name'];
    $i++;
}

$db->close();


$_POST['data'] = Array(
    "forward_emergency"             => $data['forward_emergency'],
    "forward_authorized_numbers"    => $data['forward_authorized_numbers'],
    "forward_mode"                  => $data['forward_mode'],
    "forward_account"               => $forward_account,
    "always_forward"                => $data['always_forward'],
    "always_forward_target"         => $data['always_forward_target'],
    "always_forward_on_code"        => $data['always_forward_on_code'],
    "always_forward_off_code"        => $data['always_forward_off_code'],
    "busy_forward"                  => $data['busy_forward'],
    "busy_forward_target"           => $data['busy_forward_target'],
    "busy_forward_on_code"          => $data['busy_forward_on_code'],
    "busy_forward_off_code"         => $data['busy_forward_off_code'],
    "no_answer_forward"             => $data['no_answer_forward'],
    "ring_time"                     => $data['ring_time'],
    "no_answer_forward_target"      => $data['no_answer_forward_target'],
    "no_answer_forward_on_code"     => $data['no_answer_forward_on_code'],
    "no_answer_forward_off_code"    => $data['no_answer_forward_off_code'],
    "dnd_emergency"                 => $data['dnd_emergency'],
    "dnd_authorized_numbers"        => $data['dnd_authorized_numbers'],
    "dnd_mode"                      => $data['dnd_mode'],
    "dnd_account"                   => $forward_account,
    "dnd_status"                    => $data['dnd_status'],
    "dnd_on_code"                   => $data['dnd_on_code'],
    "dnd_off_code"                  => $data['dnd_off_code']
    );
echo json_encode($_POST);
?>