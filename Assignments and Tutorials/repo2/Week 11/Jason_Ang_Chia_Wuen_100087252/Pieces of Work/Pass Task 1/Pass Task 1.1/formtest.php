<!DOCTYPE html>
<html lang="en">
<head>
	<title>WAI Form Test</title>
	<meta charset="utf-8" />
	<meta name="language" content="english" />
	<meta name="keywords" content="Accessibility,Lab,Tasks" />
	<meta name="description" content="WAI Table Test" />
</head>
<body>
    <h1>HTML - Form Data Extraction Test</h1>
    <p>The Data Entered Is Below</p>
    <table  style="border: 1px solid black;">
        <tr  style="border: 1px solid black;">
            <td style="border: 1px solid black;">#</td>
            <td style="border: 1px solid black;">Form Variable 'name'</td>
            <td style="border: 1px solid black;">Submitted 'value'</td>
        </tr>

        <tr  style="border: 1px solid black;">
            <td style="border: 1px solid black;">1</td>
            <td style="border: 1px solid black;">name</td>
            <td style="border: 1px solid black;"><?php echo $_POST['name']; ?></td>

        </tr>

        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">2</td>
            <td style="border: 1px solid black;">email</td>
            <td style="border: 1px solid black;"><?php echo $_POST['email']; ?></td>

        </tr>

        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">3</td>
            <td style="border: 1px solid black;">address</td>
            <td style="border: 1px solid black;"><?php echo $_POST['address']; ?></td>

        </tr>
        
        <tr  style="border: 1px solid black;">
            <td style="border: 1px solid black;">4</td>
            <td style="border: 1px solid black;">card</td>
            <td style="border: 1px solid black;"><?php echo $_POST['card']; ?></td>

        </tr>

        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">5</td>
            <td style="border: 1px solid black;">number</td>
            <td style="border: 1px solid black;"><?php echo $_POST['number']; ?></td>

        </tr>

        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">6</td>
            <td style="border: 1px solid black;">expiry</td>
            <td style="border: 1px solid black;"><?php echo $_POST['expiry']; ?></td>

        </tr>
    </table>
    Are all name value pairs here? Anything Missing?
    <p>
    <button onclick ="location.href='formtask.html';">back</button>
    </p>
</body>
</html>