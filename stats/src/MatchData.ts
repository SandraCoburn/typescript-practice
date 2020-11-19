import { MatchResult } from './MatchResult';

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
interface DataReader {
  read(): void;
  data: string[][];
}
