---
layout: default
---

# Chapter 3: Numbers and Time

## Numbers

#### round
`round(value, ndigits)`, `ndigits` gives the decimal places, it can be
negative to represent tens, hundreds and etc.

```Python
a = 123
round(a, -1)
# a = 120
'value is {:0.3f}'.format(x)
# gives 123.000
```

#### decimal module
Float numbers are not precise, IEEE754 format has small errors due to how
floating point is defined.
For example:
```python
nums = [1.23e+18, 1, -1.23e+18]
sum(nums)
# 0.0, 1 has disappeared
# The solve:
import math
math.fsum(nums)
# 1.0
```
`decimal` module provides a more precise results at a cost of more compute.
To round values in `decimal`, you have to call its `localcontext`

```Python
from decimal import Decimal
a = Decimal('4.2')
b = Decimal('2.1')
a + b
Decimal('6.3')
with localcontext() as ctx:
  ctx.prec = 3
  print(a / b)
```

#### formatting the print
Using code to give examples:

```Python
x = 1234.56789
# Right justified in 10 chars, one-digit accuracy
format(x, '>10.1f')
# '    1234.6'
# Left justified
format(x, '<10.1f')
'1234.6    '
# Centered
format(x, '^10.1f')
'  1234.6  '
```

#### complex numbers
Complex numbers have two equivalent ways of representing.
```Python
a = complex(2, 4)
b = 3 - 5j
a.real
a.imag
```

#### random
`random` module can generate a random element from a list.
```Python
import random
values = [1, 2, 3, 4, 5, 6]
# pick a random value
random.choice(values)
# pick n random values
random.sample(values, n)
# shuffle values
random.shuffle(values)
random.randint(0,10)
```

## Date & Time
#### datatime
`datetime` and `timedelta` are two popular objects
```Python
a = timedelta(days=2, hours=6)
a.days
a.seconds
print(a + timedelta(days=10))
```
