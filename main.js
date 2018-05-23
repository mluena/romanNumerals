
let myApp =  function(){
    let romanNumeral = function (value, number) {
        return { valor: value, numero: number };
    }
    let romanNumerals = [
        romanNumeral(1000, "M"),
        romanNumeral(900, "CM"),
        romanNumeral(500, "D"),
        romanNumeral(400, "CD"),
        romanNumeral(100, "C"),
        romanNumeral(90, "XC"),
        romanNumeral(50, "L"),
        romanNumeral(40, "XL"),
        romanNumeral(10, "X"),
        romanNumeral(9, "IX"),
        romanNumeral(5, "V"),
        romanNumeral(4, "IV"),
        romanNumeral(1, "I")
    ];
    var convertNumbers = function(n){
      let result = '';
      romanNumerals.forEach(function(number) {
          for (; n >= number.valor; n -=number.valor) {
              result += number.numero;
          }
      })
      return result;
    }
    return {
        init: convertNumbers 
        }   
    };
 if (typeof(module) != 'undefined'){
    module.exports = myApp;
}