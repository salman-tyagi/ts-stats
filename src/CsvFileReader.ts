import fs from 'node:fs';

enum MatchResult {
  HomeTeamWon = 'H',
  AwayTeamWon = 'A',
  Draw = 'D',
}

export class CsvFileReader {
  filename: string;
  data: string[][];

  constructor(filename: string) {
    this.filename = filename;
    this.data = fs
      .readFileSync(this.filename, 'utf-8')
      .split('\n')
      .map(match => match.split(','));
  }

  result(): void {
    let manUnitedWinCount: number = 0;

    for (const match of this.data) {
      if (
        match.at(1) === 'Man United' &&
        match.at(5) === MatchResult.HomeTeamWon
      ) {
        manUnitedWinCount++;
      }

      if (
        match.at(2) === 'Man United' &&
        match.at(5) === MatchResult.AwayTeamWon
      ) {
        manUnitedWinCount++;
      }
    }

    console.log(manUnitedWinCount);
  }
}
