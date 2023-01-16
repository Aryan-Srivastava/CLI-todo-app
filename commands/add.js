const conf = new (require("conf"))();
const chalk = require("chalk");

function add(priority, task) {
	let todoList = conf.get("todo-list");

	if (todoList === undefined) {
		todoList = [];
	}

	todoList.push({
		text: task,
		done: false,
		priority: priority,
	});

	todoList.sort((a, b) => {
		return a.priority - b.priority;
	});

	console.log(
		"Added task: " +
			chalk.underline.bold.magentaBright(`${task}`) +
			" with priority " +
			chalk.blue.bold(`${priority}`)
	);

	conf.set("todo-list", todoList);
}

module.exports = add;
