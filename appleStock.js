function getMaxProfit(stockPricesYesterday){

  var minPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  for(var i = 1; i < stockPricesYesterday.length; i++){
    var currentPrice = stockPricesYesterday[i];

    var potentialProfit = currentPrice - minPrice;

    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
var stockPricesYesterday = [10, 8, 6, 5, 4, 1];

getMaxProfit(stockPricesYesterday);
