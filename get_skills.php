<?php
header('Content-Type: application/json');
require 'db.php';

$skills = array();
$result = $conn->query("SELECT * FROM skills");
while($row = $result->fetch_assoc()) {
    $skills[] = $row;
}

echo json_encode($skills);
$conn->close();
?>