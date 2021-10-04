

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digitString = String(n)
  let array = []
  for (let i = 0; i < digitString.length; i++){
  array.push(digitString.replace(digitString[i], ""))
  }
  
  return Math.max(...array)
  }
