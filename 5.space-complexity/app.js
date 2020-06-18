// 1) Factorial (Loop)

function fact(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

// Space Complexity: O(1)

// ------------------------
// 2) Factorial (Recursion)
// ------------------------

function factRecursive(number) {
  if (number === 1) {
    // 1
    return 1; // 1
  }
  return number * factRecursive(number - 1); // 1
}

// Space Complexity: O(n)

// ------------------------
// 3) Linear Search
// ------------------------

function linearSearch(arr, element, comparatorFn) {
  let index = 0;
  for (const item of arr) { // ad ogni iterazione viene creata una nuova variabile (quindi no permanente)
    if (
      typeof element === 'object' &&
      element !== null &&
      comparatorFn(element, item)
    ) {
      return index;
    }
    if (item === element) {
      return index;
    }
    index++; // anche qua incrementiamo il valore di index che però in memoria occupa sempre "lo stesso spazio", il valore vecchio viene sostituito
  }
}

// Space Complexity: O(1)

// ------------------------
// 4) Binary Search
// ------------------------

function binarySearch(sortedArr, element) { // metto due elementi in memoria
  let startIndex = 0; // metto un nuovo elemento in memoria
  let endIndex = sortedArr.length - 1; // metto .. etc.

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2); // sovrascriviamo il vecchio valore ad ogni iterazione

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

// Space Complexity: O(1)

// ------------------------
// 5) Bubble Sort
// ------------------------

function bubbleSort(arr) {
  const resultArray = [...arr];

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];

      // facciamo solo uno swap degli elementi non ne creiamo di nuovi quindi sempre O(1)
      if (outerEl > innerEl) {
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;

        outerEl = resultArray[outer];
        innerEl = resultArray[inner];
      }
    }
  }

  return resultArray;
}

// Space Complexity: O(1)

// ------------------------
// 6) Quicksort
// ------------------------

function quickSort(arr) {
  const copiedArray = [...arr];

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArray.shift();
  const centerElementsArray = [pivotElement];

  while (copiedArray.length) {
    // Sempre un aggiungere qualcosa permanentemente ma in realtà:
    // Togliamo un elem con shift() e mettiamo un elem con push() quindi come space occupo sempre lo stesso
    // QUESTA ERA UNA TRAPPOLA

    const currentElement = copiedArray.shift(); // togliamo un valore dall'array copiedArray
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement); // aggiungiamo un valore all'array ad ogni iterazione, quindi esso viene salvato permanentemente ed esiste anche fuori dal loop
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }

  const smallerElementsSortedArray = quickSort(smallerElementsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);
  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
}

// Space Complexity: O(n) 
// Anche qui O(n) perché abbiamo nested function call e le chiamate iniziali (con le relative variabili)
// rimangono attive fino alla fine.
// Non è O(n^2) perché per chiamare riga 136 devono essersi con concluse tutte le nested fun call di riga 135 (e anche quindi le varie variabili sarebbero cancellate)

// ------------------------
// 7) Merge Sort
// ------------------------

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }
  return mergedArr;
}

// Space Complexity: O(n)
