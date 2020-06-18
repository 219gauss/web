<?php

$page8_user_type=       $_POST["page8_user_type"];
$page8_old_password=    $_POST["page8_old_password"];
$page8_new_password=    $_POST["page8_new_password"];
$page8_confirm_password=$_POST["page8_confirm_password"];
$ret = false;

/* 连接数据库 */
$db = new SQLite3("test.db");

/* 查询数据 */
$sql =<<<EOF
        SELECT * from userinfo where USERNAME = '$page8_user_type';
EOF;
$tmp = $db->query($sql);
$row = $tmp->fetchArray(SQLITE3_ASSOC);

switch ($page8_user_type){
    case "admin":
        if ($row['PASSWORD'] == $page8_old_password && $page8_new_password == $page8_confirm_password) {
            $sql =<<<EOF
               UPDATE userinfo set
               PASSWORD =  '$page8_new_password'
               where USERNAME = '$page8_user_type';
EOF;
            $ret = $db->exec($sql);
        }
        break;
    case "user":
        if ($page8_new_password == $page8_confirm_password){
            $sql =<<<EOF
               UPDATE userinfo set
               PASSWORD =  '$page8_new_password'
               where USERNAME = 'pzp';
EOF;
            $ret = $db->exec($sql);
        }
        break;
    default:
        break;
}

if(!$ret){
    $_POST['flag'] = "0";
} else {
    $_POST['flag'] = "1";
}

$db->close();
echo json_encode($_POST);
?>