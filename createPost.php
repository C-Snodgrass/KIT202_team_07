<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $title = sanitize_input($_POST["title"]);
  $tags = sanitize_input($_POST["tags"]);
  $content = sanitize_input($_POST["content"]);
  $image = sanitize_input($_FILES["image"]["name"]);
  $targetDir = "uploads/";
  $targetFile = $targetDir . basename($image);

  // Check if image file is a actual image or fake image
  $check = getimagesize($_FILES["image"]["tmp_name"]);
  if($check !== false) {
    move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile);
  } else {
    echo "File is not an image.";
    exit;
  }

  // Connect to the database
  $servername = "localhost";
  $username = "dean3";
  $password = "6bff6d210e30";
  $dbname = "dean3";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Insert the blog post into the database
  $sql = "INSERT INTO blog_posts (title, tags, content, image) VALUES ('$title', '$tags', '$content', '$image')";

  if ($conn->query($sql) === TRUE) {
    echo "Blog post submitted successfully!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}

function sanitize_input($input) {
  $input = trim($input);
  $input = stripslashes($input);
  $input = htmlspecialchars($input);
  return $input;
}
?>
