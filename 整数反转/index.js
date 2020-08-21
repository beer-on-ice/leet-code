var num = 123

var reverse = function(x) {
  var max = Math.pow(2, 31) - 1
  var min = -Math.pow(2, 31)
  var y = 0
  while (x !== 0) {
    // 第一次  10*0 + 3
    // 第二次  10*3 + 2
    // 第三次  10*32 + 1
    y = 10 * y + (x % 10)
    // 第一次 12
    // 第二次 1
    // 第三次 0
    x = ~~(x / 10)
  }
  if (y > max) return 0
  if (y < min) return 0
  return y
}

console.log(reverse(num))
