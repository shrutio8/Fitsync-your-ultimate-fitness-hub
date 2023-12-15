<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydatabase";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];


$stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Verify the entered password with the hashed password in the database
    if (password_verify($password, $row['password'])) {
        // Redirect to the specified URL (home.html by default)
        $redirectUrl = isset($_POST['redirect']) ? $_POST['redirect'] : 'home.html';
        header("Location: $redirectUrl");
        exit();
    } else {
        echo "Invalid password!";
    }
} else {
    echo "User not found!";
}


$stmt->close();

$conn->close();
?>