<?php

$contact = array();
$group = array();
$i = 1;

/* 连接数据库 */
$db = new SQLite3("test.db");

if ($_POST["data"] == 1) {  //筛选本地联系人(除了黑名单)
    $sql =<<<EOF
        SELECT * from page7_contact where page7_add_group != '0';
EOF;

    $ret = $db->query($sql);
    while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
        $contact[$i]['page7_name'] = $row['page7_name'];
        $contact[$i]['page7_office_numbe'] = $row['page7_office_numbe'];
        $contact[$i]['page7_mobile_number'] = $row['page7_mobile_number'];
        $contact[$i]['page7_other_numbe'] = $row['page7_other_numbe'];
        $contact[$i]['page7_add_group']=  $row['page7_add_group'];
        $i++;
    }
    $_POST['length'] = $i-1;
} else {
    $sql =<<<EOF
        SELECT * from page7_contact where page7_add_group = '{$_POST["data"]}';
EOF;

    $ret = $db->query($sql);
    while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
        $contact[$i]['page7_name'] = $row['page7_name'];
        $contact[$i]['page7_office_numbe'] = $row['page7_office_numbe'];
        $contact[$i]['page7_mobile_number'] = $row['page7_mobile_number'];
        $contact[$i]['page7_other_numbe'] = $row['page7_other_numbe'];
        $contact[$i]['page7_add_group']=  $row['page7_add_group'];
        $i++;
    }
    $_POST['length'] = $i-1;
}


if ($_POST["data"] != 0 || $_POST["data"] != 1) {
    $sql =<<<EOF
        SELECT * from page7_group where page7_group = '{$_POST["data"]}';
EOF;
    $ret = $db->query($sql);
    $row = $ret->fetchArray(SQLITE3_ASSOC);
    $group['page7_group'] = $row['page7_group'];
    $group['page7_group_ring_tone'] = $row['page7_group_ring_tone'];
}

$db->close();

$_POST['contact'] = $contact;
$_POST['group'] = $group;
echo json_encode($_POST);

?>