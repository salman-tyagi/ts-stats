import { Analyzer } from '../Summary';
import MatchData from '../MatchData';
import MatchResult from '../MatchResult';

class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let winCount: number = 0;

    for (const match of matches) {
      if (
        match.at(1) === this.team &&
        match.at(5) === MatchResult.HomeTeamWon
      ) {
        winCount++;
      }

      if (
        match.at(2) === this.team &&
        match.at(5) === MatchResult.AwayTeamWon
      ) {
        winCount++;
      }
    }

    return `Team ${this.team} won ${winCount} matches`;
  }
}

export default WinsAnalyzer;
