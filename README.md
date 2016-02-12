
# TweetSec

[![Build Status](https://secure.travis-ci.org/ryanfitz/tweetsec.svg)](http://travis-ci.org/ryanfitz/tweetsec)
[![Coverage Status](https://coveralls.io/repos/github/ryanfitz/tweetsec/badge.svg?branch=master)](https://coveralls.io/github/ryanfitz/tweetsec?branch=master)

Lead Maintainer: [Ryan Fitzgerald](https://github.com/ryanfitz)

## Api Examples

These http api is hosted using AWS [api gateway](https://aws.amazon.com/api-gateway/) and AWS [lambda](https://aws.amazon.com/lambda/)

* [password1](https://9u8x5fm1m7.execute-api.us-east-1.amazonaws.com/dev?p=password1)
* [n00bs81!!](https://9u8x5fm1m7.execute-api.us-east-1.amazonaws.com/dev?p=n00bs81!!)
* [goat m4n](https://9u8x5fm1m7.execute-api.us-east-1.amazonaws.com/dev?p=goat m4n)
* [s0_0per 5nck3](https://9u8x5fm1m7.execute-api.us-east-1.amazonaws.com/dev?p=s0_0per 5nck3)

AWS lambda has cold start issues so the first time invoking this api will have significant latency.

## Tests

Only node version 5 is supported and tested against.

```
  $ make test
```

## Notes

Dictionary used for lookup is [word-list](https://github.com/sindresorhus/word-list).
The dictionary includes `na` as a word so the example password of `s0_0per 5nak3` has a strength of 40 instead of 44.

The lambda.js and terraform files can largely be ignored, these are used for deploying to AWS and contain no business logic.