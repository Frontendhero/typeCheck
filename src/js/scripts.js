(function (window) {

  'use strict';

  function typeCheck(){
    var TypeCheck = {};
    var name = "Timmy";
    TypeCheck.greet = function(){
      alert("Hello from the " + name + " library.");
    }
    return TypeCheck;
  }
  //define globally if it doesn't already exist
  if(typeof(TypeCheck) === 'undefined'){
    window.TypeCheck = typeCheck();
  }
  else{
    console.log("TypeCheck already defined.");
  }

})(window);
