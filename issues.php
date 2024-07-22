<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and sanitize them
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $issue = htmlspecialchars(trim($_POST["issue"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Email content
    $to = "betaerick1@gmail.com"; // Replace with your email address
    $subject = "New Form Submission";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Issue: $issue\n";
    $body .= "Message:\n$message";

    // Send email (optional, uncomment the lines below to enable email sending)
    // For security reasons, it's recommended to use a library like PHPMailer for sending emails
    // if (mail($to, $subject, $body)) {
    //     echo "Thank you! Your message has been sent.";
    // } else {
    //     echo "Oops! Something went wrong and we couldn't send your message.";
    // }

    // For demonstration purposes, let's just echo the submitted data
    echo "Thank you for your submission!\n\n";
    echo "<strong>Name:</strong> $name<br>";
    echo "<strong>Email:</strong> $email<br>";
    echo "<strong>Issue:</strong> $issue<br>";
    echo "<strong>Message:</strong><br>$message";
} else {
    // If the form is not submitted, redirect to the form page or show an error message
    echo "Form submission error.";
}

