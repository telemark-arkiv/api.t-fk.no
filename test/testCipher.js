'use strict';

var assert = require('assert')
  , cipher = require('../lib/cipher')
  , encryptedPhrase = 'beffaf2a0a9bf964edcde22ef990426c4da386de598a87c6888aba34247d47e7fc7a2d1034a589b10a61a19ad955ed68'
  , decryptedPhrase = 'Seksjon for kvalitet og utvikling'
  ;


describe('Cipher', function () {

  describe('encrypt', function(done){
    it('encrypts correct', function(done){
      var encrypted = cipher.encrypt(decryptedPhrase)
        ;

      assert.equal(encrypted, encryptedPhrase);
      done();
    })
  });


});