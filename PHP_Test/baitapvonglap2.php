<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thực hành Validation</title>

</head>

<body>
    <?php

    // Bài Tập Check TK
    // Hàm validate name
    $message = "";
    function validateName($name)
    {
        if (empty($name)) {
            return false; // Tên không hợp lệ
        }

        if (!preg_match('/^[a-zA-Z0-9]+$/', $name)) {
            return false; // Tên không hợp lệ
        }

        $nameLength = strlen($name);
        if ($nameLength < 3 || $nameLength > 255) {
            return false; // Tên không hợp lệ
        }

        return true; // Tên hợp lệ
    }

    // Hàm validate email
    function validateEmail($email)
    {
        if (empty($email)) {
            return false; // Email không hợp lệ
        }

        if (strpos($email, '@') === false) {
            return false; // Email không hợp lệ
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return false; // Email không hợp lệ
        }

        return true; // Email hợp lệ
    }

    // Kiểm tra dữ liệu khi form được gửi đi
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];

        // Kiểm tra tính hợp lệ của tên và email
        if (validateName($name) && validateEmail($email)) {
            // Dữ liệu hợp lệ, tiến hành xử lý
            $message = "Dữ liệu hợp lệ!";
        } else {
            // Dữ liệu không hợp lệ, thông báo lỗi
            $message = "Dữ liệu không hợp lệ!";
        }
    }
    ?>

    <form method="POST" action="">
        <label for="name">Tên:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <input type="submit" value="Gửi">
    </form>
    <?php
    if (!empty($message)) {
        echo "<p style='color: " . ($message == "Dữ liệu hợp lệ!" ? "green" : "red") . ";'>$message</p>";
    }
    ?>
</body>

</html>