<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài Tập 1</title>
</head>

<body>
    <!-- Bài Tập 1 -->
    <h1>Kiểm tra tính chẵn lẻ của 1 số</h1>
    <?php
    $number = rand(10, 100);
    if ($number % 2 === 0) {
        $result = "chẵn";
    } else {
        $result = "lẻ";
    }
    ?>
    <p>Số:
        <?php echo $number; ?> là số
        <?php echo $result; ?>.
    </p>

    <!-- Bài Tập 2 -->
    <h1>Tính điểm</h1>
    <?php
    $score = 85;
    if ($score >= 90) {
        $grade = "A";
        $message = "Xuất sắc!";
    } else if ($score >= 80) {
        $grade = "B";
        $message = "Tốt!";
    } else if ($score >= 70) {
        $grade = "C";
        $message = "Trung bình!";
    } else if ($score >= 60) {
        $grade = "D";
        $message = "Đạt!";
    } else {
        $grade = "F";
        $message = "Không đạt!";
    }
    ?>
    <p>Điểm của bạn là:
        <?php echo $score; ?> và đạt mức
        <?php echo $grade; ?>
    </p>

    <!-- Bài Tập 3 -->

    <?php
    // Khởi tạo biến lưu trữ thông báo
    $message = "";
    // Kiểm tra xem người dùng đã nhấp vào nút đăng nhập chưa
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Lấy giá trị từ trường username và password
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Kiểm tra xem username và password có đúng không
        $expected_username = "admin";
        $expected_password = "password";

        if ($username == $expected_username && $password == $expected_password) {
            // Gán thông báo thành công vào biến $message
            $message = "Đăng nhập thành công!";
        } else {
            // Gán thông báo lỗi vào biến $message
            $message = "Tên đăng nhập hoặc mật khẩu không đúng!";
        }
    }
    ?>
    <h1>Login Form</h1>
    <form action="#" method="post">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br>

        <input type="submit" value="Login">
    </form>
    <?php
    if (!empty($message)) {
        echo "<p style='color: " . ($message == "Đăng nhập thành công!" ? "green" : "red") . ";'>$message</p>";
    }
    ?>

    <!-- Bài tập 1 -->
    <h1>Độ tuổi đăng ký</h1>
    <?php
    // TODO: Kiểm tra tuổi của người dùng và hiển thị thông báo phù hợp.
    // thông báo "Bạn đủ tuổi để đăng ký"  với trường hợp tuổi >=18
    // thông báo "Bạn chưa đủ tuổi để đăng ký" nêu tuổi < 18
    $age = 20;
    if ($age >= 18) {
        echo "Bạn đủ tuổi để đăng ký";
    } else {
        echo "Bạn chưa đủ tuổi để đăng ký";
    }
    ?>

    <!-- Bài tập 2 -->
    <h1>Kiểm tra điểm số</h1>
    <?php
    // TODO: Kiểm tra điểm số và hiển thị thông báo tương ứng.
    // Scores >= 90 là A, 80-89: B, 70-79: C, 60-69: D, dưới 60: F.
    $scoree = 75;
    if ($scoree > 90) {
        $grade = "A";
    } elseif ($scoree >= 80 && $scoree <= 89) {
        $grade = "B";
    } elseif ($scoree >= 70 && $scoree <= 79) {
        $grade = "C";
    } elseif ($scoree >= 60 && $scoree <= 69) {
        $grade = "D";
    } else {
        $grade = "F";
    }
    ?>
    <p>Điểm của bạn là:
        <?php echo $scoree; ?> và đạt mức
        <?php echo $grade; ?>

    </p>

</body>

</html>