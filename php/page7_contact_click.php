<?php

$contact = array();

/* 连接数据库 */
$db = new SQLite3("test.db");

$sql =<<<EOF
        SELECT * from page7_contact where page7_name = '{$_POST["page7_contact_name"]}';
EOF;
$ret = $db->query($sql);
$row = $ret->fetchArray(SQLITE3_ASSOC);
$contact['page7_name']=$row['page7_name'];
$contact['page7_office_numbe']=$row['page7_office_numbe'];
$contact['page7_mobile_number']=$row['page7_mobile_number'];
$contact['page7_other_numbe']=$row['page7_other_numbe'];
$contact['page7_ring_tone']=$row['page7_ring_tone'];
$contact['page7_add_group']=$row['page7_add_group'];
$contact['page7_account']=$row['page7_account'];
$contact['page7_auto_divert']=$row['page7_auto_divert'];

$db->close();

$_POST['contact'] = $contact;
echo json_encode($_POST);
?>