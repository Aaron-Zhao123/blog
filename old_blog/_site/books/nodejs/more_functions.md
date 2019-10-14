## More Function

## Higher-order functions
Higher-order function takes another function as the input.

```javascript
function add(x, y, f) {
    return f(x) + f(y);
}
```

## Map reduce

```javascript
'use strict';

function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

arr.reduce(function (x, y) {
    return x + y;
}); // get sum
```

## Filter
It choose whether to maintain the value based on the function's returned true or false.

```javascript
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim();
});
r; // ['A', 'B', 'C']

// filter can see element, index and arr itself
var r = arr.filter(function (element, index, self) {
}
// This becomes powerful, such as removing repeated elements
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
```

## Sorting
In JS, `sort` be default changes everything to String and then sort.


```javascript
// For a proper numerical sort
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});

// sort changes the current array instead of copying out to a new one
```


## Closure

```javascript
function count() {
    var arr = [];
    // when using an iterator in closure
    // make it private by sending it to a function
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9

// create an anonymous function and execute now
(function (x) {
    return x * x;
})(3);
```

## Arrow function
```javascript
x => x * x

function (x) {
    return x * x;
}

x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}

(x, y) => x * x + y * y
() => 3.14
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

x => ({ foo: x })

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this points to obj
        return fn();
    }
};
obj.getAge(); // 25
// arrow function, this cannot be changed
obj.getAge(2015); // 25

```

## Generator
```javascript
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

var f = fib(5);
f.next(); // {value: 0, done: false}
for (var x of fib(10)) {
    console.log(x);
}
```
