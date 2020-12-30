module.exports = function arrayMap(arr,fn){
      return arr.reduce(function(mappedArray, currentValue, index, array) {
        mappedArray[index] = fn.call(arr, currentValue, index, array)
        return mappedArray
      }, [])
}
