// sumNumbers([1, 3, 10]) should yield 14

/**
 * T = 1 + 1 + n + 1 = 3 + 1*n
 * T = 1*n
 * T = n => O(n)
 */
const sumNumbers = (numbers) => {
	let result = 0 // 1
	for (const number of numbers) /* 1 */ {
		result += number // n
	}
	return result // 1
}

/**
 * T = 1 + 1 + n + n + 1 = 3 + 2*n
 * T = 2*n
 * T = n => O(n)
 */
const sumNumbers = (numbers) => {
	let result = 0 // 1
	for (const number of numbers) /* 1 */ {
		console.log(number) // n
		result += number // n
	}
	return result // 1
}

console.log(sumNumbers([1, 3, 10]))
