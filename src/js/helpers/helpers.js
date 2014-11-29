(function() {
    var typeC = new TypeC();
    var number = 5684;

    if(!typeC) {
        console.log('typeC is undefined');
    }
    console.log('typeC.isNumber(number): '+typeC.isNumber(number));
    console.log('typeC.is(number): '+typeC.is(number));

    console.log('typeC.isString(number): '+typeC.isString(number));
    console.log('typeC.is(number): '+typeC.is(number));
})();