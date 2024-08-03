import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('data/football.csv');
reader.readFile();

console.log(reader.data[0][0]);

let manUnitedWinCount: number = 0;

for (const match of reader.data) {
  if (match.at(1) === 'Man United' && match.at(5) === MatchResult.HomeTeamWon) {
    manUnitedWinCount++;
  }

  if (match.at(2) === 'Man United' && match.at(5) === MatchResult.AwayTeamWon) {
    manUnitedWinCount++;
  }
}

console.log(`Man United won ${manUnitedWinCount} matches`);
