<?php
/**
 * HDS-Explorer Central Community Registry API
 * This script receives registration data from distributed HDS-Explorer Server instances.
 */

// --- CONFIGURATION ---
// Replace with your actual InfinityFree DB credentials

$db_host = 'localhost'; // Usually 'sqlXXX.epizy.com' for InfinityFree
$db_user = '';
$db_pass = '';
$db_name = '';

// A shared secret to ensure only HDS-Explorer apps can register
$api_token = 'HDS_EXPLORER_COMMUNITY_2026';

// The reward for registering
$whatsapp_link = "https://chat.whatsapp.com/H0l8Z3vYaL2Hd9BtiIMJLw";

// --- HEADER SETUP ---
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allows requests from any HDS-Explorer Server instance
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// --- DATA PROCESSING ---
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

// 1. Basic Validation
if (!$input || $_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method or payload.']);
    exit;
}

// 2. Token Security Check
if (!isset($input['token']) || $input['token'] !== $api_token) {
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized.']);
    exit;
}

// 3. Connect to Database
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed.']);
    exit;
}

// 4. Sanitize and Prepare Data
$institution    = $conn->real_escape_string($input['institution'] ?? 'Unknown');
$country        = $conn->real_escape_string($input['country'] ?? 'Unknown');
$contact_person = $conn->real_escape_string($input['contact'] ?? '');
$email          = $conn->real_escape_string($input['email'] ?? '');
$whatsapp_num   = $conn->real_escape_string($input['whatsapp_number'] ?? '');
$users_count    = (int)($input['users'] ?? 0);
$instance_url   = $conn->real_escape_string($input['instance_url'] ?? '');
$is_public      = isset($input['is_public']) && $input['is_public'] ? 1 : 0;

// 5. Insert into Database
$sql = "INSERT INTO community_registrations
        (institution_name, country, contact_person, email, whatsapp_number, estimated_users, instance_url, is_public)
        VALUES
        ('$institution', '$country', '$contact_person', '$email', '$whatsapp_num', $users_count, '$instance_url', $is_public)";

if ($conn->query($sql) === TRUE) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Registration complete. Welcome to the HDS-Explorer Community!',
        'whatsapp_invite' => $whatsapp_link
    ]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Could not save registration: ' . $conn->error]);
}

$conn->close();
?>
