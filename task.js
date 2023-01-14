const { program } = require("commander");

const add = require("./commands/add");
const list = require("./commands/list");
const remove = require("./commands/remove");
const done = require("./commands/done");
const report = require("./commands/report");

const usage = `Usage :-
$ ./task add 2 hello world    # Add a new item with priority 2 and text "hello world" to the list
$ ./task ls                   # Show incomplete priority list items sorted by priority in ascending order
$ ./task del INDEX            # Delete the incomplete item with the given index
$ ./task done INDEX           # Mark the incomplete item with the given index as complete
$ ./task help                 # Show usage
$ ./task report               # Statistics`;

program
	.version("1.0.0")
	.description("Show help if no command is passed")
	.action(() => {
		console.log(usage);
		return;
	});

program
	.command("help")
	.description("Show usage")
	.action(() => console.log(usage));

program
	.command("add <priority> <task>")
	.description("Add a new task")
	.action((task, priority) => add(task, priority));

program
	.command("ls")
	.description("List all tasks")
	.action(() => list());

program
	.command("del <id>")
	.description("Remove a task")
	.action((id) => remove(id));

program
	.command("done <id>")
	.description("Mark a task as done")
	.action((id) => done(id));

program
	.command("report")
	.description("Report on all tasks")
	.action(() => report());


program.parse(process.argv);
