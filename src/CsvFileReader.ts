import fs from 'node:fs';

export class CsvFileReader {
  filename: string;
  data: string[][] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  readFile(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf-8')
      .split('\n')
      .map(match => match.split(','));
  }
}
