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

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
// const availableCoins = [8, 6, 5, 1]; // targetAmount = 11 non funziona il greedy
const targetAmount = 129; // 66

const change = computeChange(availableCoins, targetAmount);
console.log(change);

// Time Complexity (Greedy Solution): O(n)
