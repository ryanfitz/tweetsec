
import test from 'ava';
import tweetsec from '../lib/index';

test('password1 returns 4 unacceptable', (t) => {
  t.plan(1);

  t.same(tweetsec.calculate('password1'), {strength: 4, status: 'unacceptable'});
});

test('goat m4n returns 15 weak', (t) => {
  t.plan(1);

  t.same(tweetsec.calculate('goat m4n'), {strength: 15, status: 'weak'});
});

test('s0_0per 5nak3 returns 40 weak', (t) => {
  t.plan(1);

  // strength is 40 because the dictionary im using includes the word na as a valid word
  t.same(tweetsec.calculate('s0_0per 5nak3'), {strength: 40, status: 'weak'});
});

test('n00bsb00bs 456 returns 81 strong', (t) => {
  t.plan(1);

  t.same(tweetsec.calculate('n00bsb00bs 456 \n!'), {strength: 68, status: 'strong'});
});
