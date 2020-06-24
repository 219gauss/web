<?php

$contact = array();
$i = 1;

/* 连接数据库 */
$db = new SQLite3("test.db");

if ($_POST['page7_group'] == 1) {
    $sql =<<<EOF
        SELECT * from page7_contact where page7_add_group != 0;
EOF;
    $ret = $db->query($sql);
}else {
    $sql =<<<EOF
        SELECT * from page7_contact where page7_add_group = '{$_POST["page7_group"]}';
EOF;
    $ret = $db->query($sql);
}

while ($row = $ret->fetchArray(SQLITE3_ASSOC)){
    $contact[$i]['page7_name'] = $row['page7_name'];
    $contact[$i]['page7_office_numbe'] = $row['page7_office_numbe'];
    $contact[$i]['page7_mobile_number'] = $row['page7_mobile_number'];
    $contact[$i]['page7_other_numbe'] = $row['page7_other_numbe'];
    $contact[$i]['page7_add_group']=  $row['page7_add_group'];
    $i++;
}
$_POST['length'] = $i-1;
$_POST['contact'] = $contact;
$db->close();
echo json_encode($_POST);
?>