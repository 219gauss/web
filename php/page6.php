<?php

/* 连接数据库 */
$db = new SQLite3("test.db");

/* 查询数据 */
$sql =<<<EOF
            SELECT * from page6;
EOF;
$ret = $db->query($sql);
$data = $ret->fetchArray(SQLITE3_ASSOC);

$db->close();

$_POST['data'] = Array(
    "page6_live_dialpad"        => $data['page6_live_dialpad'],
    "page6_inter_digit_time"    => $data['page6_inter_digit_time'],
    "page6_backlight_time"      => $data['page6_backlight_time'],
    "page6_contrast"            => $data['page6_contrast'],
    "page6_watch_dog"           => $data['page6_watch_dog'],
    "page6_ring_type"           => $data['page6_ring_type'],
    "page6_upload_ringtone"     => $data['page6_upload_ringtone'],
    "page6_screensaver_wait_time"  => $data['page6_screensaver_wait_time'],
    "page6_xml_browser_url"     => $data['page6_xml_browser_url']
    );
echo json_encode($_POST);

?>