<?php
  if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: $name <$email>\r\n" . "MIME-Version: 1.0\r\n";

    mail('pvppfusioncouncil@gmail.com', $subject, $message, $headers);
  }
?>
