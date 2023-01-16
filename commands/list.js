const conf = new (require('conf'))()

function list() {
    const todoList = conf.get('todo-list')

    if (todoList.length === 0) {
        console.log('No tasks to do!')
        return
    } else {
        todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task.text} [${task.priority}]`)
        })
    }
}

module.exports = list;