#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"

const sleep =() =>{
    return new Promise((res)=>{
        setTimeout(res , 2000);
        })

}


async function welcome(){
    let rainbowTitle = chalkanimation.rainbow('lets start calculation'); //start
    await sleep();
    rainbowTitle.stop();
console.log(`

    _____________________
   |  _________________  |
   | | maira        0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   `);
}

 await welcome();

 async function AskQuestion(){
     const answers =  await inquirer
    .prompt([
/*pass your question here*/
{
     type:"list",
     Name:"operator",
     message:"which operation you want to perform? \n",
     choices:["Addition","subtraction","multiplication","Division"]
},
{
    type:"number",
    Name:"num 1",
    message:"Enter number 1:"
},
{
    type:"number",
    Name:"num 2",
    message:"Enter number 2: "
}
  ]);
if
(answers.operator == "Addition"){
   console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
}
else if 
(answers.operator == "subtraction"){
    console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
}
else if
 (answers.operator == "Multiplication"){
    console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
}
else if
(answers.operator == "Divison"){
    console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
}
};
//AskQuestion();
async function startagain(){
 do{
    await AskQuestion();
    var again = await inquirer
    .prompt({
        type:"input",
        name:"restart",
        message:"do you want to continue? press y or n:",

    })
 }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' ||  again.restart == 'YES')
}

startagain();
