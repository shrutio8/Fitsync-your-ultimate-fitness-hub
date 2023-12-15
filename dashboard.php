<?php
session_start();

// Check if the user is not logged in, redirect to the login page
if (!isset($_SESSION["username"])) {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<!-- Dashboard HTML content goes here -->
</html>
