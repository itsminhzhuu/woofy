<?php
session_start();
include 'db_connection.php';

// Assuming you've validated user credentials, get user_id from database
$user_id = 1; // Example, in a real scenario you would fetch this from the database

// Store user ID in session
$_SESSION['user_id'] = $user_id;

echo "User logged in!";
?>
