#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    type: "input",
    name: "countWords",
    message: chalk.blue("Enter your sentence to count the word:")
});
const count = answer.countWords.trim().split(" ");
console.log(chalk.yellowBright(count));
console.log(chalk.green(`Your sentence word count is: ${count.length}`));
