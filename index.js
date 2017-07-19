module.exports = function erwarCurrency (number) {
  return new Intl.NumberFormat().format(number)
}
