const moment = require('moment-timezone')
const assert = require('assert')
const compare = require('../index')

describe('Compare', function() {
  describe('#match() minutes', function() {
    it('should return true when the cron has match with datetime minutes', function() {
        const date = new Date('2022-02-10 22:30:35');
        assert.equal(compare.match('* 30 * * * *', date), true);
    });
  });

  describe('# not match() minutes', function() {
    it('should return false when the cron has match with datetime minutes', function() {
      const date = new Date('2022-02-10 22:30:35');
      assert.equal(compare.match('* 28 * * * *', date), false);
    });
  });

  describe('# match() hour and minutes', function() {
    it('should return false when the cron has match with datetime hour and minutes', function() {
      const date = new Date('2022-02-10 22:30:35');
      assert.equal(compare.match('* 28 23 * * *', date), false);
    });
  });

  describe('#match_moment() minutes', function() {
    it('should return true when the cron has match_moment with datetime minutes', function() {
      const date = moment('2022-02-10 22:30:35', 'YYYY-MM-DD HH:mm:ss').utc();
      assert.equal(compare.match_moment('* 30 * * * *', date), true);
    });
  });

  describe('# not match_moment() minutes', function() {
    it('should return false when the cron has match_moment with datetime minutes', function() {
        const date = moment('2022-02-10 22:30:35', 'YYYY-MM-DD HH:mm:ss').utc();
        assert.equal(compare.match_moment('* 28 * * * *', date), false);
    });
  });

  describe('# match_moment() hour and minutes', function() {
    it('should return false when the cron has match_moment with datetime hour and minutes', function() {
        const date = moment('2022-02-10 22:30:35', 'YYYY-MM-DD HH:mm:ss').utc();
        assert.equal(compare.match_moment('* 28 23 * * *', date), false);
    });
  });
});