<?php
require_once __DIR__ . '/../getRacine.php';
$action = isset($_GET['action']) ? $_GET['action'] : 'login';
switch ($action) {
    case 'signup': require_once __DIR__ . '/../vue/signup.php'; break;
    default:       require_once __DIR__ . '/../vue/login.php';  break;
}
?>
