var bigArrayOfRandomStrings = [];

for (let b = 0; b < 10000; b++) {
  const func = function makeRandomStrings(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  bigArrayOfRandomStrings[b] = func(4);
}

// Testing if I have all my random strings 
// for (let d = 0; d < 10000; d++) {
//   console.log(`Random string ${d} - ${bigArrayOfRandomStrings[d]}`)
// }

var palindromes = bigArrayOfRandomStrings.filter(string => {

  let reversed = string.split("").reverse().join("")
  return string === reversed
})


for (let e = 0; e < palindromes.length; e++) {
  console.log(`Palindrome found number ${e} - ${palindromes[e]}`)
}

console.log(`The number of palindromes found is ${palindromes.length}`)