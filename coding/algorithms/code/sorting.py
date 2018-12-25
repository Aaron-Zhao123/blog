xs = [1, 3, 2, 4, 5]


'''
Select Sort
'''
def selectSort(xs):
    for k in range(len(xs)):
        # array before a[k] is sorted
        # Find the smallest in a[k:END]
        iMin = k
        for j in range(iMin, len(xs)):
            if xs[j] < xs[iMin]:
                iMin = j
        # do a swap
        xs[iMin], xs[k] = xs[k], xs[iMin]
    return xs


def bianrySearch(xs, x, start, end):
    # base case
    if start == end:
        if xs[start] > x:
            return start
        return start+1
    if start > end:
        return start

    mid = (start+end) / 2
    mid = int(mid)
    if xs[mid] < x:
        return bianrySearch(xs, x, mid+1, end)
    elif xs[mid] > x:
        return bianrySearch(xs, x, start, mid-1)
    else:
        return mid


'''
Binary Insert Sort
    * When n is small
'''
def binaryInsertSort(xs):
    for k in range(len(xs)):
        x = xs[k]
        j = bianrySearch(xs, x, 0, k-1)
        xs = xs[:j] + [x] + xs[j:k] + xs[k+1:]
    return xs

'''
Bubble Sort
'''
def bubbleSort(xs):
    did_swap = True
    while (did_swap):
        did_swap = False
        for k in range(len(xs)-1):
            if xs[k] > xs[k+1]:
                xs[k], xs[k+1] = xs[k+1], xs[k]
                did_swap = True
    return xs



'''
Merge sort
    * We need additional space (O(n))
    * Speed O(log(n))
'''
def merge(xs, start, middle, end):
    n1 = middle - start + 1
    n2 = end - middle
    n1 = int(n1)
    n2 = int(n2)
    L = [0] * n1
    R = [0] * n2

    for i in range(0, n1):
        L[i] = xs[start + i]
    for i in range(0, n2):
        R[i] = xs[middle + 1 + i]

    i = j = 0
    k = start
    while (i<n1) and (j<n2):
        if L[i] <= R[j]:
            xs[k] = L[i]
            i += 1
        else:
            xs[k] = R[j]
            j += 1
        k += 1

    # Copy the remaining elements of L[], if there
    # are any
    while i < n1:
        xs[k] = L[i]
        i += 1
        k += 1

    # Copy the remaining elements of R[], if there
    # are any
    while j < n2:
        xs[k] = R[j]
        j += 1
        k += 1
    return xs

def mergeSort(xs, l, r):
    if l < r:
        m = (l + r -1) / 2
        m = int(m)
        mergeSort(xs, l, m)
        mergeSort(xs, m+1, r)
        merge(xs, l, m, r)
    return xs

def mergesort2(xs):
    if len(xs) < 2:
        return xs[:]
    m = int((len(xs)) / 2)
    left = mergesort2(xs[:m])
    right = mergesort2(xs[m:])
    return merge2(left, right)

def merge2(left, right):
    n1 = len(left)
    n2 = len(right)
    i = j = 0
    tmp = []
    while i < n1 and j < n2:
        if (left[i] < right[j]):
            tmp.append(left[i])
            i += 1
        else:
            tmp.append(right[j])
            j += 1
    while i < n1:
        tmp.append(left[i])
        i += 1
    while j < n2:
        tmp.append(right[j])
        j += 1
    return tmp

def mergesort3(xs):
    print(xs)
    if len(xs) < 2:
        return xs[:]
    mid = len(xs)/ 2
    mid = int(mid)
    left = mergesort3(xs[:mid])
    right = mergesort3(xs[mid:])
    return merge3(left, right)

def merge3(left, right):
    l1 = len(left)
    l2 = len(right)
    tmp = []
    cnt_left = cnt_right = 0
    while (cnt_left < l1) and (cnt_right < l2):
        if (left[cnt_left] < right[cnt_right]):
            tmp.append(left[cnt_left])
            cnt_left += 1
        else:
            tmp.append(right[cnt_right])
            cnt_right += 1
    while (cnt_left < l1):
        tmp.append(left[cnt_left])
        cnt_left += 1
    while (cnt_right < l2):
        tmp.append(right[cnt_right])
        cnt_right += 1
    return tmp

xs = [2, 10, 3, 4, 5, 6]
xs_sorted = mergesort3(xs)
print('Merge sort')
print('Resutls: ', xs)
import pdb; pdb.set_trace()






def partition(xs, left, right):
    i = (left - 1)
    pivot = xs[right]
    for j in range(left, right):
        if xs[j] <= pivot:
            i += 1
            xs[i], xs[j] = xs[j], xs[i]
    # swap pivot to the proper place
    xs[i+1], xs[right] = xs[right], xs[i+1]
    return i+1

'''
Quick sort
    * We need no additional space with inplace operations
    * Random memory access
'''
def quickSort(xs, low, high):
    if low < high:

        # pi is partitioning index, arr[p] is now
        # at right place
        pi = partition(xs,low,high)

        # Separately sort elements before
        # partition and after partition
        quickSort(xs, low, pi-1)
        quickSort(xs, pi+1, high)
    return xs

def partition2(xs, begin, end):
    pivot = begin
    for i in range(begin+1, end+1):
        if xs[i] <= xs[begin]:
            pivot += 1
            xs[i], xs[pivot] = xs[pivot], xs[i]
    xs[pivot], xs[begin] = xs[begin], xs[pivot]
    return pivot

