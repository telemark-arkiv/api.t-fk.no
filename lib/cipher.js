'use strict';

var crypto = require('crypto')
  , password = 'SoylentGreenIsPeople'
  ;

function encrypt(phrase){
  var cipher = crypto.createCipher('aes192', password)
    , encrypted = cipher.update(phrase, 'utf8', 'hex')
    ;

  encrypted += cipher.final('hex');

  return encrypted;
}

module.exports.encrypt = encrypt;