var generators = require('yeoman-generator'),
    yosay = require('yosay');
    path = require('path');

module.exports = generators.Base.extend({

  answers: {},

  prompting: function () {
    var done = this.async();

    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.arguments[0] || 'foo'
    }, function (answers) {

      this.answers = answers;
      done();

    }.bind(this));
  },

  method1: function () {

    var src = this.sourceRoot(),
        dest= this.destinationRoot(),
        destName= this.answers.name,
        menu = this.dest.readJSON(path.join('exercises', 'menu.json'));

    if (!!menu && menu.indexOf(destName) >= 0) {
      this.log(yosay('My apologies, but that exercise already exists. Please try again with another name'));
      return;
    }

    menu.push(destName);

    this.dest.write(
      path.join('exercises', 'menu.json'),
      JSON.stringify(menu)
    );

    this.directory(
      path.join(src, 'exercise'),
      path.join(dest, 'exercises', destName)
    );
  }
});

