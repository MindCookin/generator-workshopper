var generators = require('yeoman-generator'),
    yosay = require('yosay'),
    path = require('path'),
    File = require('vinyl'),
    store = require('mem-fs').create(),
    editor = require('mem-fs-editor');

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

  generate: function () {

    var src = this.sourceRoot(),
        dest= this.destinationRoot(),
        destName= this.answers.name,
        fs = editor.create(store),
        menu = fs.readJSON(path.join('exercises', 'menu.json')),
        message = function (){this.log('updated menu.json');}.bind(this);

    if (!!menu && menu.indexOf(destName) >= 0) {
      this.log(yosay('My apologies, but that exercise already exists. Please try again with another name'));
      return;
    }

    menu.push(destName);
    
    fs.write(path.join('exercises', 'menu.json'), JSON.stringify(menu));
    fs.commit(message);

    this.directory(
      path.join(src, 'exercise'),
      path.join(dest, 'exercises', destName)
    );
  }
});

