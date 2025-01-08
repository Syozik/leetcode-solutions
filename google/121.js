const maxProfit = function (prices) {
  let profit = 0;
  let buyDate = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[buyDate]) {
      buyDate = i;
    }

    if (prices[i] - prices[buyDate] > profit) {
      profit = prices[i] - prices[buyDate];
    }
  }

  return profit;
};

