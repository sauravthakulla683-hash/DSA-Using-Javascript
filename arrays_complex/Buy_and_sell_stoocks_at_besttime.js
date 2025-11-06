let prices = [1, 2, 5, 8, 2, 4];

var maxProfit = function (prices) {
  let maxprofit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    let profit = prices[i] - min;
    maxprofit = Math.max(maxprofit, profit);
  }
  return maxprofit;
};
console.log("Max Profit = ", maxProfit(prices));
