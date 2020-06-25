const knapsackFn = (items, cap, itemIndex, memo) => {
    console.log("RUNNING")
    if (memo[cap][itemIndex]) {
        console.log('Used memo')
        return memo[cap][itemIndex]
    }

    if (cap === 0 || itemIndex < 0) {
        return { items: [], value: 0, weight: 0 } // Empty knapsack
    }
    if (cap < items[itemIndex].weight) {
        return knapsackFn(items, cap, itemIndex - 1, memo)
    }

    const sackWithItem = knapsackFn(items, cap - items[itemIndex].weight, itemIndex - 1, memo)
    const sackWithoutItem = knapsackFn(items, cap, itemIndex - 1, memo)

    const valueWithItem = sackWithItem.value + items[itemIndex].value
    const valueWithoutItem = sackWithoutItem.value

    let resultSack

    if (valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight,
        }
        resultSack = updatedSack
    } else {
        resultSack = sackWithoutItem
    }

    memo[cap][itemIndex] = resultSack

    return resultSack

}

function knapsack(items, cap, index) {
    const mem = Array.from(Array(cap + 1), () =>
        Array(items.length).fill(undefined)
    );
    // const mem = Array(cap + 1).fill(Array(items.length).fill(undefined))
    console.log(mem)
    return knapsackFn(items, cap, index, mem)
}

const items = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 },
    // { name: 'd', value: 2, weight: 2 },
]
const maxCap = 8

const sack = knapsack(items, maxCap, items.length - 1)
console.log(sack)

// Time complexity without memoization: O(2^n)
// Time complexity without memoization: O(n*C) (c is the capacity/maxCap)