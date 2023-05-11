<?php
// i think this is correct, we will all be using my credentials when accessing the DB
define("DB_HOST", "localhost"); // Leave this line as is
define("DB_NAME", "deans3"); // Set this to your username
define("DB_USER", "deans3"); // Set this to your username
define("DB_PASS", "6bff6d210e30"); // Set this to your DB password (from mysql_pass.txt)

try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
}
catch (mysqli_sql_exception $ex) {
    // Something went wrong...
    echo "<p>Error: Unable to connect to database.</p>";
    echo "<p>Debugging errno: " . $ex->getCode() . "</p>";
    echo "<p>Debugging error: " . $ex->getMessage() . "</p>";
    exit;
}
