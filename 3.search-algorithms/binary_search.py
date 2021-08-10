import sys


def binary_search(array, target):
    return binary_search_helper(array, target, 0, len(array) - 1)


def binary_search_helper(array, target, left, right):

    while left <= right:
        middle = (right + left) // 2

        if target == array[middle]:
            return middle

        if array[middle] > target:
            right = middle - 1
        elif array[middle] < target:
            left = middle + 1

    return -1


test_array = [2, 3, 5, 9, 12, 17, 21]
target = int(sys.argv[1])

result = binary_search(test_array, target)
print(result)
