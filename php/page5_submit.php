<?php


$forward_emergency =          $_POST["page5_forward_emergency"];
$forward_authorized_numbers = $_POST["page5_forward_authorized_numbers"];
$forward_mode =               $_POST["page5_forward_mode"];
$forward_account =            $_POST["page5_forward_account"];
$always_forward =             $_POST["page5_always_forward"];
$always_forward_on_code =     $_POST["page5_always_forward_on_code"];
$always_forward_target =      $_POST["page5_always_forward_target"];
$always_forward_off_code =    $_POST["page5_always_forward_off_code"];
$busy_forward =               $_POST["page5_busy_forward"];
$busy_forward_target =        $_POST["page5_busy_forward_target"];
$busy_forward_on_code =       $_POST["page5_busy_forward_on_code"];
$busy_forward_off_code =      $_POST["page5_busy_forward_off_code"];
$no_answer_forward =          $_POST["page5_no_answer_forward"];
$ring_time =                  $_POST["page5_ring_time"];
$no_answer_forward_target =   $_POST["page5_no_answer_forward_target"];
$no_answer_forward_on_code =  $_POST["page5_no_answer_forward_on_code"];
$no_answer_forward_off_code = $_POST["page5_no_answer_forward_off_code"];
$dnd_emergency =              $_POST["page5_dnd_emergency"];
$dnd_authorized_numbers =     $_POST["page5_dnd_authorized_numbers"];
$dnd_mode =                   $_POST["page5_dnd_mode"];
$dnd_account =                $_POST["page5_dnd_account"];
$dnd_status =                 $_POST["page5_dnd_status"];
$dnd_on_code =                $_POST["page5_dnd_on_code"];
$dnd_off_code =               $_POST["page5_dnd_off_code"];

/* 连接数据库 */
$db = new SQLite3("test.db");

$sql =<<<EOF
    UPDATE page5 set
            forward_emergency = '$forward_emergency', forward_authorized_numbers = '$forward_authorized_numbers', forward_mode = '$forward_mode', forward_account = '$forward_account',
            always_forward = '$always_forward', always_forward_on_code = '$always_forward_on_code', always_forward_target = '$always_forward_target', always_forward_off_code = '$always_forward_off_code',
            busy_forward = '$busy_forward',busy_forward_target = '$busy_forward_target', busy_forward_on_code = '$busy_forward_on_code', busy_forward_off_code = '$busy_forward_off_code',
            no_answer_forward = '$no_answer_forward', ring_time = '$ring_time',no_answer_forward_target = '$no_answer_forward_target', no_answer_forward_on_code = '$no_answer_forward_on_code',
            no_answer_forward_off_code = '$no_answer_forward_off_code', dnd_emergency = '$dnd_emergency', dnd_authorized_numbers = '$dnd_authorized_numbers',dnd_mode = '$dnd_mode',
            dnd_account = '$dnd_account', dnd_status = '$dnd_status', dnd_on_code = '$dnd_on_code', dnd_off_code = '$dnd_off_code'
            where ID='1';
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