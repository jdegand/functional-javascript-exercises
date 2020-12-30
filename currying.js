function curryN(fn, n) {
  n = n || fn.length;

   function curryX(number){
    if(n <= 1) return fn(number);
    return curryN(fn.bind(this, number), n - 1)
  }
  return curryX
}

module.exports = curryN
