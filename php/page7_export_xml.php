<?php
$doc = new \DOMDocument('1.0','utf-8');//引入类并且规定版本编码
$doc->formatOutput = TRUE;

//创建root根节点
$root = $doc->createElement("root");
$doc->appendChild($root);

//在根节点下创建group和contact节点
$root_group = $doc->createElement("root_group");
$root->appendChild($root_group);

$root_contact = $doc->createElement("root_contact");
$root->appendChild($root_contact);

/*---------------------------------------------------------------*/
/* 连接数据库 */
$db = new SQLite3("test.db");

$sql =<<<EOF
        SELECT * from page7_group;
EOF;
$ret = $db->query($sql);
while($row = $ret->fetchArray(SQLITE3_ASSOC)){
    //在group节点中填充数据
    $group = $doc->createElement("group");
    $group->setAttribute("display_name",$row['page7_group']);
    $group->setAttribute("ring",$row['page7_group_ring_tone']);
    $root_group->appendChild($group);
}

//在group节点中填充空数据
$group = $doc->createElement("group");
$group->setAttribute("display_name","");
$group->setAttribute("ring","");
$root_group->appendChild($group);

$sql =<<<EOF
        SELECT * from page7_contact;
EOF;
$ret = $db->query($sql);
while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
    //在contact节点中填充数据
    $contact = $doc->createElement("contact");
    $contact->setAttribute("display_name",$row['page7_name']);
    $contact->setAttribute("office_number",$row['page7_office_numbe']);
    $contact->setAttribute("mobile_number",$row['page7_mobile_number']);
    $contact->setAttribute("other_number",$row['page7_other_numbe']);
    $contact->setAttribute("account",$row['page7_ring_tone']);
    $contact->setAttribute("ring",$row['page7_add_group']);
    $contact->setAttribute("group_id_name",$row['page7_account']);
    $contact->setAttribute("auto_divert",$row['page7_auto_divert']);
    $root_contact->appendChild($contact);
}

//在contact节点中填充空数据
$contact = $doc->createElement("contact");
$contact->setAttribute("display_name","");
$contact->setAttribute("office_number","");
$contact->setAttribute("mobile_number","");
$contact->setAttribute("other_number","");
$contact->setAttribute("account","");
$contact->setAttribute("ring","");
$contact->setAttribute("group_id_name","");
$contact->setAttribute("auto_divert","");
$root_contact->appendChild($contact);

$doc->save("C:/Users/Administrator/Downloads/test.xml");//保存代码
$db->close();
?>