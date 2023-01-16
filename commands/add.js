const conf = new (require("conf"))();

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

	console.log(`Added task: \"${task}\" with priority ${priority}`);

	conf.set("todo-list", todoList);
}

module.exports = add;
