function co(GenFunc) {
  return function(cb) {
    var gen = GenFunc()
    next()
    function next() {
      if (gen.next) {
        var ret = gen.next()
        if (ret.done) { // 如果结束就执行cb
          cb && cb()
        } else { // 继续next
          ret.value(next)
        }
      }
    }
  }
}

function delay(time) {
  return function(fn) {
    setTimeout(function() {
      fn()
    }, time)
  }
}
console.time(1)
co(function* () {
  yield delay(200)
  yield delay(1000)
  yield delay(500)
})(function() {
  console.timeEnd(1) // print 1: 1702.000ms 
})

/*
function* Gen(num) {
  console.log(num) //  print 11
  var a = yield 1
  console.log(a) //  print 22
  var b = yield 1
  console.log(b) // print 33
}
var gen=Gen();
var a=gen.next()
var b=gen.next(22)
var c=gen.next(33, 44)
*/
