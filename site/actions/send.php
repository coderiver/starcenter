<?php

    function strip_all($str_to_strip) {
        $striped=strip_tags($striped);
        $striped=urldecode($str_to_strip);
        $striped=mysql_escape_string($striped);
        return $striped;
    }

    $fname = $_POST["name"];
    // $femail = $_POST["email"];
    $fphone = $_POST["phone"];
    $fmsg = $_POST["message"];
    $fsubject = strip_all($_POST["subject"]);

    $header = 'MIME-Version: 1.0' . "\r\n" ;
    $header .= 'Content-type: text/html; charset=UTF-8' . "\r\n" ;
    // $header .= 'From: '. $fname . "\r\n";

    if($fmsg) {
        $message = "\n<b>Имя:</b> ".$fname."\n<br/><b>Телефон:</b> ".$fphone."\n<br/><b>Сообщение:</b> ".$fmsg;
    }
    else {
        $message = "\n<b>Имя:</b> ".$fname."\n<br/><b>Телефон:</b> ".$fphone;
    }

    mail("info@vnstar.com.ua", $fsubject, $message, $header);

?>
