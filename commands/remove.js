const conf = new (require("conf"))();
const chalk = require("chalk");

function remove(tasks) {
	const error = chalk.red;
	let todoList = conf.get("todo-list");
	if(todoList.length === 0) {
		console.log(error.bold("Error: ") + error("List is empty. Nothing to delete"));
		return;
	} else if(tasks > todoList.length) {
		console.log(error.bold("Error: ") + error("Task does not exist. Please enter a valid task number"));
		return;
	}
	if (todoList) {
		todoList.splice(tasks-1, 1);
		console.log(error(`Deleted task #${tasks}`));
	}
	conf.set("todo-list", todoList);
}

module.exports = remove;
