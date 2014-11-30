#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path');

workshopper({
    name        : '<%= name %>'
  , title       : '<%= description %>'
  , exerciseDir : path.join(__dirname, 'exercises')
  , appDir      : __dirname
});
