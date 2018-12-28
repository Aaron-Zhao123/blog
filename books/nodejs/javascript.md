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

* No int and float

    ```
    NaN; // not a number
    123;
    1.23;
    Infinity;
    ```
* Comparison

    ```
    false == 0 // true
    false === 0 // false
    // == will automatically convert type
    // === return false if data type mismatches
    // NaN === NaN gives false, use isNaN(NaN)

    1 / 3 === (1 - 2 / 3); // false
    Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true
    ```

* null

    Use null instead of undefined.

* Array

