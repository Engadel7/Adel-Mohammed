<?php
header('Content-Type: application/json');
require 'db.php';

$data = array();
$data['home'] = $conn->query("SELECT * FROM home_section LIMIT 1")->fetch_assoc();
$data['about'] = $conn->query("SELECT * FROM about_section LIMIT 1")->fetch_assoc();

echo json_encode($data);
$conn->close();
?>