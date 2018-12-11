const canadianDollar = 0.91;
function roundTwo(amount) {
  return Math.round(amount * 100) / 100;
}
exports.candianToUS = canadian => roundTwo(canadian * canadianDollar);
exports.USToCandian = us => roundTwo(us / canadianDollar);