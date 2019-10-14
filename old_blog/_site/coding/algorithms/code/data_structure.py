# NP-complete problems
'''
NP (nondeterministic polynomial time)
    - is a type of decision problems.
    - is the set of all decision problems for which the instances where the answer
is "yes" have efficiently verifiable proofs

P problem means the proofs have to be verifiable by deterministic computations
that can be performed in polynomial time (<O(n^k))

NP problem is a problem is that we can check answers in polynomail time through a
non-determinisitc machine

NP-Complete is a complexity class which represents the set of
all problems X in NP for which it is possible to reduce
any other NP problem Y to X in polynomial time.

NP-hard means the problem cannot be solved in polynomial time by a
non-determnisitc machine.

____________________________________________________________
| Problem Type | Verifiable in P time | Solvable in P time | Increasing Difficulty
___________________________________________________________|           |
| P            |        Yes           |        Yes         |           |
| NP           |        Yes           |     Yes or No *    |           |
| NP-Complete  |        Yes           |      Unknown       |           |
| NP-Hard      |     Yes or No **     |      Unknown ***   |           |
____________________________________________________________           V

'''


# travelling salesman
import numpy as np
cities = np.array(
    [[0, 10, 15, 20], [5, 0, 9, 0], [6, 13, 0, 12], [8, 8, 9, 0]])

# Build a table

def tsp(visited, pos):
    if visited == [True] * 4:
        return cities[pos][0]
    ans = 100
    for city in range(len(cities)):
        if visited[city] == False:
            visited[city] = True
            new_cost = cities[pos][city] + tsp(visited, city)
            ans = min(ans, new_cost)
    return ans


tsp_visited = [False, False, False, False]
cost = tsp(tsp_visited, 0)
print(cost)
import ipdb; ipdb.set_trace()



# knapsack
# items with (weight, value)
# Max the total value with total weights <= backpack capable weight
print('0/1 backpack')
items = [(1, 1), (3, 4), (4, 5), (5, 7)]
print('Item with weights/value {}'.format(items))
backpack = 10
print('Backpack takes {}'.format(backpack))

meta = []

# Build the table
for i in range(len(items)):
    meta.append([])
    for j in range(backpack+1):
        if j == 0:
            meta[i] = [0]
        else:
            if i == 0:
                # first row
                if items[i][0] <= j:
                    meta[i].append(items[i][1])
            else:
                if j - items[i][0] < 0:
                    extra_value = 0
                else:
                    extra_value = meta[i-1][j-items[i][0]]
                if items[i][0] <= j:
                    meta[i].append(
                        max(items[i][1] + extra_value, meta[i-1][j]))
                else:
                    meta[i].append(meta[i-1][j])

weight = backpack
picked_items = []
i = len(items) - 1

while(weight>0 and i>0):
    if meta[i][weight] > meta[i-1][weight]:
        picked_items.append(items[i])
        weight -= items[i][0]
    i -= 1
picked_items.append(items[i])
print('For backpack with a weight of {}, we picked {}'.format(backpack, picked_items))



import pdb; pdb.set_trace()

'''
Basic data types
'''
# Stack
# LIFO queue
class Stack:
     def __init__(self):
         self.items = []

     def isEmpty(self):
         return self.items == []

     def push(self, item):
         self.items.append(item)

     def pop(self):
         return self.items.pop()

     def peek(self):
         return self.items[len(self.items)-1]

     def size(self):
         return len(self.items)

class Queue(Stack):
     def __init__(self):
         self.items = []

     def isEmpty(self):
         return self.items == []

     def put(self, item):
         self.items.append(item)

     def get(self):
         return self.items.pop()

     def first(self):
         return self.items[0]

     def size(self):
         return len(self.items)
# Trees
# Binary Search Tree (BST)
class Node(object):

    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

# Insert method to create nodes
    def insert(self, data):

        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            elif data > self.data:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)
        else:
            self.data = data
