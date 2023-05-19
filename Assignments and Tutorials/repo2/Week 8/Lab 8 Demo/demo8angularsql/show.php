<?php

// Create connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zekkou";
$conn = new mysqli($servername, $username, $password, $dbname);

$output = array();
$sql ="SELECT * FROM kyo";

$result = mysqli_query($conn, $sql);


// Check connection

	
	while ($row = mysqli_fetch_assoc($result))
	{
		$output[] = array(
		"id" => $row['id'],
		"food_name" =>$row['food_name'],
		"origin_name" =>$row['origin_name']
		);
	}
	
	echo json_encode($output);
	exit;



?>