def quicksort2(xs, begin, end=None):
    if end is None:
        end = len(xs) - 1
    def _quicksort(xs, begin, end):
        if begin >= end:
            return
        pivot = partition2(xs, begin, end)
        _quicksort(xs, begin, pivot - 1)
        _quicksort(xs, pivot + 1, end)
    return _quicksort(xs, begin, end)


def partition3(xs , begin, end):
    pivot = begin
    for i in range(begin+1, end+1):
        if xs[i] < xs[begin]:
            pivot += 1
            xs[i], xs[pivot] = xs[pivot], xs[i]
    xs[pivot], xs[begin] = xs[begin], xs[pivot]
    return pivot

def quicksort3(xs):
    def _quicksort(xs, begin, end):
        pivot = partition3(xs, begin, end)
        _quicksort(xs, begin, pivot-1)
        _quicksort(xs, pivot+1, end)
    return _quicksort(xs, 0, len(xs)-1)

xs = [2, 10, 3, 4, 5, 6]
xs_sorted = quicksort2(xs, 0)
import pdb; pdb.set_trace()

def heapify(xs, n, i):
    largest = i # Initialize largest as root
    l = 2 * i + 1     # left = 2*i + 1
    r = 2 * i + 2     # right = 2*i + 2

    # See if left child of root exists and is
    # greater than root
    if l < n and xs[i] < xs[l]:
        largest = l

    # See if right child of root exists and is
    # greater than root
    if r < n and xs[largest] < xs[r]:
        largest = r

    # Change root, if needed
    if largest != i:
        xs[i],xs[largest] = xs[largest],xs[i] # swap

        # Heapify the root.
        heapify(xs, n, largest)

def heapSort(xs):
    n = len(xs)

    # Build a maxheap.
    for i in range(n, -1, -1):
        heapify(xs, n, i)

    # One by one extract elements
    for i in range(n-1, 0, -1):
        xs[i], xs[0] = xs[0], xs[i] # swap
        heapify(xs, i, 0)
    return xs

def heapify2(xs, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and xs[left] > xs[i]:
        largest = left
    if right < n and xs[right] > xs[i]:
        largest = right
    # root changed
    if largest != i:
        xs[i], xs[largest] = xs[largest], xs[i]
        heapify2(xs, n, largest)


def heapsort2(xs):
    n = len(xs)
    for i in range(n, -1, -1):
        heapify2(xs, n , i)
    for i in range(n-1, 0, -1):
        xs[i], xs[0] = xs[0], xs[i]
        heapify(xs, i, 0)
    return xs

xs = [2, 10, 3, 4, 5, 6]
xs_sorted = heapsort2(xs)
import pdb; pdb.set_trace()

'''
count Sort:
    * O(n) complexity
    * O(n) memory
    * Slow if range is large
'''

def countSort(arr):
    # The output character array that will have sorted arr
    output = [0 for i in range(256)]

    # Create a count array to store count of inidividul
    # characters and initialize count array as 0
    count = [0 for i in range(256)]

    # For storing the resulting answer since the
    # string is immutable
    ans = ["" for _ in arr]

    # Store count of each character
    for i in arr:
        count[ord(i)] += 1

    # Change count[i] so that count[i] now contains actual
    # position of this character in output array
    for i in range(256):
        count[i] += count[i-1]

    # Build the output character array
    for i in range(len(arr)):
        output[count[ord(arr[i])]-1] = arr[i]
        count[ord(arr[i])] -= 1

    # Copy the output array to arr, so that arr now
    # contains sorted characters
    for i in range(len(arr)):
        ans[i] = output[i]

    return ans

def countingSort(arr, exp1):

    n = len(arr)

    # The output array elements that will have sorted arr
    output = [0] * (n)

    # initialize count array as 0
    count = [0] * (10)

    # Store count of occurrences in count[]
    for i in range(0, n):
        index = (arr[i]/exp1)
        count[ (index)%10 ] += 1

    # Change count[i] so that count[i] now contains actual
    #  position of this digit in output array
    for i in range(1,10):
        count[i] += count[i-1]

    # Build the output array
    i = n-1
    while i>=0:
        index = (arr[i]/exp1)
        output[ count[ (index)%10 ] - 1] = arr[i]
        count[ (index)%10 ] -= 1
        i -= 1

    # Copying the output array to arr[],
    # so that arr now contains sorted numbers
    i = 0
    for i in range(0,len(arr)):
        arr[i] = output[i]

# Method to do Radix Sort
def radixSort(arr):

    # Find the maximum number to know number of digits
    max1 = max(arr)

    # Do counting sort for every digit. Note that instead
    # of passing digit number, exp is passed. exp is 10^i
    # where i is current digit number
    exp = 1
    while max1/exp > 0:
        countingSort(arr,exp)
        exp *= 10

print('Select Sort')
xs = selectSort(xs)
print(xs)

xs = [1, 3, 2, 4, 5]
print('Binary Insertion Sort')
xs = binaryInsertSort(xs)
print(xs)

xs = [1, 3, 2, 4, 5]
print('Bubble Sort')
xs = bubbleSort(xs)
print(xs)

xs = [1, 3, 2, 4, 5]
print('Merge Sort')
xs = mergeSort(xs, 0, len(xs)-1)
print(xs)

xs = [1, 3, 2, 4, 5]
print('quick Sort')
xs = quickSort(xs, 0, len(xs)-1)
print(xs)

xs = [1, 3, 2, 4, 5]
print('heap Sort')
xs = heapSort(xs)
print(xs)





