const conf = new (require("conf"))();
const chalk = require("chalk");

function report() {
	let todoList = conf.get("todo-list");
	let doneList = conf.get("done-list");
	if (todoList === undefined) {
		todoList = [];
	}
	if (doneList === undefined) {
		doneList = [];
	}
	console.log(chalk.bold.underline.redBright("Pending") + ` : ${todoList.length}`);

	todoList.forEach((task, index) => {
		console.log(
			chalk.blueBright(`${index + 1}. `) +
				`${task.text}` +
				" [" +
				chalk.green(`${task.priority}`) +
				"]"
		);
	});

	console.log(chalk.bold.underline.greenBright("\nCompleted") + ` : ${doneList.length}`);

	doneList.forEach((task, index) => {
		console.log(
			chalk.blueBright(`${index + 1}. `) +
				`${task.text}` +
				" [" +
				chalk.green(`${task.priority}`) +
				"]"
		);
	});
}

module.exports = report;
