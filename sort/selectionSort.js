const { randomArray, assertOrdered } = require('../utils/random')

function findMinIndex(arr, l, r) {
  let min = l
  for (let i = l + 1; i < r; i++)
    if (arr[i] < arr[min]) min = i
  return min
}

function swapArrayElement(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const min = findMinIndex(arr, i, arr.length)
    swapArrayElement(arr, min, i)
  }
}

function selectionSortRev(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let max = i
    for (let j = i - 1; j >= 0; j--)
      if (arr[j] > arr[max]) max = j
    swapArrayElement(arr, max, i)
  }
}

const arr = randomArray()
const arr2 = randomArray()

assertOrdered(
  selectionSort(arr) ?? arr,
  selectionSortRev(arr2) ?? arr2
)
