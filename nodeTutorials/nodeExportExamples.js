// The process object has many different built-in properties, one of which is the env property:
// console.log("process.env.USER: ", process.env.USER)

// old school way to export is just make the function and export it using module.exports
const bubbleSortModule = function (arr) {
  for (let i = arr.length - 1; i >=0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] - arr[j + 1] > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
};

module.exports.bubbleSort = bubbleSort;