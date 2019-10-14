## Function

## Instantiation and Usage

```javascript
function abs(x) {
    if (x > 0) {
        return x
    }
    else {
        return -x
    }
}

var abs = function(x) {
    if (x > 0) {
        return x
    }
    else {
        return -x
    }
}
```

* If return does not exist, function returns *undefined*

* JS handels multiple inputs

```javascript
abs(10, 'blablabla'); // return 10
abs() // returns NaN
```

* Keyword *arguments* handles multiple inputs

```javascript
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
```

## Variable Scope

* When functions are nested, only inner function can access the variables in outer function.

```javascript
'use strict';

function foo() {
    var x = 1;
    function bar() {
        var y = x + 1; // bar can acess to foo's variables!
    }
    var z = y + 1; // ReferenceError! foo cannot do this!
}
```

* Variable instantiations are **lifted** to the top of a function

```javascript
'use strict';

function foo() {
    // this is ok, because instantiation of y is lifted.
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

foo();
```

* Global scope: JS has a default global object named `window`, global variables are just attributes in the `window` object.

```javascript
'use strict';

function foo() {
    alert('foo');
}

foo(); // a function is also a global variable
window.foo(); // so it is attached to window as well
```

* Naming scope: since we might use different JS scripts in a single project, names might conflict. A better way to handle is to tight all global variables and functions in a custom object.


```javascript
// the only global variable MYAPP:
var MYAPP = {};

// variables:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// funcitons:
MYAPP.foo = function () {
    return 'foo';
};
```

* Finer-grained scoping: JS provides scope in a function level. Keywords `let` is useful in making block-wise scope.

```javascript
'use strict';

function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError:
    i += 1;
}
```

* Constant Value: use `const` keyword

```javascript
'use strict';

const PI = 3.14;
```

* Grouped Assignment

```javascript
'use strict';

var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
let [, , z] = ['hello', 'JavaScript', 'ES6']; // only assign the third element
var person = {
    name: 'Aaron',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;


var person = {
    name: 'Aaron',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {name, address: {city, zip}} = person;
name; // 'Aaron'
city; // 'Beijing'
zip; // undefined, cannot pin zip
address; // Uncaught ReferenceError: address is not defined



// This is reassignment!
var x, y;
{x, y} = { name: 'Aaron', x: 100, y: 200};

// this works
({x, y} = { name: 'Aaron', x: 100, y: 200});
```

## Methods

* The mysterious `this`

```javascript
'use strict';

var person = {
    name: 'Aaron',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

var fn = person.age;
fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined
person.age(); // this works!!!

// The usage of `this` has to be strictly related to the object
var person = {
    name: 'Aaron',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            // this is broken again, this now points to global variable window !!!!!
            // this is only associated with person in age
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

var person = {
    name: 'Aaron',
    birth: 1990,
    age: function () {
        var that = this; // capture this at the start
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // lets use that
        }
        return getAgeFromBirth();
    }
};
```


* `apply` and `call`

```javascript
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var person = {
    name: 'Aaron',
    birth: 1990,
    age: getAge
};

person.age(); // 25
getAge.apply(person, []); // 25, this points to person

// We give this to null for normal funcitons
// apply needs a list
Math.max.apply(null, [3, 5, 4]); // 5
// call takes values one by one
Math.max.call(null, 3, 5, 4); // 5
```

* Use `apply` as a decrorator

```javascript
'use strict';

var count = 0;
var oldParseInt = parseInt; // save original function

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // use original function
};
```
