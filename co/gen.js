function* start() {
  var a = yield 'start';
  console.log(a);
  var b = yield 'running';
  console.log(b);
  var c = yield 'end';
  console.log(c);
  return 'over';
}

var it = start();
console.log(it.next());//Object {value: "start", done: false}
console.log(it.next());//22  object {value: 'running', done: false}
console.log(it.next());//333 Object {value: 'end', done: false}
console.log(it.next());//444 Object {value: "over", done: true}

