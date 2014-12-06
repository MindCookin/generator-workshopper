var helpers = require('yeoman-generator').test
  , assert = require('yeoman-generator').assert
  , path = require('path');

describe('workshopper exercise', function () {
  describe('creating a workshopper exercise', function () {

    before(function (done) {
      helpers.run(path.join( __dirname, '../exercise'))
        .inDir(path.join( __dirname, '../../tmp'))  // Clear the directory and set it as the CWD
        .withPrompt({ 
          name: 'bar'
        })          // Mock the prompt answers
        .on('ready', function (generator) {
          
          // this is called right before `generator.run()` is called
        })
        .on('end', done);
      });

    it('generate a custom exercise', function () {
      // assert the file exist
      // assert the file uses AMD definition
    });

    it('fails if exercise exists');
  });
});
