let memberfitness: {name : string, age: number, disc: boolean}[]= [
    {name: `อนันต์`, age: 25, disc: false},{name: `เจนจิรา`, age: 25, disc: true},{name: `ชาคริต`, age: 25, disc: true},{name: `รุ่งโรจน์`, age: 25, disc: false},{name: `สามารถ`, age: 25, disc: false}
];
function show(tuple : {name: string, age: number, disc: boolean}) {
    let status: string = tuple.disc
    console.log("ยังไม่ชำระเงินค่าสมาชิก" | "ชำระเงินค่าสมาชิกแล้ว");
    console.log(`คุณ ${tuple.name}อายุ ${tuple.age}ปี ${status}`);
}
let person6 = memberfitness[6];
let person7 = memberfitness[7];
let person8 = memberfitness[8];
let person9 = memberfitness[9];
let person10 = memberfitness[10];
show(person6)
show(person7)
show(person8)
show(person9)
show(person10)