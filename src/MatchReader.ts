import MatchResult from './MatchResult';
import MatchData from './MatchData';

import dateStringToDate from './utils/dateStringToDate';

interface Reader {
  readFile(): void;
  data: string[][];
}

class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: Reader) {}

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

export default MatchReader;
