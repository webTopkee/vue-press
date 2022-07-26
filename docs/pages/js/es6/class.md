## 类的由来
基本上，ES6 的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
```js
// es5 构造函数
function Point(x, y) {
    this.x = x
    this.y = y
}
Point.prototype.color = function () {
    return '#fff'
}
const p = new Point()

// es6 Class类
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    color() {
        return '#fff'
    }
}
const p = new Point()
```

## 实例、静态、原型链方法
`constructor()`实例属性或实例方法定义   
`static`静态属性或静态方法定义   
`#`私有属性或私有方法定义
`getter()/setter()`与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为   
```js
const fn3 = 'fn3'
class Point {
    constructor(x, y) {
        this.x = x //实例属性
        this.y = y
        this.fn = function () {
            console.log('实例方法')
        }
    }

    static z = 100 //静态属性
    static fn() {
        console.log('静态方法')
    }

    #txt = '私有属性'
    #fn4(){
        return '私有方法'
    }

    get prop() {
        return this.x
    }

    set prop(value) {
        console.log('set:' + value)
    }

    fn() {
        console.log('原型链方法')
    }

    [fn3]() { //属性表达式
        return 66
    }
}

const point = new Point(2, 3)

Point.fn() // 静态方法
Point.prototype.fn() // 原型链方法
point.fn() // 实例方法

point.prop = '123' // set:123

console.log(point.x)
```
`constructor()`实例属性或实例方法，只能在`Point`类上调用(`this.x`)或实例上调用(`point.fn()`)   
`static`静态属性或静态方法关键字，表明该方法是一个静态方法，只能在`Point`类上调用(`Point.fn()`)，如果在实例上调用会抛出一个错误   
`#`私有属性或私有方法关键字，表明只能在`Point`类上调用(`this.#txt`)，如果在实例上调用会抛出一个错    

::: tip
定义在类下面的方法是原型链方法(`fn()`)    
定义在类下面的属性是实利属性
:::

## 继承
Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。    
除了私有属性，父类的所有属性和方法，都会被子类继承，其中包括静态方法。   

```js
class Point {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    fn() {
        return '父级原型链方法'
    }

    static fn3() {
        console.log('父级静态方法')
    }
}
class ColorPoint extends Point {
    constructor(x, y, c) {
        super(x, y)
        this.c = c
    }

    fn2() {
        console.log('子级原型链方法')
    }
}

const c = new ColorPoint(1, 2, 3)
```
如果父类定义了私有属性的读写方法，子类就可以通过这些方法，读写私有属性。
```js
class Point {
    #p = '私有属性'
    getP() {
        return this.#p
    }
}
class ColorPoint extends Point {
    constructor() {
        super()
        console.log(this.getP()) // 私有属性
    }
}

const c = new ColorPoint()

console.log(Object.getPrototypeOf(ColorPoint) === Point) //true
```

这里需要注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
```js
class Point {
    p() {
        return 2
    }
}
Point.prototype.x = 1

class A extends Point {
    constructor() {
        super()
        console.log(super.p()) // 2
        console.log(super.x) // 1
    }
}

const a = new A()
```