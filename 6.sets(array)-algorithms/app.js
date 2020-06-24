// Permuation with repetition

function getPermuations(options, length) {
    const permuations = []

    if (length === 1) {
        // return [[1], [2], [3]]
        return options.map(option => [option])
    }

    const partialPermuations = getPermuations(options, length - 1) // [[1], [2], [3]]

    for (const option of options) { // [1, 2, 3]
        for (const existingPermuation of partialPermuations) { // [[1], [2], [3]]
            permuations.push([option].concat(existingPermuation))
            // [1,1] [1,2] [1,3]
            // nuova iterazione loop esterno: [2,1] [2,2] [2,3]
            // etc.
        }
    }

    return permuations // [1,1] [1,2] [1,3] [2,1] [2,2] [2,3], etc. viene restituito alla chiama getPermutations precedente e così via
}

const digits = [1, 2, 3]
const resultLenght = 3

console.log(getPermuations(digits, resultLenght))

// Time Complexity: O(n^r) => n is the number of options, r is the length

// La complessità dipende chiaramente da tutti e due i parametri in input (quindi li dobbiamo considerare entrambi)
// Capiamo questo perché indipendentemente dal parametro che cambia la complessità aumenta comunque tantissimo

// La complessità è O(n^r) perché se abbiamo 3^3 abbiamo 27 permutazioni possibili
// Se abbiamo options=n=4 e lenght=r=2 abbiamo 4^2=16 permutazioni possibili