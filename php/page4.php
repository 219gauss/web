<?php

$i = 0;

/* 连接数据库 */
$db = new SQLite3("test.db");

/* 查询数据 */
$sql =<<<EOF
            SELECT * from page4;
EOF;
$ret = $db->query($sql);
while($data = $ret->fetchArray(SQLITE3_ASSOC)){
    $temp[$i]['type'] = $data['type'];
    $temp[$i]['value'] = $data['value'];
    $temp[$i]['lable'] = $data['lable'];
    $temp[$i]['line_select'] = $data['line_select'];
    $temp[$i]['extension'] = $data['extension'];
    $i++;
}

$db->close();



$_POST['data'] = Array(
    "account1_type"         => $temp[0]['type'],
    "account1_value"        => $temp[0]['value'],
    "account1_lable"        => $temp[0]['lable'],
    "account1_line_select"  => $temp[0]['line_select'],
    "account1_extension"    => $temp[0]['extension'],
    "account2_type"         => $temp[1]['type'],
    "account2_value"        => $temp[1]['value'],
    "account2_lable"        => $temp[1]['lable'],
    "account2_line_select"  => $temp[1]['line_select'],
    "account2_extension"    => $temp[1]['extension'],
    "account3_type"         => $temp[2]['type'],
    "account3_value"        => $temp[2]['value'],
    "account3_lable"        => $temp[2]['lable'],
    "account3_line_select"  => $temp[2]['line_select'],
    "account3_extension"    => $temp[2]['extension'],
    );
echo json_encode($_POST);
?>