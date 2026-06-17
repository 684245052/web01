let money : number = 50000;
let tax : number = 0.07;

let totals : number = money * tax;
let net : number = money - totals;
console.log("Income: %d", money);
console.log("Tax rate: 7%");
console.log("Total tax: %d", totals);
console.log("Net income: %d", net);