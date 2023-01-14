const conf = new (require("conf"))();

function remove(tasks) {
	let todoList = conf.get("todo-list");
	if(todoList.length === 0) {
		console.log("No tasks to delete");
		return;
	} else if(tasks > todoList.length) {
		console.log("Task does not exist");
		return;
	}
	if (todoList) {
		todoList.splice(tasks-1, 1);
		console.log(`Deleted task #${tasks}`);
	}
	conf.set("todo-list", todoList);
}

module.exports = remove;
