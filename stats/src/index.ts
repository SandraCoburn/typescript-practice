//import file system from node modules. To stop the error, load type definition file
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
//Parse the data
const reader = new CsvFileReader('football.csv');
reader.read();

//Analyze the date by counting how many times there are wins for man United

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
