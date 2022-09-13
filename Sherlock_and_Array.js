function balancedSums(arr) {
  let leftPart = 0;
  let rightPart = arr.reduce((acc, curr) => acc + curr, 0);;
  return arr.some((el, i) => {
    i !== 0 ? leftPart += arr[i - 1] : 0;
    rightPart -= arr[i]
    return leftPart === rightPart
  }) ? 'YES' : 'NO'
}