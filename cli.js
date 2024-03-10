import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "input",
        name: "UserName",
        message: "What is your name?",
        validate: (ans) => {
            if (!ans) {
                return "please give your answer";
            }
            return true;
        }
    },
    {
        type: "number",
        name: "UserAge",
        message: "What is your age?",
    },
    { type: "list",
        name: "UserName",
        message: "What is your hobby?",
        choices: ["Study", "Garding", "Gaming", "Learning"],
        default: "Nothing" },
    {
        type: "checkbox",
        name: "UserEmail",
        message: "What is your email?",
        choices: ["mehr123@gmail.com", "abc@gmail.com", "fun@gmail.com"
        ]
    }
]);
console.log(user);
