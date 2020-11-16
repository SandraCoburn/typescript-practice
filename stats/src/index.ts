//import file system from node modules. To stop the error, load type definition file
import fs from 'fs';
//Parse the data
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });
//Analyze the date by counting how many times there are wins for man United
let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
