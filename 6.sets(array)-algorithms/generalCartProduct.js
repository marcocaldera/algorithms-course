// Prodotto cartesiano generico
const cartProduct = (setA, setB) => {
    const product = []
    for (let setAEl of setA) {
        if (!Array.isArray(setAEl)) {
            setAEl = [setAEl]
        }
        for (const setBEl of setB) {
            product.push([...setAEl, setBEl])
        }
    }
    return product
}

const cartesian = (...sets) => {
    let tempProduct = sets[0]
    for (let i = 1; i < sets.length; i++) {
        tempProduct = cartProduct(tempProduct, sets[i])
    }
    return tempProduct
}

const colors = ['blue', 'red']
const sizes = ['s', 'm', 'l', 'xl']
const styles = ['round neck', 'v neck']

console.log(cartesian(colors, sizes, styles))

// generalizziamo con solo n (la lunghezza dell'array più lungo) e visto che non sappiamo a priori quanti ce ne siano
// mettiamo x per indicare il numero di input
// Time complexity => O(n^x) (e.g., se abbiamo tre array in input => O(n^3))
// Space complexity => O(n^x)