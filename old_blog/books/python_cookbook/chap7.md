---
layout: default
---

# Chapter 7: Functions

## Basics

```python
def funcb(x, *args, **kwargs):
    pass

def minimum(*values, clip=None):
    m = min(values)
    if clip is not None:
        m = clip if clip > m else m
    return m

minimum(1, 5, 2, -5, 10) # Returns -5
minimum(1, 5, 2, -5, 10, clip=0) # Returns 0
```

* Passing parameters with arbitrary number of arguments.

```python
def add(x:int, y:int) -> int:
    return x + y

>>> help(add)
Help on function add in module __main__:
add(x: int, y: int) -> int

>>> add.__annotations__
{'y': <class 'int'>, 'return': <class 'int'>, 'x': <class 'int'>}
```

* This is a way to annotate functions.
* `__annotations__` stores inputs and output.

## Lambda

```python
x = 10
a = lambda y: y + x
x = 20
b = lambda y: y + x
a(10)
b(10)
// both gives 30

x = 10
a = lambda y, x=x: y + x
x = 20
b = lambda y, x=x: y + x
a(10)
b(10)
// give 20 and 30

// this is the correct function for adding iteratively
funcs = [lambda x, n=n: x+n for n in range(5)]

```

* Lambda is lazy, x is only binded when executing.

## Partial

* Used to slightly tweak original functions.
* To make function calls compatible.

```python
points = [ (1, 2), (3, 4), (5, 6), (7, 8) ]

import math
def distance(p1, p2):
    x1, y1 = p1
    x2, y2 = p2
    return math.hypot(x2 - x1, y2 - y1)

points.sort(key=partial(distance,pt))
```

# Function Closure

An example class that is redundant

```python
from urllib.request import urlopen

class UrlTemplate:
    def __init__(self, template):
        self.template = template

    def open(self, **kwargs):
        return urlopen(self.template.format_map(kwargs))

# Example use. Download stock data from yahoo
yahoo = UrlTemplate('http://finance.yahoo.com/d/quotes.csv?s={names}&f={fields}')
for line in yahoo.open(names='IBM,AAPL,FB', fields='sl1c1v'):
    print(line.decode('utf-8'))
```

A more elegant way to do this is `closure`:

```python
def urltemplate(template):
    def opener(**kwargs):
        return urlopen(template.format_map(kwargs))
    return opener

# Example use
yahoo = urltemplate('http://finance.yahoo.com/d/quotes.csv?s={names}&f={fields}')
for line in yahoo(names='IBM,AAPL,FB', fields='sl1c1v'):
    print(line.decode('utf-8'))
```

A closure can also attack attributes

```python
def sample():
    n = 0
    # Closure function
    def func():
        print('n=', n)

    # Accessor methods for n
    def get_n():
        return n

    def set_n(value):
        nonlocal n
        n = value

    # Attach as function attributes
    func.get_n = get_n
    func.set_n = set_n
    return func
```

# Callbacks

```python
def apply_async(func, args, *, callback):
    # Compute the result
    result = func(*args)

    # Invoke the callback with the result
    callback(result)
```
