function gridChallenge(grid) {
  const sortedGrid = grid.reduce((acc, curr) => { // sorting the grid out
    return [...acc, curr.split('').sort()]
  }, []);
  // console.log(sortedGrid)
  let transposedGrid = []; // init transposed grid to check if the columns are sorted
  for (let i = 0; i < grid[0].length; i++) { // transposing
    transposedGrid.push([])
    for (let b = 0; b < grid.length; b++) {
      transposedGrid[i].push(sortedGrid[b][i])
    }
  }
  // console.log(transposedGrid)
  return transposedGrid.every(el => el.join('') === el.sort().join('')) ? 'YES' : 'NO'
}
const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
const grid2 = ['mpxz', 'abcd', 'wlmf']


// console.log(gridChallenge(grid))
console.log(gridChallenge(grid2))

const arr = ['a', 'c', 'b'];
arr.sort();

console.log(arr)