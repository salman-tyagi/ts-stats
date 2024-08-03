import fs from 'node:fs';

const matches = fs
  .readFileSync('data/football.csv', 'utf-8')
  .split('\n')
  .map(match => match.split(','));

let manUnitedWinCount: number = 0;

for (const match of matches) {
  if (match.at(1) === 'Man United' && match.at(5) === 'H') {
    manUnitedWinCount++;
  }

  if (match.at(2) === 'Man United' && match.at(5) === 'A') {
    manUnitedWinCount++;
  }
}

console.log(manUnitedWinCount);
