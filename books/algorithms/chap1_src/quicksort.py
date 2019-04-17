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


xs = [2, 4, 3, 4, 6, 11, 1]

print(xs)
print(quicksort(xs))
