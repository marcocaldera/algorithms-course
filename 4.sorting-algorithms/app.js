// O(n * log n)
// Più lungo da scrivere rispetto al quickSort quindi anche se
// come complessità sono tendenzialmente uguali se l'array da ordinare non è enorme
// meglio il quickSort
const mergeSort = (arr) => {

    if (arr.length < 2) return arr
    if (arr.length === 2) return arr[0] > arr[1] ? [arr[1], arr[0]] : arr

    const middle = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, middle) // l'end è uscluso
    const rightArray = arr.slice(middle) // automaticamente arriva fino in fondo

    const leftSortedArray = mergeSort(leftArray)
    const rightSortedArray = mergeSort(rightArray)

    const mergedArr = []
    let leftArrIndex = 0
    let rightArrIndex = 0
    while (leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length) {

        if (leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
            mergedArr.push(rightSortedArray[rightArrIndex])
            rightArrIndex++
        } else {
            mergedArr.push(leftSortedArray[leftArrIndex])
            leftArrIndex++
        }
    }

    return mergedArr

}

// Recursive Step Runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Runtime outside recursion: O(n)
// Alg runtime: O(n^logb(a) * log n) => O(n * log n)


const sortedArray = mergeSort([-3, 10, 100, -3, -15])
// const sortedArray = mergeSort([5, 10, -3, -10, 1, 100, 99])
console.log(sortedArray)