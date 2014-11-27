/*!
 * typeCheck
 * JavaScript library for type checking
 * https://github.com/Frontendhero/typeCheck
 * @author Raymon Schouwenaar
 * @version 1.0.0
 * Copyright 2014. MIT licensed.
 */
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
