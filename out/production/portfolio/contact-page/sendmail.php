<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'mehmetetan@gmail.com';
    $subject = 'FROM PORTFOLIO FORM';

    $headers = "From: " . $email;

    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    if(mail($to, $subject, $body, $headers)) {
        echo 'Message successfully sent!';
    } else {
        echo 'Message could not be sent.';
    }
}
?>
