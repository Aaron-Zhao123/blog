---
layout: default
---

# [](#nn)Python3-cookbook
[book link](http://python3-cookbook.readthedocs.io/zh_CN/latest)

## Chapter 1: Data structure

#### Dequeue
```Python
from collections import deque


def search(lines, pattern, history=5):
    previous_lines = deque(maxlen=history)
    for line in lines:
        if pattern in line:
            yield line, previous_lines
        previous_lines.append(line)

# Example use on a file
if __name__ == '__main__':
    with open(r'../../cookbook/somefile.txt') as f:
        for line, prevlines in search(f, 'python', 5):
            for pline in prevlines:
                print(pline, end='')
            print(line, end='')
            print('-' * 20)
```

**yield** is a generator object, the function is executed until the for loop executes.
**dequeue** creates a fixed-size queue old elements are deleted automatically.
The complexity of insert and delete in a queue is O(1), but O(N) for arrays.

#### Heapq
Heap queue algorithm, also known as the priority queue algorithm.
Heaps are binary trees for which every parent node has a value less than or equal to any of its children.
This implementation uses arrays for which heap[k] <= heap[2*k+1] and heap[k] <= heap[2*k+2] for all k, counting elements from zero.
For the sake of comparison, non-existing elements are considered to be infinite.
The interesting property of a heap is that its smallest element is always the root, heap[0]

The feature of heapq is that heap[0] always has the **smallest** value.

**nlargest()** and **nsmallest()** are fast if list is large,
**sorted(items)[:N]** is faster if N is large.
**min**, **max** if fast for single element

```Python
import heapq
nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
print(heapq.nlargest(3, nums)) # Prints [42, 37, 23]
print(heapq.nsmallest(3, nums)) # Prints [-4, 1, 2]
```

Example: Priority queue
```Python
import heapq

class PriorityQueue:
    def __init__(self):
        self._queue = []
        self._index = 0

    def push(self, item, priority):
        heapq.heappush(self._queue, (-priority, self._index, item))
        self._index += 1

    def pop(self):
        return heapq.heappop(self._queue)[-1]
```

#### MultiDict
```python
from collections import defaultdict

d = defaultdict(list)
d['a'].append(1)
d['a'].append(2)
d['b'].append(4)

d = defaultdict(set)
d['a'].add(1)
d['a'].add(2)
d['b'].add(4)
```
This will create the following:
```
d = {
    'a' : [1, 2, 3],
    'b' : [4, 5]
}
e = {
    'a' : {1, 2, 3},
    'b' : {4, 5}
}
```

#### OrderedDict
```Python
rom collections import OrderedDict

d = OrderedDict()
d['foo'] = 1
d['bar'] = 2
d['spam'] = 3
d['grok'] = 4
# Outputs "foo 1", "bar 2", "spam 3", "grok 4"
for key in d:
    print(key, d[key])
```
Thie maintains the order that keys are created, when the existing is inserted,
the order won't be changed.
This means **OrderedDict** uses twice the memory.

#### Operate on Dict with lambda
```Python
prices = {
    'ACME': 45.23,
    'AAPL': 612.78,
    'IBM': 205.55,
    'HPQ': 37.20,
    'FB': 10.75
}
min(prices, key=lambda k: prices[k]) # Returns 'FB'
```

#### Slicing
```Python
>>> a = slice(5, 50, 2)
>>> a.start
5
>>> a.stop
50
>>> a.step
2
>>>
```

#### Counter
```Python
words = [
    'look', 'into', 'my', 'eyes', 'look', 'into', 'my', 'eyes',
    'the', 'eyes', 'the', 'eyes', 'the', 'eyes', 'not', 'around', 'the',
    'eyes', "don't", 'look', 'around', 'the', 'eyes', 'look', 'into',
    'my', 'eyes', "you're", 'under'
]
from collections import Counter
word_counts = Counter(words)
# 出现频率最高的3个单词
top_three = word_counts.most_common(3)
print(top_three)
# Outputs [('eyes', 8), ('the', 5), ('look', 4)]
```

#### itemgetter with dict
```Python
rows = [
    {'fname': 'Brian', 'lname': 'Jones', 'uid': 1003},
    {'fname': 'David', 'lname': 'Beazley', 'uid': 1002},
    {'fname': 'John', 'lname': 'Cleese', 'uid': 1001},
    {'fname': 'Big', 'lname': 'Jones', 'uid': 1004}
]
from operator import itemgetter
rows_by_fname = sorted(rows, key=itemgetter('fname'))
rows_by_uid = sorted(rows, key=itemgetter('uid'))

rows_by_lfname = sorted(rows, key=itemgetter('lname','fname'))
```
The code above shows how ```itemgetter``` returns a callable object. Apparently, this can be replaced by ```lambda``` functions.
```Python
rows_by_fname = sorted(rows, key=lambda r: r['fname'])
rows_by_lfname = sorted(rows, key=lambda r: (r['lname'],r['fname']))
```

#### Sorting in a class
```Python
class User:
    def __init__(self, user_id):
        self.user_id = user_id

    def __repr__(self):
        return 'User({})'.format(self.user_id)


def sort_notcompare():
    users = [User(23), User(3), User(99)]
    sorted(users, key=lambda u: u.user_id)

    # Or use attrgetter()
    from operator import attrgetter
    sorted(users, key=attrgetter('user_id'))
```

Notice ```users``` cannot be sorted directly, this case, we can whether use again an lambda function or the attrgetter.

#### groupby
```Python
rows = [
    {'address': '5412 N CLARK', 'date': '07/01/2012'},
    {'address': '5148 N CLARK', 'date': '07/04/2012'},
    {'address': '5800 E 58TH', 'date': '07/02/2012'},
    {'address': '2122 N CLARK', 'date': '07/03/2012'},
    {'address': '5645 N RAVENSWOOD', 'date': '07/02/2012'},
    {'address': '1060 W ADDISON', 'date': '07/02/2012'},
    {'address': '4801 N BROADWAY', 'date': '07/01/2012'},
    {'address': '1039 W GRANVILLE', 'date': '07/04/2012'},
]
from operator import itemgetter
from itertools import groupby

# Sort by the desired field first
rows.sort(key=itemgetter('date'))
# Iterate in groups
for date, items in groupby(rows, key=itemgetter('date')):
    print(date)
    for i in items:
        print(' ', i)
```
Firstly sort the list using ```itemgetter```, it then shows how to use group by, each group is produced by date.

#### Filtering
Use generator and iterator, **filter** creates an iterator and convert it using **list**
```Python
values = ['1', '2', '-3', '-', '4', 'N/A', '5']
def is_int(val):
    try:
        x = int(val)
        return True
    except ValueError:
        return False
ivals = list(filter(is_int, values))
print(ivals)
# Outputs ['1', '2', '-3', '4', '5']
```

**itertools.compress()**
```Python
addresses = [
    '5412 N CLARK',
    '5148 N CLARK',
    '5800 E 58TH',
    '2122 N CLARK',
    '5645 N RAVENSWOOD',
    '1060 W ADDISON',
    '4801 N BROADWAY',
    '1039 W GRANVILLE',
]
counts = [ 0, 3, 10, 4, 1, 7, 6, 1]
from itertools import compress
more5 = [n > 5 for n in counts]
list(compress(addresses, more5))
# ['5800 E 58TH', '1060 W ADDISON', '4801 N BROADWAY']
```

**namedtuple()**
```Python
from collections import namedtuple

Stock = namedtuple('Stock', ['name', 'shares', 'price'])
def compute_cost(records):
    total = 0.0
    for rec in records:
        s = Stock(*rec)
        total += s.shares * s.price
    return total
```
Better naming than hard coded numbers.

```Python
from collections import namedtuple

Stock = namedtuple('Stock', ['name', 'shares', 'price', 'date', 'time'])

# Create a prototype instance
stock_prototype = Stock('', 0, 0.0, None, None)

# Function to convert a dictionary to a Stock
def dict_to_stock(s):
    return stock_prototype._replace(**s)
```
Using the above code, stock can be updated by passing a dictionary into the function **dict_to_stock**, this ****s** is a useful way of extracting components in a dict.

#### Combining multiple dicts
One method is to use **ChainMap**
```Python
from collections import ChainMap
c = ChainMap(a,b)
```
Chainmap creates a list to collect all of these dictionaries, but not creating a new dictionaries, all the old dictionaries stay valid, any updates of the original dictionaries propagates to the new dictionary.

**update** is another method of merging dictionaries
```Python
a = {'x': 1, 'z': 3 }
b = {'y': 2, 'z': 4 }
merged = dict(b)
merged.update(a)
```
merged creates a completely different dictionary, updates on old dictionaries will not affect the newly created one.
