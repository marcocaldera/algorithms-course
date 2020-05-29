/**
 * Prime number (numero divisibile solo per 1 e per se stesso)
 * isPrime(9) yeilds false
 * isPrime(5) yeilds true
 */

// Best case: number = 1 OR number = 2  ==> O(1)
// Average case: O(n)
// Worst case: number = 27,277 (big prime number)  ==> O(n)

const _isPrime = (number) => {
	for (let i = 2; i < number; i++) /* 1 */ {
		if (number % i === 0 /* n - 2 */) {
			return false // 1
		}
	}
	return true // 1
}

// Average case: O(sqrt(n))
// Worst case: number = 27,277 (big prime number)  ==> O(sqrt(n))
const isPrime = (number) => {
	for (let i = 2; i < Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false
		}
	}
	return true
}

console.log(isPrime(5))
// console.log(isPrime(27277))
// console.log(isPrime(9))
