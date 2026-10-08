const readline = require("readline");

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter minimum value: ", (minInput) => {
    rl.question("Enter maximum value: ", (maxInput) => {
        const min = Number(minInput.trim());
        const max = Number(maxInput.trim());

        if (isNaN(min) || isNaN(max)) {
            console.log("Invalid input: Please enter valid numeric bounds.");
        } else if (min > max) {
            console.log("Error: Minimum value cannot be greater than Maximum value.");
        } else {
            const randomNum = getRandomInt(min, max);
            console.log(`Random Integer between ${min} and ${max}: ${randomNum}`);
        }
        rl.close();
    });
});
