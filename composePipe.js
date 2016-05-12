var compose = function(){
  var args = Array.prototype.slice.call(arguments , 0);

  return function(val){
   return args.reduceRight(function(curr, func){
     return func(curr);
   }, val)
  }
};

var pipe = function(){
  var args = Array.prototype.slice.call(arguments , 0);

  return function(val){
   return args.reduce(function(curr, func){
     return func(curr);
   }, val)
  }
};
