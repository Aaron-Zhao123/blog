# travelling salesman
import numpy as np
cities = np.array(
    [[0, 10, 15, 20], [5, 0, 9, 6], [6, 13, 0, 12], [8, 8, 9, 0]])
'''
    {}  {B} {C} {D} {B,C}
A   0
B   10   
C   15  
D   20
'''
def tsp(mask, pos){

}
# def tsp(visited, pos, cities, num_cities=4):
#     for i in range(num_cities):
#         for j in range(num_cities):


# cost = tsp(tsp_visited, 0)
# print(cost)
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


## common sequence
xs = [1, 2, 4, 5]
ys = [0, 2, 1, 5]

'''
    1   2   4   5
0   0   0   0   0
2   0   1   1   1
1   1   1   1   1
5   1   1   1   2

dp_state[i, j]  = table[i-1, j-1] + 1
                = max(table[i-1, j], table[i-1, j])
'''

import numpy as np

def lcm(xs, ys, dp_length=4):
    dp_states = np.zeros((dp_length, dp_length))
    for i in range(dp_length):
        for j in range(dp_length):
            if xs[j] == ys[i]:
                if i == 0 or j == 0:
                    dp_states[i][j] = 1
                else:
                    dp_states[i][j] = dp_states[i-1][j-1] + 1
            else:
                if i != 0 and j != 0:
                    dp_states[i][j] = max(dp_states[i-1][j], dp_states[i][j-1])
                else:
                    dp_states[i][j] = 0
    return dp_states
print('Test')
dp_states = lcm(xs, ys)
print('dp states', dp_states)


