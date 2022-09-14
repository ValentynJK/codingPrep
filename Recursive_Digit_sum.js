function superDigit(n, k) {
  if (n < 10) return n

  let returnNumber = n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0) * k;
  let arrayN = returnNumber.toString().split('')

  while (returnNumber > 9) {
    returnNumber = arrayN.reduce((acc, curr) => acc + parseInt(curr), 0);
    arrayN = returnNumber.toString().split('')
  }
  return returnNumber;
}

