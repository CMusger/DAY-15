let arr = [];

class Car {
    brand;
    model;
    price;

    constructor(brand,model,price){
        this.brand = brand;
        this.model = model;
        this.price = price;

        arr.push(this);
    }

    summary() {
        return `The ${this.brand} ${this.model} costs ${this.price}`;
    }
}

class Animal {
    name;
    avgAge;
    diet;
    weight;

    constructor(name,avgAge,diet,weight){
        this.name = name;
        this.avgAge = avgAge;
        this.diet = diet;
        this.weight = weight;

        arr.push(this);
    }

    summary() {
        return `The ${this.name} has an average lifespan of ${this.avgAge}. Its diet consits of: ${this.diet} and it weights: ${this.weight}`;
    }
}

class Person {
    name;
    gender;
    age;
    profession;

    constructor(name,gender,age,profession){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.profession = profession;

        arr.push(this);
    }

    summary() {
        return `${this.name}/${this.gender} is ${this.age} years old and works as a ${this.profession}`;
    }
}

let car1 = new Car("Tesla","Model S", 140000);
let car2 = new Car("Porsche","Taycan Turbo S", 190000);
let car3 = new Car("BMW","i4", 60000);

let animal1 = new Animal("Alaskan Wolf",12,"rabbits,moose, and other prey","56kg");
let animal2 = new Animal("Snow Owl",28,"rabbits and other small prey","2000g");
let animal3 = new Animal("Snow Leopard",18,"krill,fish and penguins","300kg");

let person1 = new Person("John Doe","Male",38,"Construction Worker");
let person2 = new Person("John Doe","Male",38,"Construction Worker");
let person3 = new Person("John Doe","Male",38,"Construction Worker");


for (let val of arr) {
    document.getElementById("container").innerHTML += `${val.summary()}<br>`;
}