{
  var nums = [2, 7, 8, 9]
  var target = 9
  var sumTwo = function(nums, target) {
    var tmp = {}
    for (var i = 0; i < nums.length; i++) {
      var diff = target - nums[i]
      if (tmp[diff] >= 0) {
        return [tmp[diff], i]
      }
      tmp[nums[i]] = i
    }
  }

  console.log(sumTwo(nums, target))
}

{
  // 思路 ；当前索引下值为对象key,索引值为对象值
  var sumt = function(nums, target) {
    var tmp = {}
    for (var i = 0; i < nums.length; i++) {
      var diff = target - nums[i]
      if (tmp[diff] >= 0) {
        return [tmp[diff], i]
      }
      tmp[nums[i]] = i
    }
  }
}
