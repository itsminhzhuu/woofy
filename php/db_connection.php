<?php
// Database connection details
$servername = "localhost";  // Your server name (localhost if running locally)
$username = "root";         // Your MySQL username
$password = "";             // Your MySQL password
$dbname = "woofy_store";    // Your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
