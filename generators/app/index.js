var generators = require('yeoman-generator'),
    path = require('path'),
    yosay = require('yosay');

module.exports = generators.Base.extend({

  answers: {},

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the grand Workshopper generator!'
    ));

    this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name (no white spaces)',
      default : this.appname,
      validate: function (answer) { return !answer.match(/ /);}
    }, {
      type    : 'input',
      name    : 'description',
      message : 'Please provide a description',
      default : 'This is an awesome ' + this.appname + ' workshop'
    },{
      type    : 'input',
      name    : 'author',
      message : 'Your name'
    }, {
      type    : 'input',
      name    : 'keywords',
      message : 'Provide some keywords, separated by whitespaces',
      default : '',
      filter  : function (answer) { return answer.trim().split(' ');}
    }], function (answers) {
      
      this.answers = answers;
      done();

    }.bind(this));
  },

  writing: function () {

    var src = this.sourceRoot(),
        dest= this.destinationRoot();

    this.template.apply(this, [
      path.join(src, 'package.json'),
      path.join(dest, 'package.json'),
      this.answers
    ]);

    this.template.apply(this, [
      path.join(src, 'app.js'),
      path.join(dest, 'app.js'),
      this.answers
    ]);

    this.directory(
      path.join(src, 'exercises'),
      path.join(dest, 'exercises')
    );
  },

  end: function () {
    this.installDependencies();
  }
});
