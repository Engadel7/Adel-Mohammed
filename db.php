<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "portfolio_db";
$port = 3307;

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}
?>