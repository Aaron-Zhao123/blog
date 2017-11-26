---
layout: default
---

# Chapter 2: Strings and File Processing

## re.split()

{% highlight python %}
line = 'asdf fjdk; afed, fjek,asdf, foo'
import re
re.split(r'[;,\s]\s*', line)
# output
# ['asdf', 'fjdk', 'afed', 'fjek', 'asdf', 'foo']
{% endhighlight %}


**re.split** supports splitting with multiple keywords.

## fnmatch, fnmatchcase

<!-- ```Python -->
{% highlight python %}
from fnmatch import fnmatch, fnmatchcase
fnmatch('foo.txt', '*.txt')
# True
[addr for addr in addresses if fnmatchcase(addr, '* ST')]
# ['5412 N CLARK ST', '1060 W ADDISON ST', '2122 N CLARK ST']
{% endhighlight %}
<!-- ``` -->

## Searching and replace strings
* Normal practice is to use **str.find()**, **str.endswith()** and **str.startswith()**

* Use **re** module

<!-- ```Python -->
{% highlight python %}
text = '11/27/2012'
import re
datepat = re.compile(r'\d+/\d+/\d+')
{% endhighlight%}
<!-- ``` -->
Simple matching: **\d+** means match one or more digits.

<!-- ```Python -->
{% highlight python %}
# match searches from the start, findall() to find any positions
datepat.match(text)
datepat.findall(text)

# Use () to capture grouping
datepat = re.compile(r'(\d+)/(\d+)/(\d+)')
m = datepat.match('11/27/2012')
m.groups()
# ('11', '27', '2012')
month, day, year = m.groups()
{% endhighlight%}
<!-- ``` -->
Use () to capture grouping, use **re.compute** to instantiate a data pattern

```Python
# find all returns a complete list
for m in datepat.finditer(text):
    print(m.groups())
# ('11', '27', '2012')
# ('3', '13', '2013'
```
