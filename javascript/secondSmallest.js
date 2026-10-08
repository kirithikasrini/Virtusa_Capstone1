const readline = require("readline");

function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (val < smallest) {
            secondSmallest = smallest;
            smallest = val;
        } else if (val > smallest && val < secondSmallest) {
            secondSmallest = val;
        }
    }

    return secondSmallest === Infinity ? null : secondSmallest;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array numbers (space-separated): ", (input) => {
    const arr = input.trim().split(/\s+/).map(Number).filter(n => !isNaN(n));
    console.log("Input Array:", arr);
    const result = findSecondSmallest(arr);
    if (result === null) {
        console.log("Second Smallest Element: None (Array must contain at least 2 distinct numbers)");
    } else {
        console.log("Second Smallest Element:", result);
    }
    rl.close();
});
