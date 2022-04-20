import { Interpreter, RandomParser, RangeParser } from './dist/index.mjs';
const interpreter = new Interpreter(new RandomParser(), new RangeParser());

const result = await interpreter.parse('{random:} attempts to pick the lock!');
console.log(result);
