import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface Reader {
  readFile(): void;
  data: string[][];
}

export class MatchReader {
  reader: Reader;
  matches: MatchData[] = [];

  constructor(reader: Reader) {
    this.reader = reader;
  }

  load(): void {
    this.reader.readFile();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
