"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import file system from node modules. To stop the error, load type definition file
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
//Create an object that satisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in somehting satisfying the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
//Parse the data
matchReader.load();
//Analyze data
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
// print html report
var summary2 = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);
