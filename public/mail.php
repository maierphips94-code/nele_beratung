<?php
header('Content-Type: application/json; charset=utf-8');

// CORS nur für lokale Entwicklung (React läuft auf anderem Port)
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($host === 'localhost' || str_starts_with($host, '127.') || str_starts_with($host, '192.168.')) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

// Honeypot: Bots füllen dieses Feld aus, Menschen nicht
if (!empty($input['website'])) {
    echo json_encode(['success' => true]); // Fake-Erfolg für Bots
    exit;
}

// Sanitize
$name    = htmlspecialchars(strip_tags(trim($input['name']    ?? '')));
$email   = filter_var(trim($input['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$angebot = htmlspecialchars(strip_tags(trim($input['angebot'] ?? '')));
$message = htmlspecialchars(strip_tags(trim($input['message'] ?? '')));

// Validate
if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 20) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

// ── Empfänger ──────────────────────────────────────────────────────────
$to = 'maier.phips.94@gmail.com'; // TEST – später durch Neles Adresse ersetzen
// ───────────────────────────────────────────────────────────────────────

$subject = '=?UTF-8?B?' . base64_encode('Neue Anfrage: ' . ($angebot ?: 'Kontaktformular')) . '?=';

$body  = "Neue Kontaktanfrage über das Formular:\n\n";
$body .= "Name:    $name\n";
$body .= "E-Mail:  $email\n";
if ($angebot) $body .= "Angebot: $angebot\n";
$body .= "\nNachricht:\n$message\n";
$body .= "\n--\nGesendet über das Kontaktformular";

$headers  = "From: Kontaktformular <noreply@" . $host . ">\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false]);
}
