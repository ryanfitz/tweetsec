
import test from 'ava';
import wordReplacer from '../lib/word-replacer';

test('replaces single word with single letter', (t) => {
  t.plan(1);

  t.is(wordReplacer.replace('bat'), 'z');
});

test('replaces two words', (t) => {
  t.plan(1);

  t.is(wordReplacer.replace('banana stand'), 'z z');
});

test('replaces word between numbers', (t) => {
  t.plan(1);

  t.is(wordReplacer.replace('12password34'), '12z34');
});

test('replaces word in complex string', (t) => {
  t.plan(1);

  t.is(wordReplacer.replace('s0_0per 5nak3'), 's0_0z 5zk3');
});

test('return empty string for null text', (t) => {
  t.plan(1);

  t.is(wordReplacer.replace(null), '');
});

test('return empty string when given empty string', (t) => {
  t.plan(1);

  t.is(wordReplacer.replace(''), '');
});
