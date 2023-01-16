const conf = new (require("conf"))();
const chalk = require("chalk");

function list() {
	const todoList = conf.get("todo-list");

	console.log("               " + chalk.bold.underline.cyanBright("TODO LIST\n"));
	if (todoList.length === 0) {
		console.log("            " + chalk.bold("No tasks to do ") + chalk.bold.red("!"));
		return;
	} else {
		todoList.forEach((task, index) => {
			console.log(
				chalk.blueBright(`${index + 1}. `) +
					`${task.text}` +
					" [" +
					chalk.green(`${task.priority}`) +
					"]"
			);
		});
	}
}

module.exports = list;
