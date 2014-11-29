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
      if(this.isString(input)) {return 'string'}
    };
    this.isNumber = function(input) {
      if(typeof input === 'number') {return true;} else {return false};
    };
    this.isString = function(input) {
      if(typeof input === 'string') {return true;} else {return false};
    };
  };

  // Assign our TypeC object to global window object
  if(!window.TypeC) {
    window.TypeC = TypeC;
  }

  return TypeC();

})();
