<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email address where you want to receive the messages
    $to = "betaerick@gmail.com"; // Replace with your own email address

    // Subject of the email
    $subject = "Message from $name";

    // Compose the email message
    $email_message = "Name: $name\n\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";

    // Headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Success message (for AJAX response, if needed)
        echo json_encode(array('status' => 'success'));
    } else {
        // Error message (for AJAX response, if needed)
        echo json_encode(array('status' => 'error'));
    }
}

