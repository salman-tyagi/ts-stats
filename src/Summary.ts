import MatchData from './MatchData';

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface OutputTarget {
  print(report: string): void;
}

class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
