---
layout: default
---

# Chapter 2: Strings and File Processing

## re.split()

```Python
line = 'asdf fjdk; afed, fjek,asdf, foo'
import re
re.split(r'[;,\s]\s*', line)
# output
# ['asdf', 'fjdk', 'afed', 'fjek', 'asdf', 'foo']
```


`re.split` supports splitting with multiple keywords.

## fnmatch, fnmatchcase

```Python
from fnmatch import fnmatch, fnmatchcase
fnmatch('foo.txt', '*.txt')
# True
[addr for addr in addresses if fnmatchcase(addr, '* ST')]
# ['5412 N CLARK ST', '1060 W ADDISON ST', '2122 N CLARK ST']
```

## Searching and replace strings
Normal practice is to use `str.find()`, `str.endswith()` and `str.startswith()`.
Harder pattern matchings will use `re` module.

```Python
text = '11/27/2012'
import re
datepat = re.compile(r'\d+/\d+/\d+')
```

Simple matching: `\d+` means match one or more digits.

```Python
# match searches from the start, findall() to find any positions
datepat.match(text)
datepat.findall(text)

# Use () to capture grouping
datepat = re.compile(r'(\d+)/(\d+)/(\d+)')
m = datepat.match('11/27/2012')
m.groups()
# ('11', '27', '2012')
month, day, year = m.groups()
```

Use () to capture grouping, use `re.compute` to instantiate a data pattern

```Python
# find all returns a complete list
for m in datepat.finditer(text):
    print(m.groups())
# ('11', '27', '2012')
# ('3', '13', '2013'
```

`finditer()` returns the found matchings in an iterator

Replacing strings normally can be done using `str.replace()`, harder pattern
matching can use `re.sub()`

`\3` refers to the grouping name of the data captured in the previous pattern matching.
```Python
text = 'Today is 11/27/2012. PyCon starts 3/13/2013.'
import re
re.sub(r'(\d+)/(\d+)/(\d+)', r'\3-\1-\2', text)
# 'Today is 2012-11-27. PyCon starts 2013-3-13.'
```

We normally use `(.)` to match any characters of a sentence in regular expression.
This might lead to missing of contents that are inside `""`, normally, we add `?` and after `*` and `+` to avoid it.

```Python
str_pat = re.compile(r'\"(.*?)\"')
```

Another common problem with `(.)` is that it misses `\n` so the regular expression only matches a single line.
To support multiple line, we can use `or`(`|`):

```
comment = re.compile(r'/\*((?:.|\n)*?)\*/')
```
We can also use `re.DOTALL`, this supports every characters including `\n`

```Python
comment = re.compile(r'/\*(.*?)\*/', re.DOTALL)
```


## Formalizing unicode
```Python
import unicodedata
norm_text = unicodedata.normalize('NFC', raw_text)
unicodedata.combining(c)
```

## Deleting characters in a string
`strip()`, `lstrip()` and `rstrip()` are powerful methods for deleting characters.
```Python
s = ' hello world \n'
s.strip()
# 'hello world \n'
t = '-----hello====='
t.lstrip('-')
# 'hello====='
```

`strip()` does not clean anything that's inside between characters, to clear them, you might use `replace()` instead.

Using `strip()` in a recursive manner:

```Python
with open(filename) as f:
    lines = (line.strip() for line in f)
    for line in lines:
        print(line)
```

A more advanced replacement is to use the `translate()` method, `ord` return an integer representing the Unicode code point of the character:
```Python
remap = {
  ord('\t') : ' ',
  ord('\f') : ' ',
  ord('\r') : None # Deleted
}
a = s.translate(remap)
```

## Placing your characters
`ljust()`, `rjust()` and `center()` are common methods for placing text.
Or using `format()` with `<`, `>` and `^`
```Python
text.rjust(20,'=')
#'=========Hello World'
format(text, '>20')
#'         Hello World'
```

## Combining strings
Two popular methods, `join()` and `+`
```Python
' '.join(parts)
a + ' ' + b

# a more complicated example
def sample():
    yield 'Is'
    yield 'Chicago'
    yield 'Not'
    yield 'Chicago?
text = ''.join(sample())
```

## Formatting output strings
`textwrap` and `os.get_terminal_size`
```Python
import os
import textwrap
print(textwrap.fill(s, os.get_terminal_size().columns))
```
