<?php
print_r($_POST);

$page6_live_dialpad=        $_POST["page6_live_dialpad"];
$page6_inter_digit_time=    $_POST["page6_inter_digit_time"];
$page6_backlight_time=      $_POST["page6_backlight_time"];
$page6_contrast=            $_POST["page6_contrast"];
$page6_watch_dog=           $_POST["page6_watch_dog"];
$page6_ring_type=           $_POST["page6_ring_type"];
$page6_upload_ringtone=     $_POST["page6_upload_ringtone"];
$page6_screensaver_wait_time=   $_POST["page6_screensaver_wait_time"];
$page6_xml_browser_url=     $_POST["page6_xml_browser_url"];

/* 连接数据库 */
$db = new SQLite3("test.db");

$sql =<<<EOF
       UPDATE page6 set
       page6_live_dialpad =     '$page6_live_dialpad',
       page6_inter_digit_time = '$page6_inter_digit_time',
       page6_backlight_time =   '$page6_backlight_time',
       page6_contrast =         '$page6_contrast',
       page6_watch_dog =        '$page6_watch_dog',
       page6_ring_type =        '$page6_ring_type',
       page6_upload_ringtone =  '$page6_upload_ringtone',
       page6_screensaver_wait_time = '$page6_screensaver_wait_time',
       page6_xml_browser_url =  '$page6_xml_browser_url'
       where ID='1';
EOF;
$ret = $db->exec($sql);
if(!$ret){
    echo $db->lastErrorMsg();
} else {
    echo "Table created successfully\n";
}
$db->close();
?>