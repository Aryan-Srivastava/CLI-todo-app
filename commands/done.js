const conf = new (require("conf"))();

function done(tasks) {
    let todoList = conf.get("todo-list");
    let doneList = conf.get("done-list");
    if (todoList) {
        let task = todoList.splice(tasks-1, 1);
        if (doneList === undefined) {
            doneList = [];
        }
        doneList.push(task[0]);
    }
    console.log("Marked item as done.");
    conf.set("todo-list", todoList);
    conf.set("done-list", doneList);
}

module.exports = done;