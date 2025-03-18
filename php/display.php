// Display Cart
$query = "SELECT * FROM cart WHERE user_id = $user_id";
$result = mysqli_query($conn, $query);
while ($row = mysqli_fetch_assoc($result)) {
    echo "<div>{$row['product_id']} - Quantity: {$row['quantity']}</div>";
}

// Display Favorites
$query = "SELECT * FROM favorites WHERE user_id = $user_id";
$result = mysqli_query($conn, $query);
while ($row = mysqli_fetch_assoc($result)) {
    echo "<div>{$row['product_id']} - Favorite</div>";
}
