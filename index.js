#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        answer: "enter your sentence to count the word",
    }
]);
const word = answer.Sentence.trim().split(" ");
console.log("word count is :", word.length);
