<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Email recipient (change this to your desired email address)
    $to = "betaerick1@gmail.com";

    // Email subject
    $subject = "New Volunteer Sign-Up";

    // Email message
    $email_message = "
        Name: $name\n
        Email: $email\n
        Phone: $phone\n
        Message:\n$message\n
    ";

    // Headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Thank you, $name! Your information has been submitted successfully and we have received your message.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    // Redirect back to the form page if accessed directly
    header("Location: index.html");
    exit;
}

