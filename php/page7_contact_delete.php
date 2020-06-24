<?php
$result = array();

/* 连接数据库 */
$db = new SQLite3("test.db");

for ($i = 0; $i < count($_POST['page7_name']); $i++) {
    //通过那么删除联系人
    $sql =<<<EOF
    DELETE from page7_contact where page7_name = '{$_POST["page7_name"][$i]}';
EOF;
    $ret = $db->query($sql);
    (!$ret)?$result[$i] = "0": $result[$i] = "1";
}

(array_sum($result) != count($result))? $_POST['flag'] = "0": $_POST['flag'] = "1";
$db->close();
echo json_encode($_POST);
?>