<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "shrikarz@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
if(mail($recipient, $subject, $formcontent, $mailheader)){
    echo "Thank You!";
} else{
    echo "something went wrong";
}
?>
