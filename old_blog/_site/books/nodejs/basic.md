## Flow

Normally, put `.js` files in `<head>` using `<script>...</script>`.

```html
<html>
    <head>
    <script src="/static/js/abc.js"></script>
    </head>
    <body>
    ...
    </body>
</html>
```

## DataTypes

* Variable

    ```javascript
    var x = 1;
    var y = 2;
    ```
    - If a variable is declared as `x = 3;`, this will not give an error but turns `x` to a global variable.
    `'use strict';` can avoid that.

* Numbering
    - No int and float

        ```javascript
        NaN; // not a number
            // use isNaN
        123;
        1.23;
        Infinity;
        ```
* Types
    - Comparison
        ```javascript
        false == 0; // true
        false === 0; // false
        // == will automatically convert type
        // === return false if data type mismatches
        // Normally, just use ===
        // NaN === NaN gives false, use isNaN(NaN)

        1 / 3 === (1 - 2 / 3); // false
        Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

        null;
        // if returning a null value
        ```

* Array
    - Basic
        ```javascript
        [1, 2, 3.14, 'Hello', null, true];
        new Array(1, 2, 3); // seldomly used
        ```

    - Length
        ```javascript
        var arr = [1, 2, 3.14, 'Hello', null, true];
        arr.length; // 6

        //directly change array length will change the actual array
        arr.length = 2; // [1, 2]

        // out of range access will do the same
        arr[5] = 'x;
        // arr becomes [1, 2, 3, undefined, undefined, 'x']'
        ```

    - Utilities
        ```javascript
        arr.indexof(10);
        // gives the index of the element, returns -1 if not found

        arr.slice(0, 3);
        // give 0, 1, 2, not including 3

        arr.push('x');
        arr.pop();
        // popping empty array gives undefined with no errors.

        arra.unshift('x');
        //add x to the head
        arra.shift()

        arra.reverse();

        arra.sort();

        arra.splice();
        arra.splice(2, 3, 'Google', 'Facebook');
        // starting from 2, delete 3 elements and return them, in the meantime, add 'Google', 'Facebook'
        arr.splice(2, 2);
        // delete only
        arr.splice(2, 0, 'hi');
        // add only

        arra.concat([2,3,4], [5, 6])
        // concat does not change the current arra
        // but copies a new one

        var arr = ['A', 'B', 'C', 1, 2, 3];
        arr.join('-'); // 'A-B-C-1-2-3'
        ```


* Objects
    - Basic
        ```javascript
        var person = {
        name: 'Bob',
        age: 20,
        tags: ['js', 'web', 'mobile'],
        city: 'Beijing',
        hasCar: true,
        zipcode: null
        };
        person.name; // 'Bob'
        person.zipcode; // null
        ```

    - Access to properties
        ```javascript
        person.name; // gives 'Bob'
        person['name']; // gives 'Bob'

        //If the key name has special characters

        person = {
            'middle-name': 'Alan'
        };

        person['middle-name']; //gives Alan
        ```

    - Keys can only be strings in javascript


* Strings
    ```javascript
    "I \' am \"ok\""; // use \ to skip
    "\x41"; //ASCII in hex
    '\u4e2d\u6587'; //unicode
    //multiline
    `this is
    a
    multiliner`;
    ```

* Map and Set

    - Map
        ```javascript
        var names = ['Michael', 'Bob', 'Tracy'];
        var scores = [95, 75, 85];
        var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
        m.get('Michael'); // 95

        var m = new Map(); // empty Map

        m.set('Adam', 67); // add new key-value

        m.set('Bob', 59);
        m.has('Adam'); // does key exists: true

        m.get('Adam'); // 67

        m.delete('Adam'); // 删除key 'Adam'

        m.get('Adam'); // undefined
        // Map allows one key for one value
        ```

    - Set

        ```javascript
        var s = new Set([1, 2, 3, 3, '3']);
        s; // Set {1, 2, 3, "3"}

        s.add(4);
        s.delete(3);
        ```

* Iterable
    Map, Set and Array are all iterable

    ```javascript
    'use strict';
    var a = [1, 2, 3];
    for (var x of a) {}

    // for ... in is broken
    // it will try to get all attributes

    var a = ['A', 'B', 'C'];
    a.name = 'Hello';
    for (var x in a) {
        console.log(x); // '0', '1', '2', 'name'
    }

    // or using foreach

    'use strict';
    var a = ['A', 'B', 'C'];
    a.forEach(function (element, index, array) {
    }

    var s = new Set(['A', 'B', 'C']);
    s.forEach(function (element, sameElement, set) {
        console.log(element);
    });

    var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    m.forEach(function (value, key, map) {
        console.log(value);
    });
    ```
