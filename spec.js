const myApp = require('./main.js');

var app;

describe ('RomanNumerals', function() {
    app = myApp();
    it('converts numbers to Roman numerals', function(){
        expect(app.init(1)).toBe("I");
    });
});