<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $first_name = htmlspecialchars($_POST["first_name"]);
    $last_name = htmlspecialchars($_POST["last_name"]);
    $visitor_email = htmlspecialchars($_POST["visitor_email"]);
    $message = htmlspecialchars($_POST["message"]);

    $email_from = "szychlinska@gmail.com";
    $email_subject = "new form submission";
    $email_body = "You have received a new message from the user $first_name $last_name.\nHere is the message:\n $message\nVisitor's email: $visitor_email";

    $to = "szychlinska@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers = "Reply-To: $visitor_email \r\n";
    mail($to, $email_subject, $email_body, $headers);

    ?>

    <p>Thanks for your message <?=$_POST['first_name'] . " " . $_POST['last_name']?>.</p>
    <a href="index.php">Reset</a>
</body>
</html>