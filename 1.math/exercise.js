// Best case: O(n)
// Average case: O(n)
// Worst case: O(n)
const minValue = (numbers) => {
	let min = numbers[0] // 1
	for (const num of numbers) { // 1
		if (num < min) { // n
			min = num // 0 (Best Case), n - 1 (Worst Case), Avg. case n - a
		}
	}
	return min // 1
}

console.log(minValue([1, 2, 3])) // Best
console.log(minValue([3, 2, 1])) // Worst
console.log(minValue([1, 3, 2])) // Avg.

// O(1)
const isEven = (number) => {
	return number % 2 === 0 // 1
}

console.log(isEven(5))
