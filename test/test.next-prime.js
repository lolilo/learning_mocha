var assert = require('assert')

nextPrime = require('./../index').nextPrime
hihi = require('./../index').hihi
  // , asyncPrime = require('./../index').asyncPrime;

suite('nextPrime', function() {
  test('nextPrime should return the next prime number', function() {
    assert.equal(11, nextPrime(7));
  });

  test('zero and one are not prime numbers', function() {
    assert.equal(2, nextPrime(0));
    assert.equal(2, nextPrime(1));
  });

    test('zero and one are not prime numbers', function() {
    assert.equal('hello', hihi());
  });


});