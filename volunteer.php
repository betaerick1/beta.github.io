<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }
    
    // Email content
    $to = "betaerick1@gmail.com"; // Replace with your email address
    $subject = "New Volunteer Sign-Up";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message";
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo "Thank you for signing up!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
