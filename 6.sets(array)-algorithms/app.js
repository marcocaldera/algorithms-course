// Permutation without repetition (n!)

const getPermutation = (options) => {
    const permuations = []
    console.log("FUNCTION START")
    console.log(options)

    if (options.length === 1) {
        return [options];
    }

    const partialPermutations = getPermutation(options.slice(1)) // escludo il primo elemento dell'array
    console.log("AFTER RECURSIVE STEP")
    console.log(partialPermutations)

    const firstOption = options[0]
    console.log('FIRST OPTION: ', firstOption)

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermuation = partialPermutations[i]
        console.log('OUTER LOOP ', partialPermuation)
        for (let j = 0; j <= partialPermuation.length; j++) {
            const permutationInFront = partialPermuation.slice(0, j)
            const permutationAfter = partialPermuation.slice(j)
            permuations.push(permutationInFront.concat([firstOption], permutationAfter))
        }
    }

    return permuations
}

const totoListItems = ['Mindfullnes', 'My affirmation', 'Work', 'Thesis']

console.log(getPermutation(totoListItems))

// La complessità fattoriale è orribile, peggio di O(2^n)
// Time complexity: O(n!) => 4 * 3 * 2 * 1 = 24