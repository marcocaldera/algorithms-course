// KNAPSACK PROBLEM
// Posso usare più volte gli stessi elementi? NO

// Approccio sbagliato

const getPermutation = (options) => {
    const permuations = []

    if (options.length === 1) {
        return [options];
    }

    const partialPermutations = getPermutation(options.slice(1))
    const firstOption = options[0]

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermuation = partialPermutations[i]
        for (let j = 0; j <= partialPermuation.length; j++) {
            const permutationInFront = partialPermuation.slice(0, j)
            const permutationAfter = partialPermuation.slice(j)
            permuations.push(permutationInFront.concat([firstOption], permutationAfter))
        }
    }

    return permuations
}

const items = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 }
]

const allPermuations = getPermutation(items)
console.log(allPermuations)

// Non ha senso questa soluzione, ma uno può anche solo provarla per constare che sia inutile