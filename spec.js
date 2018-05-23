const myApp = require('./main.js');

var app;

describe ('RomanNumerals', function() {
    app = myApp();
    it('converts numbers to Roman numerals', function(){
        expect(app.init(1)).toBe("I");
        expect(app.init(2)).toBe("II");
        expect(app.init(4)).toBe("IV");
        expect(app.init(5)).toBe("V");
        expect(app.init(9)).toBe("IX");
        expect(app.init(22)).toBe("XXII");
        expect(app.init(30)).toBe("XXX");
        expect(app.init(43)).toBe("XLIII");
        expect(app.init(512)).toBe("DXII");
        expect(app.init(1030)).toBe("MXXX");
        expect(app.init(1500)).toBe("MD");
        expect(app.init(2007)).toBe("MMVII");
    });
});