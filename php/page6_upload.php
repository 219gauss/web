<?php

/*
 * $_FILES["flag"]: 0 表示文件选择错误
 *                  1 表示文件上传成功
 *  */

$_FILES["flag"] = 0;
$allowedExts = array("wav","mp3");  //文件指出的格式
$temp = explode(".", $_FILES["page6_file_select"]["name"]);
$extension = end($temp);     // 获取文件后缀名

if (($_FILES["page6_file_select"]["size"] < 1024000)  // 文件小于1M
    && in_array($extension, $allowedExts)){
    if ($_FILES["page6_file_select"]["error"] > 0){
        $_FILES["flag"] = 0;
    }
    else{
        //删除上一个文件
        $files = scandir("../upload/");
        foreach ($files as $value) {
            if (!is_dir("../upload/".$value)) {
                unlink("../upload/".$value);
            }
        }
        // 拷贝文件
        move_uploaded_file($_FILES["page6_file_select"]["tmp_name"], "../upload/" . $_FILES["page6_file_select"]["name"]);
        chmod("../upload/" . $_FILES["page6_file_select"]["name"],0777);
        $_FILES["flag"] = 1;
    }
}
echo json_encode($_FILES["flag"]);
 ?>