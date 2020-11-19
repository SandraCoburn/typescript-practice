"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import file system from node modules. To stop the error, load type definition file
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Console_Reports_1 = require("./reportTargets/Console.Reports");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
//Create an object that satisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in somehting satisfying the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
//Parse the data
matchReader.load();
//Analyze data
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new Console_Reports_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
