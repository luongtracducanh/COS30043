<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zekkou";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$food = $request->food;
$origin = $request->origin;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO kyo (id,food_name,origin_name)VALUES(NULL,'$food','$origin')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>