<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BT về array, vòng lặp, function và chuỗi</title>
</head>

<body>
    <?php

    //Bài 1
    function reverseString($str)
    {
        // Viết code
        $reversed = strrev($str);
        return $reversed;
    }
    // Sử dụng
    $input = "Hello World";
    $result = reverseString($input);
    echo $result . "<br>"; // Kết quả: "dlroW olleH"
    
    //Bài 2
    
    // Cách 1
    function countWords($str)
    {
        // Viết code
        $count = str_word_count($str);
        return $count;
    }

    // Sử dụng
    $input = "This is a sample string";
    $result = countWords($input);
    echo $result . "<br>"; // Kết quả: 5
    
    // Cách 2
    function countWords1($str)
    {
        // Viết code
        $words = explode(" ", $str);
        $count = count($words);
        return $count;
    }

    // Sử dụng
    $input = "This is a sample string";
    $result = countWords1($input);
    echo $result . "<br>"; // Kết quả: 5
    
    // Bài 3
    
    function removeDuplicates($arr)
    {
        // Viết code
        $result = array();

        foreach ($arr as $value) {
            if (!in_array($value, $result)) {
                $result[] = $value;
            }
        }

        return $result;
    }

    // Sử dụng
    $input = [1, 2, 2, 3, 4, 4, 5];
    $result = removeDuplicates($input);
    print_r($result); // Kết quả: [1, 2, 3, 4, 5]
    echo "<br>";

    // Bài 4
    
    function isAscendingArray($arr)
    {
        // Viết code
        $length = count($arr);

        for ($i = 1; $i < $length; $i++) {
            if ($arr[$i] < $arr[$i - 1]) {
                return false;
            }
        }

        return true;
    }

    // Sử dụng
    $input = [1, 3, 5, 7, 9];
    $result = isAscendingArray($input);
    var_dump($result); // Kết quả: true
    echo "<br>";

    // Bài 5
    
    function reverseWordsInString($str)
    {
        // Viết code
        $words = explode(" ", $str);
        $reversedWords = array();

        foreach ($words as $word) {
            $reversedWords[] = strrev($word);
        }

        return implode(" ", $reversedWords);
    }

    // Sử dụng
    $input = "Hello World";
    $result = reverseWordsInString($input);
    echo $result . "<br>"; // Kết quả: "olleH dlroW"
    
    // Bài 6
    
    function findSecondLargest($arr)
    {
        // Viết code
        rsort($arr);
        $uniqueArr = array_unique($arr);
        $arrSort = array_values($uniqueArr);
        return $arrSort[1];

    }

    // Sử dụng
    $input = [5, 2, 9, 1, 7, 3];
    $result = findSecondLargest($input);
    echo $result . "<br>"; // Kết quả: 7
    
    // Bài 7
    
    function findPairsWithSum($arr, $sum)
    {
        // Viết code
        $result = [];

        // Duyệt qua từng phần tử trong mảng
        for ($i = 0; $i < count($arr); $i++) {
            // Duyệt qua các phần tử còn lại sau phần tử thứ $i
            for ($j = $i + 1; $j < count($arr); $j++) {
                // Kiểm tra tổng của cặp số
                if ($arr[$i] + $arr[$j] === $sum) {
                    // Thêm cặp số vào kết quả
                    $result[] = [$arr[$i], $arr[$j]];
                }
            }
        }

        return $result;
    }

    // Sử dụng
    $input = [2, 4, 3, 5, 6, 1, 7];
    $targetSum = 7;
    $result = findPairsWithSum($input, $targetSum);
    print_r($result); // Kết quả: [[2, 5], [4, 3], [3, 4], [5, 2], [6, 1], [1, 6]]
    echo "<br>";

    // Bài 8
    
    function findMostFrequentElement($arr)
    {
        // Viết code
        // Tạo một mảng kết hợp để đếm số lần xuất hiện của mỗi phần tử
        $counts = array_count_values($arr);

        // Tìm giá trị lớn nhất trong mảng đếm
        $maxCount = max($counts);

        // Tìm phần tử có số lần xuất hiện lớn nhất
        $mostFrequentElement = array_search($maxCount, $counts);

        return $mostFrequentElement;
    }

    // Sử dụng
    $input = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    $result = findMostFrequentElement($input);
    echo $result . "<br>"; // Kết quả: 4
    
    ?>


</body>

</html>