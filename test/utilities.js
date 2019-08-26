/* eslint-disable no-undef */
const assert = require('assert');
const Util = require('../lib/utilities');

describe('adoptionText', () => {
  describe('instantiation', () => {
    it('get adoption text', () => {
      const util = new Util();
      const text = util.getAdoptionText('Spot', 'Female', 'Persian', 'www.petfinder.com', 'San Diego', 'CA');

      assert(text);
    });
  });
});
