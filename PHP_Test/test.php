<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <?php

    // Bài 1
    echo "Bài 1<br>";
    function sumArray($arr)
    {
        $sum = 0;
        foreach ($arr as $value) {
            $sum += $value;
        }
        return $sum;
    }

    $array = [1, 2, 3, 4, 5];
    $result = sumArray($array);
    echo "Tổng các phần tử trong mảng là: " . $result . "<br>";

    // Bài 2
    echo "Bài 2<br>";
    function isPrimeNumber($num)
    {
        if ($num <= 1) {
            return false; // Số nhỏ hơn hoặc bằng 1 không phải số nguyên tố
        }
        // Kiểm tra các số từ 2 đến căn bậc hai của $num
        // Nếu $num chia hết cho một số trong khoảng này, thì không phải số nguyên tố
        for ($i = 2; $i <= sqrt($num); $i++) {
            if ($num % $i == 0) {
                return false;
            }
        }
        return true;
    }

    // Gọi hàm để kiểm tra kết quả
    $number = 17;
    if (isPrimeNumber($number)) {
        echo $number . " là số nguyên tố.<br>";
    } else {
        echo $number . " không là số nguyên tố.<br>";
    }

    // Bài 3
    echo "Bài 3<br>";
    function findMaxValue($arr)
    {
        return max($arr);
    }

    // Gọi hàm để kiểm tra kết quả
    $array = [10, 5, 8, 20, 3];
    $result = findMaxValue($array);
    echo "Giá trị lớn nhất trong mảng là: " . $result . "<br>";

    // Bài 4
    echo "Bài 4<br>";
    function countOccurrences($arr, $value)
    {
        $count = 0; // Biến đếm ban đầu là 0
        // Duyệt qua từng phần tử trong mảng và kiểm tra giá trị
        foreach ($arr as $element) {
            if ($element == $value) {
                $count++; // Tăng biến đếm nếu tìm thấy giá trị cần tìm
            }
        }
        return $count; // Trả về số lần xuất hiện
    }

    // Gọi hàm để kiểm tra kết quả
    $array = [1, 2, 3, 4, 2, 5, 2];
    $valueToFind = 2;
    $result = countOccurrences($array, $valueToFind);
    echo "Số lần xuất hiện của " . $valueToFind . " trong mảng là: " . $result . "<br>";

    // Bài 5
    echo "Bài 5<br>";
    function reverseArray($arr)
    {
        // Sử dụng hàm array_reverse để đảo ngược mảng
        return array_reverse($arr); // Trả về mảng sau khi đảo ngược
    }
    // Gọi hàm để kiểm tra kết quả
    $array = [1, 2, 3, 4, 5];
    $result = reverseArray($array);
    echo "Mảng sau khi đảo ngược là: ";
    print_r($result);
    echo "<br>";

    // Bài 6
    echo "Bài 6<br>";
    function sumDivisibleBy3Or5($arr)
    {
        $sum = 0; // Khởi tạo tổng ban đầu là 0
    
        // Duyệt qua từng phần tử trong mảng và kiểm tra điều kiện
        foreach ($arr as $element) {
            if ($element % 3 === 0 || $element % 5 === 0) {
                $sum += $element; // Cộng giá trị vào tổng nếu chia hết cho 3 hoặc 5
            }
        }

        return $sum; // Trả về tổng các số chia hết cho 3 hoặc 5
    }

    // Gọi hàm để kiểm tra kết quả
    $array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $result = sumDivisibleBy3Or5($array);
    echo "Tổng các số chia hết cho 3 hoặc 5 trong mảng là: " . $result . "<br>";

    // Bài 7
    echo "Bài 7<br>";
    function factorial($n)
    {
        $factorial = 1; // Khởi tạo giai thừa ban đầu là 1
    
        // Tính giai thừa bằng cách nhân các số từ 1 đến n
        for ($i = 1; $i <= $n; $i++) {
            $factorial *= $i;
        }

        return $factorial; // Trả về giai thừa
    }

    // Gọi hàm để kiểm tra kết quả
    $number = 5;
    $result = factorial($number);
    echo "Giai thừa của " . $number . " là: " . $result . "<br>";

    // Bài 8
    echo "Bài 8<br>";
    function findKthLargest($arr, $k)
    {
        rsort($arr); // Sắp xếp mảng theo thứ tự giảm dần
        return $arr[$k - 1]; // Truy cập vào phần tử lớn thứ k trong mảng
    }

    // Gọi hàm để kiểm tra kết quả
    $array = [10, 5, 8, 20, 3];
    $k = 2;
    $result = findKthLargest($array, $k);
    echo "Phần tử lớn thứ " . $k . " trong mảng là: " . $result . "<br>";

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