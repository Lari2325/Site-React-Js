<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'sandbox.smtp.mailtrap.io'; 
    $mail->SMTPAuth   = true;
    $mail->Username   = '92f784d47af185';
    $mail->Password   = '67cab1d3a29580'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 2525; 

    $mail->SMTPDebug = 2; 

    $mail->setFrom('b35.larissa@gmail.com', 'Seu Nome');
    $mail->addAddress($_POST['email'], $_POST['name']); 

    $mail->isHTML(true);
    $mail->Subject = $_POST['subject']; 
    $mail->Body    = $_POST['message']; 

    $mail->send();
    echo 'Mensagem enviada com sucesso!';
} catch (Exception $e) {
    echo "A mensagem não pôde ser enviada. Erro do Mailer: {$mail->ErrorInfo}";
}