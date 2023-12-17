<?php
// Mulai session
session_start();

// Simpan informasi pengguna ke dalam session
$_SESSION['user_id'] = 1;
$_SESSION['user_name'] = 'John Doe';
$_SESSION['user_role'] = 'student';

// Menggunakan informasi dari session
$userID = $_SESSION['user_id'];
$userName = $_SESSION['user_name'];
$userRole = $_SESSION['user_role'];

// Tampilkan informasi pengguna
echo "User ID: $userID<br>";
echo "User Name: $userName<br>";
echo "User Role: $userRole<br>";

// Akhiri session
session_destroy();
?>
