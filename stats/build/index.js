"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import file system from node modules. To stop the error, load type definition file
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
//Create an object that satisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in somehting satisfying the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
//Parse the data
matchReader.load();
//Analyze the date by counting how many times there are wins for man United
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
