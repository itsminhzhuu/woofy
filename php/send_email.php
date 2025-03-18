<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set email parameters
    $to = "pheaknarin18@gmail.com"; // my email address
    $subject = "Contact Form Submission from $name";
    $body = "You have received a new message from $name ($email):\n\n$message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "Invalid request.";
}
?>
