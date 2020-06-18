// O(n^2)
const bubbleSort = (arr) => {
    const resultArray = [...arr]
    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerEl = resultArray[outer]
        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerEl = resultArray[inner]
            // [2, 1] => [1, 2]
            if (outerEl > innerEl) { // cambiare < > per passare da ascending a descending order
                resultArray[outer] = innerEl
                resultArray[inner] = outerEl

                outerEl = resultArray[outer]
                innerEl = resultArray[inner]
            }
        }
    }
    return resultArray
}



const sortedArray = bubbleSort([5, 10, -3])
// const sortedArray = bubbleSort([5, 10, -3, -10, 1, 100, 99])
console.log(sortedArray)