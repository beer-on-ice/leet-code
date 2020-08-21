/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */

// 此方法 转为字符串
{
  var isPalindrome = function(x) {
    if (x < 0) return false
    var y = x.toString()
    y = Number(
      y
        .split('')
        .reverse()
        .join('')
    )
    return y === x
  }
}

// 不转为字符串
{
  var isPalindrome = function(x) {
    if (x < 0) return false
    let originN = x
    let newN = 0
    while (x > 0) {
      let tmp = x % 10
      newN = newN * 10 + tmp
      x = (x - tmp) / 10
    }
    return originN === newN
  }
  // 123 -> 321
}
