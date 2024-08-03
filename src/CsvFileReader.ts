import fs from 'node:fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  //   filename: string;
  data: string[][] = [];

  //   constructor(filename: string) {
  //     this.filename = filename;
  //   }

  constructor(public filename: string) {}

  readFile(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf-8')
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): any => {
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
