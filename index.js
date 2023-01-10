// CREATION PATTERNS
// 1. CONSTRUCTOR PATTERN
// We use constructors to create new instances of a class
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const civic = new Car(4, "v6", "red");

// suv class
class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const cx5 = new SUV(4, "v8", "black");

// 2. SINGLETON PATTERN
// We use the same instance of a class if it exists
let instance = null;

class House {
  constructor(rooms) {
    if (!instance) {
      this.rooms = rooms;
      instance = this;
    } else {
      return instance;
    }
  }
}

const studio = new House(1);
const mansion = new House(5);

// 3. FACTORY PATTERN
// We use a factory to create different instances of a class
class Developer {
  constructor(name, language) {
    this.name = name;
    this.language = language;
  }
}

class DeveloperFactory {
  createDeveloper(type, name) {
    switch (type) {
      case "frontend":
        return new Developer(name, "JS");
      case "backend":
        return new Developer(name, "PHP");
    }
  }
}

class SalesPerson {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

class SalesPersonFactory {
  createSalesPerson(sales, name) {
    switch (sales) {
      case sales > 10:
        return new SalesPerson(name, "senior");
      default:
        return new SalesPerson(name, "junior");
    }
  }
}

const developerFactory = new DeveloperFactory();
const saleGuyFactory = new SalesPersonFactory();

// 4. ABSTRACT FACTORY
// Certain attributes dermine how we use different factories to
// create different instances of a class
const employeeManufacturer = (department, name) => {
  switch (department) {
    case "sales":
      return saleGuyFactory.createSalesPerson(12, name);
    default:
      return developerFactory.createDeveloper("frontend", name);
  }
};

const seniorSalesGuy = employeeManufacturer("sales", "Bill");
const backendDev = employeeManufacturer("dev", "David");

// STRUCTURAL PATTERNS
// 1. MODULE PATTERN
// import calc from "./calc";
// const aNumber = calc();

// 2. MIXINS
class Shoe {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

let shoesMixin = {
  applyAftersale() {
    console.log(`An aftersale has been applied for a shoe from ${this.brand}`);
  },
};

Object.assign(Shoe.prototype, shoesMixin);

const airforce = new Shoe("nike", "white");
airforce.applyAftersale();

// 3. FACADE
// This is where you hide complex code e.g in another module aside from the 'main' code
// token gen. in token.js
function tokenGenerator() {
    // ...very long complex code
}

// then you use this function inside maybe app.js
// import {tokenGenerator} from "./token.js"
// tokenGenerator();

// 4. FLYWEIGHT
// This pattern helps us avoid creation of new "stuff"
// that we do not need / already have hence
// saving memory
let house = null;

class House {
  constructor(rooms) {
    if (!house) {
      this.rooms = rooms;
      house = this;
    } else {
      return house;
    }
  }
}

// we only create a house only when we don't have one

// 5. DECORATOR
// Here we use decorators to "extend" our classes
function doSthExtra() {
    // ...logic to do sth extra
}

class Thing {
    // we add a mixin by using @ symbol
    // this is possible in typescript but
    // still not approved for use in js
    @doSthExtra();
}

// 6. MODEL-VIEW-CONTROLLER (MVC)
// Popular - You definitely know or heard it
// Model = Data "description"
// View = Visual stuff is here e.g html
// logic = Data manipulation using the Model

// 7. MODEL-VIEW-PRESENTER (MVP)
// Almost similar to the MVC
// The Model still = Data
// The View has the Visuals
// BUT the presenter acts like the middle man
// It holds the logic. The view cannot access
// the model directly

// BEHAVIORAL PATTERNS
// These are patterns that are focused on
// communication between objects
// 1. OBSERVER
// In this pattern we can subscribe to e.g listeners
// to be able to get information on changes etc.

// 2. STATE PATTERN
// Here we hold a state of the application and
// the properties and when it changes we re-render
// the whole applocation
// Used in all popular frontend frameworks

// 3. ITERATOR PATTERN
// e.g For Loop

// 4. STRATEGY PATTERN
// Re using a piece of code to create different
// stuff of the same "type"

// 5. MEMENTO PATTERN
// Data is converted into different forms but does
// not lose it's meaning
// e.g JSON to XML