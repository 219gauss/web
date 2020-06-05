<?php

$account1_type =          $_POST["page4_account1_type"];
$account1_value =         $_POST["page4_account1_value"];
$account1_lable =         $_POST["page4_account1_lable"];
$account1_line_select =   $_POST["page4_account1_line_select"];
$account1_extension =     $_POST["page4_account1_extension"];
$account2_type =          $_POST["page4_account2_type"];
$account2_value =         $_POST["page4_account2_value"];
$account2_lable =         $_POST["page4_account2_lable"];
$account2_line_select =   $_POST["page4_account2_line_select"];
$account2_extension =     $_POST["page4_account2_extension"];
$account3_type =          $_POST["page4_account3_type"];
$account3_value =         $_POST["page4_account3_value"];
$account3_lable =         $_POST["page4_account3_lable"];
$account3_line_select =   $_POST["page4_account3_line_select"];
$account3_extension =     $_POST["page4_account3_extension"];

/* 连接数据库 */
$db = new SQLite3("test.db");

/* $sql =<<<EOF
      CREATE TABLE page4(
        ID INT PRIMARY KEY              NOT NULL,
        type         CHAR(10)  NOT NULL,
        value        CHAR(10)  NOT NULL,
        lable        CHAR(10)  NOT NULL,
        line_select  CHAR(10)  NOT NULL,
        extension    CHAR(10)  NOT NULL);
EOF; */

//账号一更新
$sql =<<<EOF
        UPDATE page4 set
        type = '$account1_type',value = '$account1_value',lable = '$account1_lable',line_select = '$account1_line_select',extension = '$account1_extension' where ID='1';
EOF;
    $ret = $db->exec($sql);

//账号二更新
$sql =<<<EOF
        UPDATE page4 set
        type = '$account2_type',value = '$account2_value',lable = '$account2_lable',line_select = '$account2_line_select',extension = '$account2_extension' where ID='2';
EOF;
    $ret = $db->exec($sql);

$sql =<<<EOF
        UPDATE page4 set
        type = '$account3_type',value = '$account3_value',lable = '$account3_lable',line_select = '$account3_line_select',extension = '$account3_extension' where ID='3';
EOF;
    $ret = $db->exec($sql);

    if(!$ret){
        $_POST['flag'] = "0";
    } else {
        $_POST['flag'] = "1";
    }

$db->close();

echo json_encode($_POST);
?>