<?php
/* ==========================================
   KHOBRAGADE COMPUTER SERVICE CENTRE
   DATABASE CONFIGURATION
========================================== */

$host = "localhost";
$dbname = "khobragade_portal";
$username = "root";
$password = "";

try {

    $conn = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $username,
        $password
    );

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {

    die("Database Connection Failed: " . $e->getMessage());

}
?>
