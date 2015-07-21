<?php
require_once 'actions/Mobile_Detect.php';
$detect = new Mobile_Detect();

if ($detect->isMobile() && !$detect->isTablet()) {
    header('Location: mobile.html');
    exit(0);
}
?>
