// 0-1 knapsack problem
// Greedy approach
const knapsack = (elements, capacity) => {
  const sack = { items: [], value: 0, weight: 0 };
  let remainingCapacity = capacity;
  for (const elem of elements) {
    if (elem.weight <= remainingCapacity) {
      sack.items.push(elem);
      sack.value += elem.value;
      sack.weight += elem.weight;
      remainingCapacity -= elem.weight;
    }
  }
  return sack;
};

const items = [
  { name: "b", value: 6, weight: 8 },
  { name: "a", value: 3, weight: 3 },
  { name: "c", value: 10, weight: 3 },
  // { name: 'd', value: 2, weight: 2 },
];
const maxCap = 8;

const sack = knapsack(items, maxCap);
console.log(sack);
