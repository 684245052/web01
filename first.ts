let fname: string = "Viroon"
let lname: string = "Naheeice";
let course: string = "Object Oriented Programming";
let mark1: number = 80;
let mark2: number = 90;
let total: number = mark1 + mark2;
let pass: boolean = true;

console.log("name: %s %s\n course: %s\n mark: %d", fname, lname, course, total);
console.log("pass: %s", pass);
let courses: string[] = ["Database", "Programming", "Web"];
let marks: number[] = [80, 90, 70];

console.log(marks);
console.log("\n");
console.log(courses[1], marks[1]);
console.log(courses[2], marks[2]);

let fname2: string = "Viroon";
let lname2: string = "Naheeice";
let course2: string = "Object Oriented Programming";
let age: number = 21;
let djob: string = "Programmer";
let total2: number = marks[0] + marks[1] + marks[2];
console.log("name: %s %s\n course: %s\n age: %d \nJob: %s \ntotal: %d", fname2, lname2, course2, age, djob, total2/3);