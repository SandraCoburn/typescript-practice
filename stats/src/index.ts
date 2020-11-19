//import file system from node modules. To stop the error, load type definition file
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/Console.Reports';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

//Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in somehting satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);

//Parse the data
matchReader.load();

//Analyze data
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);
