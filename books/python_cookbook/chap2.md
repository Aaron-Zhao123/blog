---
layout: default
---

# Chapter 2: Strings and File Processing

## re.split()
<!-- ```Python -->
{% highlight python %}
line = 'asdf fjdk; afed, fjek,asdf, foo'
import re
re.split(r'[;,\s]\s*', line)
# output
# ['asdf', 'fjdk', 'afed', 'fjek', 'asdf', 'foo']
{% highlight python %}
<!-- ``` -->

**re.split** supports splitting with multiple keywords.

## fnmatch, fnmatchcase
```Python
from fnmatch import fnmatch, fnmatchcase
fnmatch('foo.txt', '*.txt')
# True
[addr for addr in addresses if fnmatchcase(addr, '* ST')]
# ['5412 N CLARK ST', '1060 W ADDISON ST', '2122 N CLARK ST']
```

## Searching and replace strings
* Normal practice is to use **str.find()**, **str.endswith()** and **str.startswith()**

* Use **re** module

```Python
dd
```
