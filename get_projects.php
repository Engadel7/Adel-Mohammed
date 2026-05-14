<?php
header('Content-Type: application/json');
require 'db.php';

$projects = array();
$result = $conn->query("SELECT * FROM projects");
while($row = $result->fetch_assoc()) {
    $projects[] = $row;
}

echo json_encode($projects);
$conn->close();
?>