import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import MatchResult from './MatchResult';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWinCount: number = 0;

for (const match of matchReader.matches) {
  if (match.at(1) === 'Man United' && match.at(5) === MatchResult.HomeTeamWon) {
    manUnitedWinCount++;
  }

  if (match.at(2) === 'Man United' && match.at(5) === MatchResult.AwayTeamWon) {
    manUnitedWinCount++;
  }
}

console.log(`Man United won ${manUnitedWinCount} matches`);
