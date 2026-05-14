<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $conn->real_escape_string($_POST['user_name']);
    $email = $conn->real_escape_string($_POST['user_email']);
    $message = $conn->real_escape_string($_POST['user_message']);

    $sql = "INSERT INTO contact_messages (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {

    echo "<script>
                alert('Thank you! Your message has been sent successfully.');
                window.location.href='index.html';
              </script>";
    } else {
        echo "Error: " . $conn->error;
    }
}
$conn->close();
?>