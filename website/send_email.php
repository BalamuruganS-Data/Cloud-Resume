<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = "sbala1999@yahoo.com"; // Replace with your email address
  $subject = "New message from $name";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  
  if (mail($to, $subject, $body)) {
    echo "<script>alert('Message sent successfully!');</script>";
  } else {
    echo "<script>alert('Message failed to send.');</script>";
  }
}
?>
