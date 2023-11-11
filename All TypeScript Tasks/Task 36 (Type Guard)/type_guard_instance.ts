class Animal {
    constructor(public species: string) { }
}
class Dog extends Animal {
    constructor(public name: string, species: string) {
        super(species)
        this.name = name;
    }
    makeBark() {
        console.log(`The ${this.name} is an ${this.species} which is barking`)
    }
}
class Cat extends Animal {
    constructor(public name: string, species: string) {
        super(species)
        this.name = name;
    }
    makeMeaow() {
        console.log(`The ${this.name} is an ${this.species} which is meaowing`)
    }
}
const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeaow();
    }
}
const catInfo = new Cat('Kitty', 'Cat');
const dogInfo = new Dog('Puppy', 'Dog');

getAnimal(dogInfo);
getAnimal(catInfo);
