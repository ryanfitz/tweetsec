
import test from 'ava';
import context from 'aws-lambda-mock-context';
import lambda from '../lib/lambda';

test('lambda handler password1 returns 4 unacceptable', (t) => {
  t.plan(1);

  const ctx = context();
  lambda.handler({password: 'password1'}, ctx);

  return ctx.Promise.then((result) => {
    t.same(result, {strength: 4, status: 'unacceptable'});
  });
});
