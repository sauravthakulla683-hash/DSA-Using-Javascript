let stocks = [7, 1, 4, 5, 7, 2];
let profit = 0;

for (let i = 0; i < stocks.length - 1; i++) {
  if (stocks[i] < stocks[i + 1]) {
    profit = profit + (stocks[i + 1] - stocks[i]);
  }
}
console.log(profit);
