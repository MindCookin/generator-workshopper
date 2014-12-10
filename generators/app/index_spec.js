var helpers = require('yeoman-generator').test
  , assert = require('yeoman-generator').assert
  , path = require('path');

describe('workshopper', function () {
  describe('creating a new workshopper', function () {

    before(function (done) {
      helpers.run(path.join( __dirname, '../app'))
        .inDir(path.join( __dirname, '../../tmp'))  // Clear the directory and set it as the CWD
        .withPrompt({ 
          name: 'foo',
          description: 'foo workshopper generator',
          author: 'me',
          keyword: 'bar baz'
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

    it('default package.json contents are ok', function () {
      
    });
    it('generate custom package.json content');
    it('validate entries');
  });
});
