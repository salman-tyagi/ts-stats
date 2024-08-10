import fs from 'node:fs';

class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  readFile(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf-8')
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}

export default CsvFileReader;
