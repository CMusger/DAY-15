// Store created objects from classes in Array
let arr = [];

// Store container to add items via .innerHTML
let myContainer = document.getElementById("container");

// *********************************************
// Create Classes for: Cars - Animals - Persons
// *********************************************

// Class Car
class Car {
    brand;
    model;
    price;
    speed;
    color;
    consumption;
    img;

    constructor(brand,model,price,speed,color,consumption,img) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.speed = speed;
        this.color = color;
        this.consumption = consumption;
        this.img = img;

        arr.push(this);
    }

    summary() {
        return `
        <div class="card m-2 text-center" style="width: 20rem">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.brand} ${this.model}</h5>
                <ul class="list-group text-start">
                    <li class="list-group-item">Brand: ${this.brand}</li>
                    <li class="list-group-item">Model: ${this.model}</li>
                    <li class="list-group-item">Price: ${this.price}€</li>
                    <li class="list-group-item">Max-Speed: ${this.speed}</li>
                    <li class="list-group-item">Color: ${this.color}</li>
                    <li class="list-group-item">Consumption: ${this.consumption}</li>
                </ul>
            </div>
        </div>
        `
    }
}

// Car Subclass
class Motorbike extends Car {
    wheels;

    constructor(brand,model,price,speed,color,consumption,img,wheels){
        super(brand,model,price,speed,color,consumption,img);
        this.wheels = wheels;
    }
}

// Class Animal
class Animal {
    name;
    height;
    weight;
    avgAge;
    diet;
    location;
    img;

    constructor(name,height,weight,avgAge,diet,location,img) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.avgAge = avgAge;
        this.diet = diet;
        this.location = location;
        this.img = img;

        arr.push(this);
    }

    summary() {
        return `
        <div class="card m-2 text-center" style="width: 20rem">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <ul class="list-group text-start">
                    <li class="list-group-item">Height: ${this.height}</li>
                    <li class="list-group-item">Weight: ${this.weight}</li>
                    <li class="list-group-item">Avg. Age: ${this.avgAge}</li>
                    <li class="list-group-item">Diet: ${this.diet}</li>
                    <li class="list-group-item">Location: ${this.location}</li>
                </ul>
            </div>
        </div>
        `
    }
}

// Animal Subclass
class Fish extends Animal {
    habitat;

    constructor(name,height,weight,avgAge,diet,location,img,habitat) {
        super(name,height,weight,avgAge,diet,location,img,location);
        this.habitat = habitat;
    }
}

// Class Person
class Person {
    firstName;
    lastName;
    gender;
    age;
    county;
    partner;
    childrean;
    img;

    constructor(firstName,lastName,gender,age,country,status,childrean,img) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.county = country;
        this.status = status;
        this.childrean = childrean;
        this.img = img;

        arr.push(this);
    }

    summary() {
        return `
        <div class="card m-2" style="width: 20rem">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-start">${this.firstName} ${this.lastName}/${this.gender}</h5>
                <ul class="list-group">
                    <li class="list-group-item">First Name: ${this.firstName}</li>
                    <li class="list-group-item">Last Name: ${this.lastName}</li>
                    <li class="list-group-item">Age: ${this.age}</li>
                    <li class="list-group-item">Country: ${this.county}</li>
                    <li class="list-group-item">Status: ${this.status}</li>
                    <li class="list-group-item">Childrean: ${this.childrean}</li>
                </ul>
            </div>
        </div>
        `
    }
}

// Person Subclass
class Profession extends Person {
    profession;

    constructor(firstName,lastName,gender,age,country,partner,childrean,img,profession) {
        super(firstName,lastName,gender,age,country,partner,childrean,img);
        this.profession = profession;
    }
}


// Creating via Parent Class
let car1 = new Car("Tesla","Model S", 140000, "200 km/h","White","18.5kWh/100km","https://cdn.shopify.com/s/files/1/0043/8471/8938/products/TeslaS_Q222_Site_Hero_1.jpg?v=1655486698");
let car2 = new Car("Porsche","Taycan Turbo S",190000,"260 km/h","White & Black", "24,3kWh/100km","https://cdn.motor1.com/images/mgl/BoN14/s1/2020-porsche-taycan.webp" )
let car3 = new Car("BMW","i4",60000,"190 km/h","White", "17,3kWh/100km","https://cdn.motor1.com/images/mgl/rMg6r/s1/bmw-i4-2021.jpg" )

let animal1 = new Animal("Leopard Seal","100cm","~300kg","25","krill,fish and penguins","Antarctica","https://a-z-animals.com/media/2021/12/leopard-seal-yawning-picture-id186587627.jpg");
let animal2 = new Animal("Snowy Owl","52cm-71cm","1600g - 2950g","10","emmings, Arctic hares, mice, ducks and seabirds","Arctic Tundra","https://www.allaboutbirds.org/guide/assets/photo/297366501-480px.jpg");
let animal3 = new Animal("Northwestern Wolf","~200cm","47.6kg - 61.2kg","13","hoofed mammals and other rodents","North America","https://upload.wikimedia.org/wikipedia/commons/f/f6/Canis_lupus_occidentalis.jpg");

let person1 = new Person("John","Doe","Male","31","France","Single","None","https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.jpg");
let person2 = new Person("John","Doe","Male","31","France","Single","None","https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.jpg");
let person3 = new Person("John","Doe","Male","31","France","Single","None","https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.jpg");

// Creating via Child Class
let bike = new Motorbike("Yamaha","YZF-R15","5000€","207 km/h","Blue","dont know","https://imgcdn.zigwheels.ph/large/gallery/exterior/86/1609/yamaha-yzf-r15-slant-front-view-full-image-380761.jpg","2");
let fish = new Fish("Clown Fish","...","...","...","...","...","https://www.theanimalfacts.com/wp-content/uploads/brizy/imgs/Ocellaris-Clownfish-3-759x398x0x0x759x398x1645847933.jpg","...");
let profession = new Profession("John","Doe","Male","99","Mexico","Married","4","https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.jpg","Pension")

// Store Navbar Items
let cars = document.getElementById("cars");
let animals = document.getElementById("animals");
let persons = document.getElementById("persons");


// Adding Event-Listener for Navbar
cars.addEventListener("click",() => {
    myContainer.innerHTML = car1.summary() + car2.summary() + car3.summary() + bike.summary();
})

animals.addEventListener("click",() => {
    myContainer.innerHTML = animal1.summary() + animal2.summary() + animal3.summary() +fish.summary();
})

persons.addEventListener("click",() => {
    myContainer.innerHTML = person1.summary() + person2.summary() + person3.summary() + profession.summary();
})