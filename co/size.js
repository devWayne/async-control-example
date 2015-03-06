var fs = require('fs');
function size(file) {
  return function(fn){
    fs.stat(file, function(err, stat){
      if (err) return fn(err);
      fn(null, stat.size);
    });
  }
}

co(function *(){
  var a = yield size('size.js');

    console.log(a);

  var b = yield size('delay.js');
  console.log(b);
  return [a,b];
})(function (err,args){
  console.log("callback===args=======");
  console.log(args);

})


function co(fn) {
  return function(done) {
    var ctx = this;
    var gen = fn.call(ctx);
    var it = null;
    function _next(err, res) {
      it = gen.next(res);
      if (it.done) {
        done.call(ctx, err, it.value);
      } else {
        it.value(_next);
      }
    }
    _next();
  }
}
