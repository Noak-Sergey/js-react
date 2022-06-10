'use strict';

const log = function( a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage'); //basic rest [ 'operator', 'usage' ] 

//значения по умолчанию
function calcOrDouble(num, basis = 2) {
    console.log( num * basis);
}
calcOrDouble(3); // 6

const urlObj = {
    protocol: 'https',
    domain: 'mysite.com',
    showCurrentURL: function() {
        const extractCurrDomain = () => {
            return this.domain;
        }
        const extractCurrProtocol = () => {
            return this.protocol;
        }
 
        console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
    }
}
 
urlObj.showCurrentURL();