### 输出语句

php 有 4 种输入语句分别为`echo` `print` `print_r()` `var_dump()`

```php
    echo "今天要下雨了"; //今天要下雨了
    echo "<br>";
    echo "123456"; //123456;
    echo "<br>";
    //不用echo输出布尔值
    echo true; //1
    echo "<br>";
    echo false; // 空
    echo "<br>";
    // echo "array(10)"; //不支持数组
    echo "<br>";


    print "今天要下雨了"; //今天要下雨了
    echo "<br>";
    print "123456"; //123456
    echo "<br>";
    //不用echo输出布尔值
    print true; //1
    echo "<br>";
    print false; // 空
    echo "<br>";
    // print "array(10)";  //不支持数组
    echo "<br>";

    //print_r主要用于数组
    print_r("今天要下雨了"); //今天要下雨了
    echo "<br>";
    print_r("123456"); //123456
    echo "<br>";
    //不用echo输出布尔值
    print_r(true); //1
    echo "<br>";
    print_r(false); // 空
    echo "<br>";
    print_r(array(10));  //Array ( [0] => 10 )
    echo "<br>";


    var_dump("今天要下雨了"); //string(18) "今天要下雨了"
    echo "<br>";
    var_dump("123456"); //    string(6) "123456"
    echo "<br>";
    //不用echo输出布尔值
    var_dump(true); //bool(true)
    echo "<br>";
    var_dump(false); // bool(false)
    echo "<br>";
    var_dump(array(10));  //array(1) { [0]=> int(10) }
    echo "<br>";

```
