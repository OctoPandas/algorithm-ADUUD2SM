function randomInt(lower, uppper) {
  return Math.random() * (uppper - lower) | 0 + lower
}

function randomArray(length = 2000) {
  const arr = new Array(length)
  for (let i = 0; i < arr.length; i++)
    arr[i] = randomInt(1000, 10000)
  return arr
}

function assertOrdered(...arrays) {
  arrays.forEach(arr => {
    for (let i = 1; i < arr.length; i++)
      if (arr[i - 1] > arr[i])
        throw new Error(`not ordered`)
  })
}

module.exports = {
  randomInt, randomArray, assertOrdered
}
