def merge(left, right):
    n1 = len(left)
    n2 = len(right)
    tmp = []
    left_index = right_index = 0
    while (left_index < n1 and right_index < n2):
        if (left[left_index] < right[right_index]):
            tmp.append(left[left_index])
            left_index += 1
        else:
            tmp.append(right[right_index])
            right_index += 1
    if (left_index < n1):
        return tmp + left[left_index:]
    return tmp + right[right_index:]


def mergesort(xs):
    if len(xs) < 2:
        return xs
    mid = int(len(xs) / 2)
    left = mergesort(xs[:mid])
    right = mergesort(xs[mid:])
    return merge(left, right)

def partition(xs, begin, end):
    pivot = begin
    for i in range(begin+1, end+1):
        if xs[begin] > xs[i]:
            pivot += 1
            xs[i], xs[pivot] = xs[pivot], xs[i]
    xs[pivot], xs[begin] = xs[begin], xs[pivot]
    return pivot

def quicksort(xs):
    def _quicksort(xs, begin, end):
        if begin >= end:
            return
        pivot = partition(xs, begin, end)
        _quicksort(xs, begin, pivot-1)
        _quicksort(xs, pivot+1, end)
    _quicksort(xs, 0, len(xs)-1)
    return xs

def heapify(xs, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and xs[i] < xs[left]:
        largest = left
    if right < n and xs[largest] < xs[right]:
        largest = right

    if largest != i:
        xs[i], xs[largest] = xs[largest], xs[i]
        heapify(xs, n, largest)

def heapsort(xs):
    n = len(xs)
    for i in range(n, -1, -1):
        heapify(xs, n, i)
    for i in range(n-1, 0, -1):
        xs[i], xs[0] = xs[0], xs[i]
        heapify(xs, i, 0)
    return xs

def heapsort2(xs):
    import heapq
    tmp = []
    for item in xs:
        heapq.heappush(tmp, item)
    return [heapq.heappop(tmp) for i in range(len(tmp))]



xs = [2, 10, 3, 4, 5, 6]
xs_sorted = mergesort(xs)
print('Merge sort')
print('Resutls: ', xs_sorted)

xs = [2, 10, 3, 4, 5, 6]
xs_sorted = quicksort(xs)
print('Quick sort')
print('Resutls: ', xs_sorted)

xs = [2, 10, 3, 4, 5, 6]
xs_sorted = heapsort(xs)
print('Heap sort')
print('Resutls: ', xs_sorted)

xs = [2, 10, 3, 4, 5, 6]
xs_sorted = heapsort2(xs)
print('Heap sort')
print('Resutls: ', xs_sorted)




