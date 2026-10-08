const readline = require("readline");

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound(sound) {
        console.log(`${this.name} (${this.species}) says: ${sound}`);
    }

    describe() {
        console.log(`Name: ${this.name}, Species: ${this.species}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Canine");
        this.breed = breed;
    }

    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }

    describe() {
        super.describe();
        console.log(`Breed: ${this.breed}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Dog's Name: ", (name) => {
    rl.question("Enter Dog's Breed: ", (breed) => {
        rl.question("Enter Sound (e.g. Woof!): ", (sound) => {
            console.log("\n--- Object Instantiated ---");
            const myDog = new Dog(name.trim() || "Buddy", breed.trim() || "Golden Retriever");
            myDog.describe();
            myDog.makeSound(sound.trim() || "Woof!");
            myDog.fetch();
            rl.close();
        });
    });
});
