<?php
require 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP

$name = $_POST['name'];
$enq = $_POST['enq'];
$email = $_POST['email'];
$number = $_POST['phone'];
$message = $_POST['message'];

date_default_timezone_set('Asia/Calcutta');
$time = date("H:i:s Y-m-d");

$mail->Host = 'mail.breakthroughgroup.in';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sitemail@breakthroughgroup.in';                 // SMTP username
$mail->Password = 'sitemail1945';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->From = 'sitemail@breakthroughgroup.in';
$mail->FromName = 'BT mail';
$mail->addAddress('btgroup.companies@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo("$email");
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = " $enq from $name";
$mail->Body    =  "$message <br><br> <b>Complete Details of this enquiry:</b> <br>
<b>Name: </b>$name<br>
<b>Email: </b>$email<br>
<b>Contact No: </b>$phone<br>
<b>Enq Type: </b>$enq<br>
<b>Sent on: </b>$time";

$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo "We have recieved your message. We will get back to you in few days.";
}
?>
