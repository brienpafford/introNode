var fs = require('fs');

module.exports= function () {
  help();
  process.exit(1);
};

function help() {
    var options = {encoding: 'utf8'};
    var message = fs.readFileSync('./app/helpmessage.txt', options);
    process.stdout.write(message);
}


