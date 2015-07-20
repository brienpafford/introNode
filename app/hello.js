var fs = require('fs');

module.exports = function(name) {
  hello(name);
};

function hello(name) {
  process.stdout.write('Hello ' + name + '\n');
}
