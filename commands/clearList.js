const conf = new (require('conf'))()

function clearList() {
    conf.set('todo-list', [])
    conf.set('done-list', [])
    console.log('List cleared!')
}

module.exports = clearList