# findval method to compare the value with nodes
    def findval(self, lkpval):
        if lkpval < self.data:
            if self.left is None:
                return str(lkpval)+" Not Found"
            return self.left.findval(lkpval)
        elif lkpval > self.data:
            if self.right is None:
                return str(lkpval)+" Not Found"
            return self.right.findval(lkpval)
        else:
            print(str(self.data) + ' is found')
# Print the tree
    def PrintTree(self):
        if self.left:
            self.left.PrintTree()
        print( self.data),
        if self.right:
            self.right.PrintTree()

    def inorderTraversal(self, root):
        res = []
        if root:
            res = self.inorderTraversal(root.left)
            res.append(root.data)
            res = res + self.inorderTraversal(root.right)
        return res


root = Node(12)
root.insert(6)
root.insert(14)
root.insert(3)
print(root.findval(7))
print(root.findval(14))

# Tree construction
# AVL Tree
# BTree
# B-trees are good general-purpose disc data structure
# With data structures kept on disc, instead,
# it is sensible to make the unit of data fairly large,
# perhaps some size related to the natural storage unit
# that your physical disc uses (a sector, cluster or track).
# Minimizing the total number of separate disc accesses
# will be more important than getting the ultimately best packing density.
# he expected implementation is that each node will be a disc block
# containing an alternation of pointers to sub-trees and keys.
# This will tend to define the maximum branching factor
# that can be supported in terms of the natural disc block size
# and the amount of memory needed for each key.
# When new items are added to a B-tree it will often be
# possible to add the item within an existing block without overflow.
# Any block that becomes full can be split into two,
# and the single reference to it from its parent block
# expands to the two references to the new half-empty blocks.
# For B-trees of reasonable branching factor,
# any reasonable amount of data can be kept in a quite shallow tree:
# although the theoretical cost of access grows with the
# logarithm of the number of data items stored, in practical terms it is constant.

# Hash tables
# Chaining
    # We can arrange that the locations in the array hold little linear lists
    # that collect all the keys that hash to that particular value.
    # A good hash function will distribute keys fairly evenly over the array,
    # so with luck this will lead to lists with average length ⌈n/m⌉
    # if n keys are in use
# Open addressing
#     The second way of using hashing is to use the hash value h(n)
#     as just a first preference for where to store the given key in the array.
#     On adding a new key, if that location is
#     empty then well and good—it can be used;
#     otherwise, a succession of other probes are made of the
#     hash table according to some rule until either the key is
#     found to be present or an empty slot for it is located.
#     The simplest (but not the best) method of collision resolution is
#     to try successive array locations on from the place of the first probe,
#     wrapping round at the end of the array.
#     Note that, with the open addressing strategy,
#     where all keys are kept in the array,
#     the array may become full,
#     and that its performance decreases significantly when it is nearly full;
#     implementations will typically double the size of the array
#     once occupancy goes above a certain threshold.
# Rehashing
#     Rehasing a dictionary consists of creating a new array
#     (usually twice as large, to amortize the cost of the operation;
#     clearly with a new hash function, since the index range is different),
#     inserting every key-value pair of the old array into the new one
#     and deleting the old array.
# TODO: Understand O() features of hash table


# TODO: Implement Min and Max Heap
import heapq
# Priority Queue
class PriorityQueue(object):
     def __init__(self):
         self._queue = Titem(None, None, None, None)
         self._index = 0

    def push(self, item, priority):
        # heapq.heappush(self,_queue, (-priority, self._index, item))
        self.add_to_queue(self._queue)
        self._index += 1

    def pop(self):
        return heapq.heappop(self._queue)[-1]

    def add_to_queue(self, priority, item)
        if not self._queue.value:
            self._queue.index = priority
            self._queue.value = item
        else:
            if priority > self._queue.value:
                self.add_to_queue(priority, self._queue.right)
            if priority < self._queue.value:
                self.add_to_queue(priority, self._queue.left)


class TItem(object):
    def __init__(self, index, value, lvalue, rvalue):
        self.index = index
        self.value = value
        self.left = lvalue
        self.right = rvalue


class QItem(object):
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return 'Item: {!r}'.format(self.name)
