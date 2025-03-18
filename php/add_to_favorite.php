<?php
session_start();
include 'db_connection.php'; // Your DB connection file

// Assuming the user is logged in, their user_id is stored in session
$user_id = $_SESSION['user_id'];
$product_id = $_POST['product_id']; // Product ID passed via POST

// Insert the product into the favorites table
$query = "INSERT INTO favorites (user_id, product_id) VALUES ($user_id, $product_id)";
mysqli_query($conn, $query);

echo "Product added to favorites!";
?>
