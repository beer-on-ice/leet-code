var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return ''
  let ans = strs[0]
  for (let i = 0; i < strs.length; i++) {
    let j = 0
    for (; j < ans.length && j < strs[i].length; j++) {
      console.log(ans[j])
      if (ans[j] != strs[i][j]) break
    }
    ans = ans.substr(0, j)
    if (ans === '') return ans
  }
  return ans
}

console.log('result---', longestCommonPrefix(['abcefff', 'abcdf', 'abcdd']))
