function counterGame(n) {
  if (n === 1) return 'Richard';
  let numOfMoves = 0;
  while ((Math.log2(n)) % 1 !== 0) {
    numOfMoves++;
    n -= 2 ** Math.floor(Math.log2(n));
  }
  return (numOfMoves + Math.log2(n)) % 2 === 0 ? 'Richard' : 'Louise'
}