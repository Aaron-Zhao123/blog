# Recursion

## Merge Sort

* Description

    1. Divide the array into two parts.
    2. Recursively merge sort subarrays.
    3. Merge the newly-sorted array into a single sorted one.

* Analysis


    T(n) = T([n/2]) + T([n/2]) + O(n)

    Which is apparently:
    T(n) = O(nlogn)


* Algorithm
    ```python3
    import math

    def merge_sort(xs):
        x_len = len(xs)
        if x_len > 1:
            mid = math.ceil(len(xs) / 2)
            xl = merge_sort(xs[:mid])
            xu = merge_sort(xs[mid:])
            x_merged = merge(xl, xu)
            return x_merged
        return xs


    def merge(xl, xu):
        merged = []
        total_len = len(xl) + len(xu)
        xl_index = xu_index = 0
        # merge
        while(xl_index < len(xl) and xu_index < len(xu)):
            xl_elem = xl[xl_index]
            xu_elem = xu[xu_index]
            if (xl_elem < xu_elem):
                merged.append(xl_elem)
                xl_index += 1
            else:
                merged.append(xu_elem)
                xu_index += 1
        # concat the rest
        if xl_index < len(xl):
            return merged + xl[xl_index:]
        return merged + xu[xu_index:]

    ```


## Quick Sort

* Description

    1. Choose a pivot.
    2. Partition the array to elements smaller, equal or bigger than the pivot.
    3. Quicksort the first and last sub-arrays.

* Analysis

    Partition runs in O(n) time

    T(n) = T([n-r]) + T([r]) + O(n)

    In the average case, T(n) = O(nlogn)
    If r is the first or last, we have O(n)

* Optimization

    A way to optimize the process is to a partition the array to n copies,
    with finiding the median in the first copy and quick sort on other n-1.

* Algorithm
    ```python3
    def partition(xs, pivot):
        pivots = []
        smaller = []
        larger = []
        for i in xs:
            if i == pivot:
                pivots.append(i)
            elif i > pivot:
                larger.append(i)
            else:
                smaller.append(i)
        return smaller, larger, pivots

    def quicksort(xs):
        if len(xs) <= 1:
            return xs
        pivot = xs[0]
        xl, xh, pivots = partition(xs, xs[0])
        xl_sorted = quicksort(xl)
        xh_sorted = quicksort(xh)
        return xl_sorted + pivots + xh_sorted
    ```
