import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import WinsAnalyzer from './analyzers/WinsAnalyzer';
import ConsoleReport from './reportTargets/ConsoleReport';
import Summary from './Summary';
import HtmlReport from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const analyzer = new WinsAnalyzer('Crystal Palace');
const consoleReport = new ConsoleReport();
const htmlReport = new HtmlReport();

// const summary = new Summary(analyzer, consoleReport);
const summary = new Summary(analyzer, htmlReport);
summary.buildAndBuildReport(matchReader.matches);
