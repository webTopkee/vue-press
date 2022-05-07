## 变量

- 命名变量需要通过符号（$）,它是变量的组成部分，用来做变量的开头
- 变量名需要以字母下划线开头，由数字、字母、下划线组成

```php
   $aa = 'aa';
   $aa_bb = 'aabb';
   $_name = '123';

   echo $aa;    //aa
   echo $aa_bb; //aabb
   echo $_name; //123
```

- 传值和传址  
  传值相对于在内存在复制一份变量

```php
   $a = 10;
   $b = $a;
   echo $b;  //10
   $a = 20;
   echo $b;  //10
```

传址相当于共用内存的变量

```php
   $x = 10;
   $y=&$x;
   echo $y; //10
   $x = 20;
   echo $y; //20
```

## 可变变量

```php
   $a = 10;
   $b = 'a';
   echo $b; //a
   echo $$b; //10
```