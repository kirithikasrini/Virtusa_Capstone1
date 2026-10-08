declare const process: any;

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];
}


const args: string[] = typeof process !== "undefined" && process.argv ? process.argv.slice(2) : [];

let input1: string[] = ["1", "3", "5"];
let input2: string[] = ["2", "4", "6"];

if (args.length >= 2) {
    input1 = args[0].split(",").map(s => s.trim());
    input2 = args[1].split(",").map(s => s.trim());
} else if (args.length === 1) {
    input1 = args[0].split(",").map(s => s.trim());
}

const mergedResult = mergeArrays(input1, input2);

console.log("Input Array 1:", input1);
console.log("Input Array 2:", input2);
console.log("Merged Result Array:", mergedResult);

export {};