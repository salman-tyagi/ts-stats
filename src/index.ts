import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import MatchResult from './MatchResult';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
