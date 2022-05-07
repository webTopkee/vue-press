## 数组

- 声明数组分别有二种方式

```php
   $arr = array("张三",false,123);
   var_dump($arr); //array(3) { [0]=> string(6) "张三" [1]=> bool(false) [2]=> int(123) }

   $arr2 = ["张三",false,123];
   var_dump($arr2); //array(3) { [0]=> string(6) "张三" [1]=> bool(false) [2]=> int(123) }
```

- 数组中的查找、增加、替换

```php
   $arr = ["张三",false,123];
   //查找
    var_dump($arr[0]); //string(6) "张三"
   //增加
   $arr[] = "lala";
    var_dump($arr); //array(4) { [0]=> string(6) "张三" [1]=> bool(false) [2]=> int(123) [3]=> string(4) "lala" }
   //替换
   $arr[0] = "李四";
   var_dump($arr); //array(4) { [0]=> string(6) "李四" [1]=> bool(false) [2]=> int(123) [3]=> string(4) "lala" }

```

- 数组下标

```php
   $arr = [12.5 => 12.5]; //array(1) { [12]=> float(12.5) } 坐标取整数
   $arr = [-12.5 => 12.5]; //array(1) { [-12]=> float(12.5) }
   $arr = [true => 12.5]; //array(1) { [1]=> float(12.5) }
   $arr = [false => 12.5]; //array(1) { [0]=> float(12.5) }
   $arr = ['' => 12.5]; //array(2) { [""]=> int(12) [0]=> int(5) }
   $arr = [null => 12.5, '' => 12.3]; //array(1) { [""]=> float(12.3) } 坐标相同后面覆盖前面

   //找出最大的索引下标的值加1作为后面一个值的索引下标
   $arr = ["张三", "age" => 22, "男"]; //array(3) { [0]=> string(6) "张三" ["age"]=> int(22) [1]=> string(3) "男" }
   $arr = [2 => "张三", "男"]; //array(2) { [2]=> string(6) "张三" [3]=> string(3) "男" }
```
