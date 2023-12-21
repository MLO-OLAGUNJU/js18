// Objects
//key-value pairs in curly braces
/* const myObj = { myName: "Manny" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

console.log(myObj.myName);
console.log(anotherObj.hobbies[2]);
console.log(anotherObj["alive"]);

console.log(anotherObj.beverage.morning);
console.log(anotherObj.beverage["morning"]);

console.log(anotherObj.action()); */

/* const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vroooooooooooommmmmmmmm!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2; */

/* console.log(truck);
console.log(truck.wheels); //inheritance
console.log(truck.engine()); */
/* const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooooooooshhhhhhhhhh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = () => {
  return "shhhhhhhhhhh...............!";
};
console.log(tesla.engine()); */

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "Manny Ladrich Olagunju and John Bonham",
};

/* //adding new property
band.tambourine = "Mlo_Again MLO";
//===============================================

//deleting existing property or method/function
delete band.vocals;
//================================================

//checking property
console.log(band.hasOwnProperty("vocals")); //false since we've deleted it
//================================================

console.log(Object.keys(band)); // ['vocals', 'guitar', 'bass', 'drums']
console.log(Object.values(band)); // ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'Manny Ladrich Olagunju and John Bonham']

//for in loop
for (const keys in band) {
  console.log(`On ${keys}, It's ${band[keys]}!`);
} */

// destructuring Objects
/* const { guitar, vocals, bass, drums } = band;
console.log(guitar);
console.log(bass) */ sings = ({ vocals }) => {
  return `${vocals} sings!`;
};
console.log(sings(band));
