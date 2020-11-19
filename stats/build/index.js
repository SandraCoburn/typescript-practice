"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import file system from node modules. To stop the error, load type definition file
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
//Parse the data
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var dateOfFirstMatch = reader.data[0][0];
console.log({ dateOfFirstMatch: dateOfFirstMatch });
//Analyze the date by counting how many times there are wins for man United
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
