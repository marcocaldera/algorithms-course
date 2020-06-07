const linearSearch = (arr, seekElement, comparatorFn) => {
    let index = 0
    for (const item of arr) {
        if (
            typeof seekElement === 'object' &&
            element !== null &&
            comparatorFn(seekElement, item)
        ) {
            return index
        }
        if (item === seekElement) {
            return index
        }
        index++
    }
}



const arr = [5, 3, 10, -10, 33, 51]
console.log(linearSearch(arr, 10))
console.log(linearSearch(arr, 33))

// Linear search presente in javascript
arr.findIndex(el => el === 5)
arr.find(el => el === 5)

// Objects are reference types
const objects = [{ name: 'Max', age: 31 }, { name: 'Manu', age: 32 }]
console.log(linearSearch(objects, { name: 'Manu', age: 32 }, (el, it) => {
    return el.name === it.name
}))