Basics and Warnings

```javascript
typeof new Number(123); // 'object'
new Number(123) === 123; // false
var n = Number('123');
typeof n; // 'number'
```

* Never do `new Number()`, `new String()` to pack objects.
* Use `parseInt()` or  `parseFloat()` to cast back to number.
* Use `String()` to cast back to `string`, or `toString()` method.
* Don't cast back to bool, do `if (myvar)`
* Use `typeof` to check
* Use `Array.isArray(arr)`
* Check `null` use `myvar === null`
* Check existance of a variable `typeof window.myvar === 'undefined'`


The Concept of Prototype

```javascript
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var aaron = {
    name: 'Aaron'
};

aaron.__proto__ = Student;

var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

aaron.__proto__ = Bird;
```

* There's no `class` in javascript, `__proto__` simply points to another object
* This is rather dynamic: aaron now can be a bird.

```javascript
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};
a = new Student("a")
b = new Student("b")
```

* In this case `a.hello === b.hello` returns `True`

```javascript
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}
```

* In this case `a.hello === b.hello` returns `False`

Class

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // constructor from its parent
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```

* Use `extend` keyword.
* `class` support only exists in `ES6`.
* Use [Babel](https://babeljs.io/) to do source-to-source transform.
