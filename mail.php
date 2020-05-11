<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = SMTP::DEBUG_OFF; // Enable verbose debug output
    $mail->isSMTP(); // Send using SMTP
    $mail->Host = 'smtp.163.com'; // Set the SMTP server to send through
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = 'simplev2020@163.com'; // SMTP username
    $mail->Password = 'WZSEJATUIIKVDKGA'; // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 994; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    // Recipients
    $mail->setFrom('simplev2020@163.com', 'simplev2020');
    // $mail->addAddress('joe@example.net', 'Joe User'); // Add a recipient
    $mail->addAddress('hello@jane-vision.com'); // Name is optional
    $mail->addAddress('simplev2020@163.com'); // Name is optional
    $mail->addAddress('gaojun@jane-vision.com'); // Name is optional
                                          // $mail->addReplyTo('info@example.com', 'Information');
                                          // $mail->addCC('cc@example.com');
                                          // $mail->addBCC('bcc@example.com');


    // Content
    $mail->isHTML(true); // Set email format to HTMfL
    $mail->Subject = '客户申请';
    $mail->Body = '姓名:'.$_GET['name']."<br>手机号:".$_GET['tel'];
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}