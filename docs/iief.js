var a = 10;

var iife = (function(data) {
  data = 20;
  console.log(data);
})(a);

console.log(a);