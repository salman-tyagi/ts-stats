import MatchData from './MatchData';
import WinsAnalyzer from './analyzers/WinsAnalyzer';
import ConsoleReport from './reportTargets/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  printAndBuildReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }

  static printTeamWinAnalysis(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new ConsoleReport());
  }
}

export default Summary;
