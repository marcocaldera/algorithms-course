// Prodotto cartesiano (i.e., tutte le possibili combinazioni di elementi)
const cartProduct = (setA, setB) => {
  const product = []
  for (const setAEl of setA) {
    for (const setBEl of setB) {
      product.push([setAEl, setBEl])
    }
  }
  return product
}

const colors = ['blue', 'red']
const sizes = ['s', 'm', 'l']

console.log(cartProduct(colors, sizes))


// Time complexity => O(n * m)
// Space complexity => O(n * m) (a riga 6 creiamo per ogni iterazione un nuovo valore permanente)