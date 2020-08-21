// 思路
// a > b => + a
// a < b => - a
var romanToInt = function(s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
  let ans = 0
  for (let i = 0; i < s.length; ) {
    console.log(!!map[s.substring(i, i + 2)])
    if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
      ans += map[s.substring(i, i + 2)]
      i += 2
    } else {
      ans += map[s.substring(i, i + 1)]
      i++
    }
  }
  return ans
}

console.log(romanToInt('IIV'))

// 0  ->  map[II]走else  -> 0 + 1
// 1 -> map[IV]走if -> 1 + 4
