<?php
$result = array();

/* 连接数据库 */
$db = new SQLite3("test.db");

for ($i = 0; $i < count($_POST['page7_name']); $i++) {
    $sql =<<<EOF
            update page7_contact set
                page7_add_group = '{$_POST["page7_group_move"]}'
            where page7_name = '{$_POST["page7_name"][$i]}'
EOF;
    $ret = $db->query($sql);
    (!$ret)?$result[$i] = "0": $result[$i] = "1";
}
(array_sum($result) != count($result))? $_POST['flag'] = "0": $_POST['flag'] = "1";
$db->close();
echo json_encode($_POST);
?>