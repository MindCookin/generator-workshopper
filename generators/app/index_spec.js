var helpers = require('yeoman-generator').test
  , assert = require('yeoman-generator').assert
  , path = require('path')
  , utils = require('./index.js').utils;

describe('workshopper', function () {
  describe('creating a new workshopper', function () {

    before(function (done) {
      helpers.run(path.join( __dirname, '../app'))
        .inDir(path.join( __dirname, '../../tmp'))  // Clear the directory and set it as the CWD
        .withPrompt({ 
          name: 'foo',
          description: 'foo workshopper generator',
          author: 'me',
          keywords: 'bar baz'
        })          // Mock the prompt answers
        .on('ready', function (generator) {
          // this is called right before `generator.run()` is called
        })
        .on('end', done);
      });

    it('generate workshopper necessary files', function () {
      assert.file(['app.js', 'package.json', 'exercises/menu.json']);
    });

    it('generate initial exercise content', function () {
      assert.file(['exercises/foo/exercise.js', 'exercises/foo/problem.md', 'exercises/foo/solution/solution.js']);
    });

    it('filters spaces inbetween keywords', function () {
      utils.filterSpaces('foo bar baz');
    });
  });
});
