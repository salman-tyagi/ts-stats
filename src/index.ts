import fs from 'node:fs';

const matches = fs
  .readFileSync('data/football.csv', 'utf-8')
  .split('\n')
  .map(match => match.split(','));

// const homeTeamWon = 'H';
// const awayTeamWon = 'A';
// const draw = 'D';

enum MatchResult {
  HomeTeamWon = 'H',
  AwayTeamWon = 'A',
  Draw = 'D',
}

let manUnitedWinCount: number = 0;

for (const match of matches) {
  if (match.at(1) === 'Man United' && match.at(5) === MatchResult.HomeTeamWon) {
    manUnitedWinCount++;
  }

  if (match.at(2) === 'Man United' && match.at(5) === MatchResult.AwayTeamWon) {
    manUnitedWinCount++;
  }
}

console.log(manUnitedWinCount);
