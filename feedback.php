<!-- marketing@jafaksh.net -->

<?php 

$prefix = $_POST['prefix'];
$name = $_POST['name'];
$time = $_POST['time'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];

$mailHeader = "From: " . $prefix . $name . "<" . $email . ">\r\n";

$recipient = "nimbus2219@gmail.com";

mail($recipient, $time, $phoneNumber, $mailHeader)
or die("Error!")

echo"send!"

?>