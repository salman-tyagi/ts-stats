import fs from 'node:fs';
import { MatchResult } from './MatchResult';


export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  readFile(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf-8')
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
