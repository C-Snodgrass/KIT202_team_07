<?php
// Retrieve form data
$title = $_POST['title'];
$tags = $_POST['tags'];
$content = $_POST['content'];

// Sanitize form data
$title = mysqli_real_escape_string($conn, $title);
$tags = mysqli_real_escape_string($conn, $tags);
$content = mysqli_real_escape_string($conn, $content);

// Insert data into database
$stmt = $conn->prepare("INSERT INTO posts (title, tags, content, post_date) VALUES (?, ?, ?, NOW())");
$stmt->bind_param("sss", $title, $tags, $content);
$stmt->execute();
$stmt->close();

// Redirect to confirmation page
header("Location: confirmation.php");
exit();
?>
