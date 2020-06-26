function computeChange(coins, amount) {
  const transformedCoins = {};
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount -= coin * count;
  }

  return calculatedChange;
}

function computeChangeBruteForce(coins, amount) {
  const results = [];
  for (let i = 0; i < coins.length; i++) {
    results.push(computeChange(coins.slice(i), amount)); // O(n)
  }

  let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
  let finalResult;
  for (const result of results) {
    if (result.numberOfCoins < smallestAmountOfCoins) {
      smallestAmountOfCoins = result.numberOfCoins;
      finalResult = result;
    }
  }
  return finalResult;
}

const availableCoins = [8, 6, 5, 1];
const targetAmount = 11;

const change = computeChangeBruteForce(availableCoins, targetAmount);
console.log(change);

// Time Complexity (Greedy Solution): O(n)
// Time Complexity (Brute Force Solution): O(n*n) + O(n) => O(n^2)
