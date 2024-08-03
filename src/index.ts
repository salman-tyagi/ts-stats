import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('data/football.csv');
reader.readFile();

enum MatchResult {
  HomeTeamWon = 'H',
  AwayTeamWon = 'A',
  Draw = 'D',
}

let manUnitedWinCount: number = 0;

for (const match of reader.data) {
  if (match.at(1) === 'Man United' && match.at(5) === MatchResult.HomeTeamWon) {
    manUnitedWinCount++;
  }

  if (match.at(2) === 'Man United' && match.at(5) === MatchResult.AwayTeamWon) {
    manUnitedWinCount++;
  }
}

console.log(manUnitedWinCount);
