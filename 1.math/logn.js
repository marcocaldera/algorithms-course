// Best case: number = 13 => O(1)
// Best case: number = 13 => O(log n)
/**
 * Worst case: number = 1,125,899,906,842,624 => O(log n)
 * ci vogliono solo 50 iterazioni del while,
 * quindi comunque molte meno di n (1,125,899,906,842,624 in questo caso), per questo mettiamo log n.
 * In generale per capire log n ci basta vedere con dei console log, al crescere di n il numero di iterazioni cresce
 * molto meno velocemente di n e quindi la crescita non è lineare ma logaritmica
 */
const _isPowerOfTwo = (number) => {
    if (number < 1) {
        return false
    }
    let dividedNumber = number
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) {
            return false
        }
        dividedNumber = dividedNumber / 2 //in ogni iterazioni divido il mio "n" in pezzi più piccoli (segnale di un log n)
    }
    return true
}

/**
 * Es.  1000 (8)
 *      0111 (7)
 *      ----
 * &    0000 (viene messo uno solo se ci sono entrambi uno)
 * Riconvertendo in decimale viene: 0
 */
const isPowerOfTwo = (number) => {
    if (number < 1) {
        return false
    }
    return (number & (number - 1)) === 0 // O(1)
}


console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(13))