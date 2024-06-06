// const str = 'abcd'
// const newStr = str.split('').reverse().join('')
// console.log(newStr);

// const str = 'yesey'  // 'yesey'
// const newStr = str.split('').reverse().join('')
// console.log(str === newStr);


const str = 'yeseya' 
function isPalindrome(s) {
  const len = s.length
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false
    }
  }
  return true
}
console.log(isPalindrome(str));