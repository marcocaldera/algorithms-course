let counter = 0
const fib = (n) => {
    counter++
    if (n === 0 || n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

// Loop-based solution: O(n)
// Recursion-base solution: O(2^n) (complessità orribile)
// Ogni esecuzione porta a raddoppiare le esecuzioni (nel return richiamo due volte la funzione "fib") conducendo ad un tempo esponenziale

// console.log(fib(4))
// console.log(fib(5))

// Per l'exponential time complexity:

fib(5)
console.log(counter) // 15
counter = 0

fib(10)
console.log(counter) // 177
counter = 0

fib(20)
console.log(counter) // 21891 (se fosse quadratic sarebbe 20*20=400, se fosse cubi sarebe 20*20*20=8000)
counter = 0

fib(30)
console.log(counter) // 2692537
counter = 0

