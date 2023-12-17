<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $department = $_POST["department"];
    $semester = $_POST["semester"];
    $gender = $_POST["gender"];
    $status = isset($_POST["status"]) ? "Ya" : "Tidak";

    // Server-side validation
    if (empty($name) || empty($department) || empty($semester) || empty($status)) {
        die("Mohon lengkapi semua data!");
    }

    // Dummy database connection (replace with actual database connection)
    $dbHost = "localhost";
    $dbUser = "root";
    $dbPassword = "";
    $dbName = "data_mahasiswa";

    $conn = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Escape special characters to prevent SQL injection
    $name = mysqli_real_escape_string($conn, $name);
    $department = mysqli_real_escape_string($conn, $department);
    $semester = mysqli_real_escape_string($conn, $semester);
    $gender = mysqli_real_escape_string($conn, $gender);
    $status = mysqli_real_escape_string($conn, $status);

    // Save data to the database
    $sql = "INSERT INTO students (name, department, semester, gender, status)
            VALUES ('$name', '$department', '$semester', '$gender', '$status')";

    if (mysqli_query($conn, $sql)) {
        echo "Data berhasil disimpan ke database.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close database connection
    mysqli_close($conn);
} else {
    // If the form is not submitted, redirect to the main page
    header("Location: index.html");
    exit();
}

?>
