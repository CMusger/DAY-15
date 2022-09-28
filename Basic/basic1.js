const car1 = {
    brand: "Tesla",
    model: "Model S",
    price: 138000,
    color: "White",
    summary: function() {
        return `The ${this.brand} ${this.model} costs ${this.price}€ and comes with the default color ${this.color}<br>`;
    }
}

const car2 = {
    brand: "BMW",
    model: "i4",
    price: 60000,
    color: "grey & blue accents",
    summary: function() {
        return `The ${this.brand} ${this.model} costs ${this.price}€ and comes with the default color ${this.color}<br>`;
    }
}

const car3 = {
    brand: "Porsche",
    model: "Taycan Turbo S",
    price: 194000,
    color: "White",
    summary: function() {
        return `The ${this.brand} ${this.model} costs ${this.price}€ and comes with the default color ${this.color}<br>`;
    }
}

const animal1 = {
    name: "Leopard Seal",
    avgAge: "12 to 15 years",
    diet: "krill,birds,fish and penguins",
    weight: "200 up to 600kg",
    summary: function() {
        return `The ${this.name} has an average lifespan of ${this.avgAge}. Its diet consits of ${this.diet} and it can weight between ${this.weight}<br>`;
    }
}

const animal2 = {
    name: "Interior Alaskan wolf",
    avgAge: "4 to 10 years",
    diet: "moose,caribou,sheep and other animals located in its region",
    weight: "40kg up to 70kg",
    summary: function() {
        return `The ${this.name} has an average lifespan of ${this.avgAge}. Its diet consits of ${this.diet} and it can weight between ${this.weight}<br>`;
    }
}

const animal3 = {
    name: "Snowy Owl ",
    avgAge: "",
    diet: "lemmings, voles and other small prey",
    weight: "1134g up to 2000g",
    summary: function() {
        return `The ${this.name} has an average lifespan of ${this.avgAge}. Its diet consits of ${this.diet} and it can weight between ${this.weight}<br>`;
    }
}

const person1 = {
    name: "John Doe",
    age: 24,
    gender: "Male",
    profession: "a Construction Worker",
    summary: function() {
        return `${this.name}/${this.gender} is ${this.age} years old and working as ${this.profession}<br>`;
    }
}

const person2 = {
    name: "Maria Henings",
    age: 38,
    gender: "Female",
    profession: "a Surgeon",
    summary: function() {
        return `${this.name}/${this.gender} is ${this.age} years old and working as ${this.profession}<br>`;
    }
}

const person3 = {
    name: "Henry Floyd",
    age: 19,
    gender: "Male",
    profession: "an IT Security Consultant",
    summary: function() {
        return `${this.name}/${this.gender} is ${this.age} years old and working as ${this.profession}<br>`;
    }
}

let arr = [car1,car2,car3,animal1,animal2,animal3,person1,person2,person3];

for (let val in arr) {
     document.getElementById("container").innerHTML += arr[val].summary();
}
