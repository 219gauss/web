<?php
    $username = $_POST['username'];     $password = $_POST['password'];

    if($username == null || $password == null){
        header("location:index.html");
    }

    /* 连接数据库 */
    $db = new SQLite3("test.db");

    /* 查询数据 */
    $sql =<<<EOF
            SELECT * from userinfo;
EOF;
    $ret = $db->query($sql);
    $result = false;
    while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
        if($username==$row['USERNAME'] && $password==$row['PASSWORD']){
            $result = true;
            break;
        }
    }

    $db->close();

    if ($result) {

        $_POST['error'] = true;
        echo json_encode($_POST);
    }else {
        $_POST['error'] = false;
        echo json_encode($_POST);
    }
?>