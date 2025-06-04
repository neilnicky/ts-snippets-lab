class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log("Bark!");
  }
}

const dog = new Dog("Molly");

dog.bark();
