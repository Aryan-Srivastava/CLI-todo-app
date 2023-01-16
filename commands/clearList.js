const conf = new (require('conf'))()
const chalk = require('chalk');

function clearList() {
    conf.set('todo-list', [])
    conf.set('done-list', [])
    console.log(chalk.red.bold('List cleared!'))
}

module.exports = clearList