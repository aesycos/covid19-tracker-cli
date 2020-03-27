'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('countryCodeData.json');
let availableCodes = JSON.parse( rawdata );

var myArgs = process.argv.slice(2);
var country = myArgs[0];
var codeLength = country.length;
let countryName;

function findCountryByCode( alpha, value ) {
    var countryName;

    switch( alpha ) {
        case 2 :
            countryName = Object.keys(availableCodes).filter(function(countryName) {
                if ( availableCodes[countryName].iso2 == value ) {
                    return countryName;
                }
            });
            break;
        case 3 :
            countryName = Object.keys(availableCodes).filter(function(countryName) {
                if ( availableCodes[countryName].iso3 == value ) {
                    return countryName;
                }
            });
           break;
        default :
            return "Invalid Country Code";
    }
    return countryName[0];
}

if ( codeLength <= 3 ) {
    countryName = findCountryByCode( codeLength, country );
}

console.log( countryName);
