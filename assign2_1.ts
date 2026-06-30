const name = "Viroon";
const marks = 90;

let result;

if (marks < 50) {
  result = "F";
} else if (marks < 60) {
  result = "D";
} else if (marks < 70) {
  result = "C";
} else if (marks < 80) {
  result = "B";
} else {
  result = "A";
}

console.log(`Student: ${name}`);
console.log(`Marks: ${marks}`);
console.log(`Result Grade: ${result}`);