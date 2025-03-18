<?php
session_start();
include 'db_connection.php'; // Your DB connection file

// Assuming the user is logged in, their user_id is stored in session
$user_id = $_SESSION['user_id'];
$product_id = $_POST['product_id']; // Product ID passed via POST
$quantity = $_POST['quantity'];

// Check if the product is already in the cart
$query = "SELECT * FROM cart WHERE user_id = $user_id AND product_id = $product_id";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    // If the product is already in the cart, update the quantity
    $update_query = "UPDATE cart SET quantity = quantity + $quantity WHERE user_id = $user_id AND product_id = $product_id";
    mysqli_query($conn, $update_query);
} else {
    // If the product is not in the cart, insert a new record
    $insert_query = "INSERT INTO cart (user_id, product_id, quantity) VALUES ($user_id, $product_id, $quantity)";
    mysqli_query($conn, $insert_query);
}

echo "Product added to cart successfully!";
?>
