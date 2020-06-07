// Dynamic programming O(n)
let counter = 0
const fib = (n, memo) => {
    counter++
    let result
    if (memo[n]) {
        return memo[n]
    }
    if (n === 0 || n === 1) {
        result = 1
    } else {
        result = fib(n - 1, memo) + fib(n - 2, memo)
    }
    memo[n] = result
    return result
}

fib(5, {})
console.log(counter)
counter = 0

fib(6, {})
console.log(counter)
counter = 0

fib(20, {})
console.log(counter)
counter = 0

fib(50, {})
console.log(counter)
counter = 0