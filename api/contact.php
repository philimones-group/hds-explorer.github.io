<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data
    $input = json_decode(file_get_contents('php://input'), true);

    $email   = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($input['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($input['message'], FILTER_SANITIZE_STRING);

    if (empty($email) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
        exit;
    }

    $to = "paulphilimone@gmail.com"; // Your email
    $email_subject = "HDS-Explorer Contact Form: " . ($subject ? $subject : "General Inquiry");

    $email_body = "New message from HDS-Explorer website:\n\n";
    $email_body .= "From: $email\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message";

    // IMPORTANT: InfinityFree often requires the 'From' address to be from your domain
    $headers = "From: webmaster@hds-explorer.org\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Email delivery failed. Please try again later.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request.']);
}
?>
