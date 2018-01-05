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

# Additional Info: Regular Expressions
https://docs.python.org/3/library/re.html
`.` (Dot.) In the default mode.
`^`(Caret.) Matches the start of the string.
`$` Matches the end of the string or just before the newline at the end of the string.
`*` causes the resulting RE to match 0 or more repetitions of the preceding RE, as many repetitions as are possible. ab* will match ‘a’, ‘ab’, or ‘a’ followed by any number of ‘b’s.
`+` causes the resulting RE to match 1 or more repetitions of the preceding RE, as many repetitions as are possible. ab* will match ‘ab’, or ‘a’ followed by any number of ‘b’s.
`?` causes the resulting RE to match 0 or 1 repetitions of the preceding RE. ab? will match either ‘a’ or ‘ab’.
`{m,n}`
Causes the resulting RE to match from m to n repetitions of the preceding RE, attempting to match as many repetitions as possible. For example, a{3,5} will match from 3 to 5 'a' characters. Omitting m specifies a lower bound of zero, and omitting n specifies an infinite upper bound. As an example, a{4,}b will match 'aaaab' or a thousand 'a' characters followed by a 'b', but not 'aaab'. The comma may not be omitted or the modifier would be confused with the previously described form.
`{m,n}?`
Causes the resulting RE to match from m to n repetitions of the preceding RE, attempting to match as few repetitions as possible. This is the non-greedy version of the previous qualifier. For example, on the 6-character string 'aaaaaa', a{3,5} will match 5 'a' characters, while a{3,5}? will only match 3 characters.
[]
Used to indicate a set of characters. [amk] will match 'a', 'm', or 'k'.
[0-5][0-9] will match all the two-digits numbers from 00 to 59, and [0-9A-Fa-f] will match any hexadecimal digit. 
