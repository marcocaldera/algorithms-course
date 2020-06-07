// O(log n)
const binarySearch = (sortedArr, seekElement) => {
    let startIndex = 0
    let endIndex = sortedArr.length - 1

    while (startIndex <= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
        if (seekElement === sortedArr[middleIndex]) {
            return middleIndex
        }

        if (sortedArr[middleIndex] < seekElement) {
            startIndex = middleIndex + 1
        } else {
            endIndex = middleIndex - 1
        }
    }
}


const arr = [1, 5, 9, 13, 99, 100]
console.log(binarySearch(arr, 99))