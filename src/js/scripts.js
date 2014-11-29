(function () {
  'use strict';
  // TypeC returns new Library object that hold our selector. Ex: TypeC('.wrapper')
  var TypeC = function () {
    return new Library();
  };

  var Library = function () {
    this.is = function(input) {
    //  check what the type is
      if(this.isNumber(input)) {return 'number'}
    };
    this.isNumber = function(input) {
      if(typeof input === 'number') {return true;}
    };
  };

  // Assign our TypeC object to global window object.
  if(!window.TypeC) {
    window.TypeC = TypeC;
  }

  return TypeC();

})();

var typeC = new TypeC();
var number = 34222;

console.log(typeC.isNumber(number));
console.log(typeC.is(number));
