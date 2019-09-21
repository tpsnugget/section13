var arr = [1, 2, 3, 4]
var areSame = [1, 1, 1, 1]
var areNotSame = [1, 1, 2, 1]
var sameChars = ["a", "a", "a", "a"]
var notSameChars = ["a", "a", "a", "b"]

function printReverse(arr) {
   for (var i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i])
   }
}

function isUniform(e, index, arr) {
   return  e === arr[0]
}

function sumArray(arr) {
   var sum = 0
   for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
   }
   return sum
}

function max(arr) {
   var max = arr[0]
   for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) { max = arr[i] }
   }
   return max
}

printReverse(arr)

console.log(notSameChars.every(isUniform))

console.log(sumArray(arr))

console.log(max(arr))