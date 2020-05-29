const isPowerOfTwo = (number) => {
    if (number < 1) {
        return false
    }
    let dividedNumber = number
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) {
            return false
        }
        dividedNumber = dividedNumber / 2
    }
    return true
}

// Best case: number = 13 => O(1)
// Best case: number = 13 => O(log n)
/**
 * Worst case: number = 1,125,899,906,842,624 => O(log n)
 * ci vogliono solo 50 iterazioni del while,
 * quindi comunque molte meno di n (1,125,899,906,842,624 in questo caso), per questo mettiamo log n.
 * In generale per capire log n ci basta vedere con dei console log, al crescere di n il numero di iterazioni cresce
 * molto meno velocemente
 */


console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(13))