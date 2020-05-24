/**
 * Fibonacci fib(4) yields 5
 * Restituisce il numero di fibonacci rappresentato dall'indice passato come argomento
 * T = 1 + 1 + 1 + 2 (n - 1) = 3 + 2n - 2 = 1 + 2n = 2n = n
 * T = n => O(n)
 */

const fib = (n) => {
	const numbers = [1, 1] // 1
	for (let i = 2; i < n + 1; i++) /* 1 */ {
		console.log('running') // n - 1 (così continiamo velocemente il numero di volte in cui viene eseguito)
		numbers.push(numbers[i - 1] + numbers[i - 2]) // n - 1
	}
	return numbers[n] // 1
}

console.log(fib(4))
console.log(fib(5))
