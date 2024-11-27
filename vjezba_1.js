console.log("Hello world");

a = [1, 2, 3]
b = [4, 5, 6]

const c = [...a, ...b];

console.log(c);
console.log(JSON.stringify(c));


const d = c.filter (n => n !==3);
console.log(d);
console.log(JSON.stringify(d));

const objectID = d.map((n, index) => ({index: index, value: n}));
console.log("Zadatak 3", objectID);

const product = objectID.reduce ((accumulator, current) => accumulator * current.value, 1);
console.log(JSON.stringify(product));

const students = [
    {name:"Marko", grade:3},
    {name:"Luka", grade:4},
    {name:"Ivana", grade:5},
    {name:"Lana", grade:2}
];

const sumaOcjena1 = students.map(students => students.grade).filter(students => students >= 4).reduce((accumulator, students) => accumulator + students, 0);
console.log(sumaOcjena1);

const sumaOcjena2 = students
.map(students => students.grade)
.filter(students => students >= 4)
.reduce((accumulator, students) => accumulator + students, 0);
console.log(sumaOcjena2);

const prices = {
    pizza: 30,
    burger: 20,
    pasta: 25,
    juice: 10,
    fish: 40
}

const {pizza: calzone, pasta, beer = 12, ...other} = prices;
console.log("calzone: ", calzone);
console.log("pasta: ", pasta);
console.log("beer: ", beer);
console.log("other: ", other);

console.log(`Calzone cost ${calzone}kn, pasta costs ${pasta}kn, together is ${calzone + pasta} kn total!`);

