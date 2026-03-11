<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// LOG FUNCTIE: Schrijft naar maillog.txt in de api map
function log_mail_attempt($name, $status) {
    $log_file = 'maillog.txt';
    $timestamp = date("Y-m-d H:i:s");
    $entry = "[$timestamp] Klant: $name | Status: $status" . PHP_EOL;
    file_put_contents($log_file, $entry, FILE_APPEND);
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") exit();

// Honeypot tegen bots
if (!empty($_POST["website"])) {
    log_mail_attempt("BOT DETECTED", "Geblokkeerd via honeypot");
    exit(json_encode(["success" => true]));
}

// Data ophalen
$name = strip_tags($_POST["name"] ?? "Onbekend");
$email = filter_var($_POST["email"] ?? "", FILTER_SANITIZE_EMAIL);
$phone = strip_tags($_POST["phone"] ?? "Niet opgegeven");
$address = strip_tags($_POST["address"] ?? "Niet opgegeven");
$workAddress = strip_tags($_POST["workAddress"] ?? "Niet opgegeven");
$date = strip_tags($_POST["date"] ?? "Niet opgegeven");
$message = nl2br(strip_tags($_POST["message"] ?? ""));

$to = "info@devoogt-declercq.be";
$subject = "Nieuwe aanvraag: $name";

// De mooie visuele layout
$htmlContent = "
<html>
<body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>
    <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);'>
        <div style='background: #111111; padding: 25px; text-align: center; border-bottom: 5px solid #FACC15;'>
            <h1 style='color: #FACC15; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 2px;'>Nieuwe Aanvraag</h1>
        </div>
        <div style='padding: 30px; color: #333333;'>
            <div style='margin-bottom: 20px; border-left: 3px solid #FACC15; padding-left: 15px;'>
                <div style='font-size: 11px; color: #999; text-transform: uppercase;'>Klant</div>
                <div style='font-size: 16px; font-weight: bold;'>$name</div>
            </div>
            <div style='margin-bottom: 20px; border-left: 3px solid #FACC15; padding-left: 15px;'>
                <div style='font-size: 11px; color: #999; text-transform: uppercase;'>Contact</div>
                <div style='font-size: 15px;'>Email: $email <br> Tel: $phone</div>
            </div>
            <div style='margin-bottom: 20px; border-left: 3px solid #FACC15; padding-left: 15px;'>
                <div style='font-size: 11px; color: #999; text-transform: uppercase;'>Locatie & Planning</div>
                <div style='font-size: 14px;'>Adres: $address <br> Werf: $workAddress <br> Datum: $date</div>
            </div>
            <div style='margin-bottom: 10px; border-left: 3px solid #FACC15; padding-left: 15px;'>
                <div style='font-size: 11px; color: #999; text-transform: uppercase;'>Omschrijving</div>
                <div style='font-size: 15px; background: #f9f9f9; padding: 10px; margin-top: 5px;'>$message</div>
            </div>
        </div>
        <div style='background: #eeeeee; padding: 15px; text-align: center; font-size: 11px; color: #777777;'>
            Verzonden via de officiële website van Devoogt-Declercq.
        </div>
    </div>
</body>
</html>
";

// 1. Bijlage verwerken
$attachment = null;
$fileName = "";
if (isset($_FILES["photo"]) && $_FILES["photo"]["error"] == UPLOAD_ERR_OK) {
    $tmpName = $_FILES["photo"]["tmp_name"];
    $fileName = basename($_FILES["photo"]["name"]);
    $fileSize = $_FILES["photo"]["size"];

    if ($fileSize < 10 * 1024 * 1024) { 
        $attachment = chunk_split(base64_encode(file_get_contents($tmpName)));
    }
}

// 2. Mail opbouwen met boundary
$boundary = md5(time());
$headers = "MIME-Version: 1.0\r\n";
$headers .= "From: Website Devoogt-Declercq <website@devoogt-declercq.be>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// HTML Gedeelte
$body = "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $htmlContent . "\r\n\r\n";

// Bijlage Gedeelte
if ($attachment) {
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"$fileName\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $attachment . "\r\n";
}

$body .= "--$boundary--";

// 3. Verzenden & Loggen
if (mail($to, $subject, $body, $headers)) {
    log_mail_attempt($name, "SUCCESS - Mail verzonden naar server");
    echo json_encode(["success" => true]);
} else {
    log_mail_attempt($name, "FAIL - Server weigerde verzending");
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mail server error"]);
}
?>