var helpers = require('yeoman-generator').test
  , assert = require('yeoman-generator').assert
  , fs = require('fs-extra')
  , path = require('path');

describe('workshopper exercise', function () {
  describe('creating a workshopper exercise', function () {

    before(function (done) {

      helpers.run(path.join( __dirname, '../exercise'))
        .inDir(path.join( __dirname, '../../tmp'), function (dir) {
         fs.copySync(path.join(__dirname, '../app/templates/exercises/'), dir + '/exercises');
        })
        .withPrompt({ 
          name: 'bar'
        })          // Mock the prompt answers
        .on('end', done);
      });

    it('generate a custom exercise', function () {
      assert.file(['exercises/bar/exercise.js', 'exercises/bar/problem.md', 'exercises/bar/solution/solution.js']);
    });
  });

  describe('creating an existing workshopper exercise', function () {

    before(function (done) {

      helpers.run(path.join( __dirname, '../exercise'))
        .inDir(path.join( __dirname, '../../tmp'), function (dir) {
         fs.copySync(path.join(__dirname, '../app/templates/exercises/'), dir + '/exercises');
        })
        .withPrompt({ 
          name: 'bar'
        })          // Mock the prompt answers
        .on('end', done);
      });

    it('fails if exercise exists', function () {
      assert.noFile(['exercises/bar/exercise.js', 'exercises/bar/problem.md', 'exercises/bar/solution/solution.js']);
    });
  });
});
