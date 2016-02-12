
import test from 'ava';
import charTypes from '../lib/char-types';

test('count returns 1 for alphabet chars', (t) => {
  t.plan(1);

  t.is(charTypes.count('foo'), 1);
});

test('count returns 1 for numeric chars', (t) => {
  t.plan(1);

  t.is(charTypes.count('912'), 1);
});

test('count returns 1 for whitespace chars', (t) => {
  t.plan(1);

  t.is(charTypes.count('\n\n\n    \t    \n'), 1);
});

test('count returns 1 for underscore', (t) => {
  t.plan(1);

  t.is(charTypes.count('_'), 1);
});

test('count returns 1 for other chars', (t) => {
  t.plan(1);

  t.is(charTypes.count('!!!__$$<>;'), 1);
});

test('count returns 0 for null text', (t) => {
  t.plan(1);

  t.is(charTypes.count(null), 0);
});

test('count returns 0 when number is passed in', (t) => {
  t.plan(1);

  t.is(charTypes.count(99), 0);
});

test('count returns 2 for alphanumeric string', (t) => {
  t.plan(1);

  t.is(charTypes.count('foo21bar'), 2);
});

test('count returns 3 for alphanumeric with space string', (t) => {
  t.plan(2);

  t.is(charTypes.count('foo 21 bar'), 3);
  t.is(charTypes.count('goat m4n'), 3);
});

test('count returns 4 for complicated string', (t) => {
  t.plan(1);

  t.is(charTypes.count('s0_0per 5nak3'), 4);
});
