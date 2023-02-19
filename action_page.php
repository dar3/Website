<?php

echo "<pre>";

print_r($_POST);

echo '</pre>';

$userName = $_POST['firstname'];
$userEmail = $_POST['lastname'];
$messageSubject = $_POST['subject'];
$message = $_POST['message'];

$to = "dartred1337@gmail.com";
$body = "";

$body .= "From: ".$userName. "\r\n";
$body .= "Email: ".$userEmail. "\r\n";
$body .= "Message: ".$message. "\r\n";

mail($to, $messageSubject, $body);

header("Location:success" );

?>