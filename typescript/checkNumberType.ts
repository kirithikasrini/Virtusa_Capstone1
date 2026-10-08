declare const process: any;

function checkNumberType(num: number): string {
    if (typeof num !== "number" || isNaN(num)) {
        return "Invalid input: Not a number";
    }
    if (Number.isInteger(num)) {
        return `${num} is an Integer`;
    } else {
        return `${num} is a Floating-Point number`;
    }
}

// Accepts dynamic command line argument (e.g. npx tsx checkNumberType.ts 3.14)
const args: string[] = typeof process !== "undefined" && process.argv ? process.argv.slice(2) : [];
const inputVal = args.length > 0 ? Number(args[0]) : 3.14159;

console.log(`Checking number (${inputVal}):`, checkNumberType(inputVal));

export {};
