## 基础语法
js执行顺序从上到下，如果中间有错误会阻止下面JS执行，所以可以用`try`/`catch`/`finally` 语句用于处理代码中可能出现的错误信息。
```js
try{
    //代码块
}
catch(err){
    //捕获错误的代码块
}
finally{
    //无论 try / catch 结果如何都会执行的代码块
}
```