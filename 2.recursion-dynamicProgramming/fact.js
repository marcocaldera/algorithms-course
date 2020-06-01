// O(n)
const _fact = (number) => {
    let result = 1
    for (let i = 2; i <= number; i++) {
        result = result * i
    }
    return result
}

// Recursive
// Ogni function call è O(1) ma noi richiamiamo la funzione n volte quindi:
// T = n * O(1) => O(n)
// T = n * 1 => O(n) <-- possiamo riscriverla anche in questo modo, è uguale
const fact = (number) => {
    // Base case / Exit condition
    if (number === 1) { // 1
        return 1 // 1
    }
    return number * fact(number - 1) // 1
}


console.log(fact(3)) // 3 * 2 * 1 => 6
console.log(fact(4)) // 4 * 3 * 2 * 1 => 24
console.log(fact(5)) // 5 * 4 * 3 * 2 * 1 => 120
