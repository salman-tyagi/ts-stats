import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import WinsAnalyzer from './analyzers/WinsAnalyzer';
import ConsoleReport from './reportTargets/ConsoleReport';
import Summary from './Summary';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const analyzer = new WinsAnalyzer('Man United');
const consoleReport = new ConsoleReport();

const summary = new Summary(analyzer, consoleReport);
summary.buildAndBuildReport(matchReader.matches);
