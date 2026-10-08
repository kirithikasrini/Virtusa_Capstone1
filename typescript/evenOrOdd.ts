declare const process: any;

function isEvenOrOdd(num: number): string {
    if (!Number.isInteger(num)) {
        return `${num} is not an integer.`;
    }
    return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;
}

// Accepts dynamic command line argument (e.g. npx tsx evenOrOdd.ts 7)
const args: string[] = typeof process !== "undefined" && process.argv ? process.argv.slice(2) : [];
const inputVal = args.length > 0 ? Number(args[0]) : 7;

if (isNaN(inputVal)) {
    console.log("Invalid input: Please enter a valid number.");
} else {
    console.log(`Checking number (${inputVal}):`, isEvenOrOdd(inputVal));
}

export {};
