import MatchReader from './MatchReader';
import Summary from './Summary';

const matchReader = MatchReader.fromCSV('data/football.csv');
matchReader.load();

const summary = Summary.printTeamWinAnalysis('Crystal Palace');
summary.printAndBuildReport(matchReader.matches);
