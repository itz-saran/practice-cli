#! /usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
	.argument("<message>", "String to log out")
	.option("-c, --capitalize", "Capitalize the message")
	.action((message: string, opts: { capitalize: boolean }) => {
		console.log(
			opts.capitalize ? `HELLO ${message.toUpperCase()}` : `hello ${message}`
		);
	})
	.description("Displays hello world");

program.parse(process.argv);
