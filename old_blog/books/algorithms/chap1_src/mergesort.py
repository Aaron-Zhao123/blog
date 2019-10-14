import math


xs = [2, 4, 3, 4, 6, 11, 1]

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

print(xs)
print(merge_sort(xs))
