// O(log n)
const binarySearch = (sortedArr, element, offset) => {
    // console.log(sortedArr, element, offset)
    // O(1) per tutta la parte non ricorsiva, non ci sono loop, non dipende da n
    let startIndex = 0
    let endIndex = sortedArr.length - 1
    const middleIndex = Math.floor((endIndex - startIndex) / 2)
    if (element === sortedArr[middleIndex]) {
        return middleIndex + offset
    }

    // Devo guardare nella metà di destra
    if (sortedArr[middleIndex] < element) {
        startIndex = middleIndex + 1
        offset = offset + middleIndex + 1
    } else {
        // Devo guardare nella metà di sinistra
        endIndex = middleIndex
    }
    // O(1)
    return binarySearch(sortedArr.slice(startIndex, endIndex + 1), element, offset)

}

const arr = [1, 5, 9, 13, 99, 100]
console.log(binarySearch(arr, 99, 0))


/**
 * Per problemi ricorsivi dove si splitta il problema (a metà, in tre parti, etc.)
 * possiamo derivatare la time complexity con il master theorem:
 */

 // a = 1 (quante volte richiamiamo la funzione ricorsiva per ogni step)
 // b = 2 (perché splittiamo sempre a metà il problema)
 // O(n^logb a) =  O(n^log2 1) => O(n^0) => O(1) (la parte ricorsiva ha un time complexity costante)


 // Overall alogirithm time complexity:
 // In questo caso abbiamo "same work inside and outside recursion" quindi:
 // O(n^logb a * log n) => O(1 * log n) => O(log n)