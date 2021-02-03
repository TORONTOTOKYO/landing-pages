<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$tel = $_POST['tel'];
// $nameCompany = $_POST['nameCompany'];
// // $email = $_POST['email'];
// $companySize = $_POST['companySize'];
// $formMessage = $_POST['formMessage'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                                                                                              // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'torontotokio@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'gogolynarD@2'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('torontotokio@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('raffa05@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);


// Файл

if (!empty($_FILES['image']['tmp_name'])) {
	$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
	if (copy($_FILES['image']['tmp_name'], $filePath)) {
		$fileAttach = $filePath;
		$body .= '<p><strong>Фото в приложении<strong></p>';
		$mail->addAttachment($fileAttach);
	}
}

// Set email format to HTML

$mail->Subject = 'Заявки с Digital-агенства';
$mail->Body    = '' . 'Имя: ' . $name . '<br>Номер телефона: ' . $tel  .

	$mail->AltBody = '';

// Отправляем

if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type:application/json');
echo json_encode($response);