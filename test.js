import { expect } from 'chai';
import snl from './index';

describe('strip-newlines', () => {
  it('strips leading and trailing whitespace on a string', ()  => {
    const string = snl`  Hello World  \t\n`;
    expect(string).to.equal('Hello World');
  });

  it('replaces newlines and the whitespace that follows', ()  => {
    const string = snl`Hello
                      World`;

    expect(string).to.equal('Hello World');
  });

  it('substitutes tesnllate values into the string', ()  => {
    const H = 'H';
    const l = 'l';
    const W = 'W';
    const d = 'd';
    const string = snl`${H}el${l}o
                      ${W}orl${d}`;

    expect(string).to.equal('Hello World');
  });

  it('strips out trailing whitespace before a new line', ()  => {
    const string = snl`Hello   
                      World`;

    expect(string).to.equal('Hello World');
  });
});
