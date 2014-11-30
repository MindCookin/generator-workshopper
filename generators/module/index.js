var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  method2: function () {
    this.log('method 2 in module just ran');
  },
  method1: function () {
    this.log('method 1 in module just ran');
    this.log(this.name);
  },
  prompting: function () {
    var done = this.async();

    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : 'Poty poty' // Default to current folder name
    }, function (answers) {
      this.log(answers.name);
      done();
    }.bind(this));
  }
});

