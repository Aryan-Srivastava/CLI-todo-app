const conf = new (require("conf"))();

function report() {
	let todoList = conf.get("todo-list");
	let doneList = conf.get("done-list");
	if (todoList === undefined) {
		todoList = [];
	}
	if (doneList === undefined) {
		doneList = [];
	}
	console.log(`Pending : ${todoList.length}`);

	todoList.forEach((task, index) => {
		console.log(`${index + 1}. ${task.text} [${task.priority}]`);
	});

	console.log(`\nCompleted : ${doneList.length}`);

	doneList.forEach((task, index) => {
		console.log(`${index + 1}. ${task.text} [${task.priority}]`);
	});
}

module.exports = report;
