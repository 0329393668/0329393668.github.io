<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thực hành Map, reduce, filter, sort</title>

</head>

<body>
    <?php
    // Bài Tập 1
    
    function multiplyByTwo($arr)
    {
        // Viết code
        return array_map(function ($item) {
            return $item * 2;
        }, $arr);
    }
    // Sử dụng
    $input = [1, 2, 3, 4, 5];
    $result = multiplyByTwo($input);
    print_r($result); // Kết quả: [2, 4, 6, 8, 10]
    echo "<br>";

    // Bài Tập 2
    
    function sumArray($arr)
    {
        // Viết code
        return array_reduce($arr, function ($carry, $item) {
            return $carry + $item;
        });
    }

    // Sử dụng
    $input = [1, 2, 3, 4, 5];
    $result = sumArray($input);
    echo $result . "<br>"; // Kết quả: 15
    
    // Bài Tập 3
    
    function filterEvenNumbers($arr)
    {
        // Viết code
        return array_filter($arr, function ($item) {
            return $item % 2 === 0;
        });
    }

    // Sử dụng
    $input = [1, 2, 3, 4, 5, 6];
    $result = filterEvenNumbers($input);
    print_r($result); // Kết quả: [2, 4, 6]
    echo "<br>";

    // Bài 4
    
    function multiplyEvenNumbers($arr)
    {
        // Viết code
        $filteredArr = array_filter($arr, function ($item) {
            return $item % 2 === 0;
        });

        $result = array_map(function ($item) {
            return $item * 2;
        }, $filteredArr);

        return $result;
    }

    // Sử dụng
    $input = [1, 2, 3, 4, 5, 6];
    $result = multiplyEvenNumbers($input);
    print_r($result); // Kết quả: [4, 8, 12]
    echo "<br>";

    // Bài 5
    
    function sumOddNumbers($arr)
    {
        // Viết code
        $filteredArr = array_filter($arr, function ($item) {
            return $item % 2 !== 0;
        });

        $sum = array_reduce($filteredArr, function ($carry, $item) {
            return $carry + $item;
        });

        return $sum;
    }

    // Sử dụng
    $input = [1, 2, 3, 4, 5, 6];
    $result = sumOddNumbers($input);
    echo $result . "<br>"; // Kết quả: 9
    
    // Bài 6
    
    function sumSquareOfEvenNumbers($arr)
    {
        // Viết code
        $filteredArr = array_filter($arr, function ($item) {
            return $item % 2 === 0;
        });

        $squaredArr = array_map(function ($item) {
            return $item ** 2;
        }, $filteredArr);

        $sum = array_reduce($squaredArr, function ($carry, $item) {
            return $carry + $item;
        });

        return $sum;
    }

    // Sử dụng
    $input = [1, 2, 3, 4, 5, 6];
    $result = sumSquareOfEvenNumbers($input);
    echo $result . "<br>"; // Kết quả: 56
    
    ?>



</body>

</html>