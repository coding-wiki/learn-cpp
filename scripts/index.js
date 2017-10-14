const nodemon = require('nodemon');
const notifier = require('node-notifier');
const { exec } = require('child_process');

nodemon({
  script: './scripts/_noop.js',
  ext: 'cpp',
  ignore: './build',
}).on('start', function () {
  // process started correctly
}).on('restart', function(filesChanged) {
  // Only clear the console if it's an interactive terminal.
  if (process.stdout.isTTY) {
    process.stdout.write('\u001b[2J');
    process.stdout.write('\u001b[1;1H');
    process.stdout.write('\u001b[3J');
  }

  const basePath = process.cwd();
  const fileName = filesChanged[0].split('/').pop();
  const filePath = filesChanged[0].split(basePath)[1];

  const cmds = [
    'rm -Rf build',
    'mkdir build',
    `g++ ${filesChanged[0]} -o ./build/${fileName}`,
    `./build/${fileName}`
  ].join(' && ');

  exec(cmds, (err, stout, stderr) => {
    if(err) throw err;
    console.log(`COMPILING ${filePath}\n`);
    console.log(stout);
  });

}).on('crash', function () {
  notifier.notify('Faild error');
}).on('exit', function() {
  // process exit correctly with no
  // errors
});
