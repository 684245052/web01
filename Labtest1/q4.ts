let fitness: { name: string, age: number, disc: boolean }[] = [
    { name: "อนันต์", age: 25, disc: false },
    { name: "เจนจิรา", age: 35, disc: true },
    { name: "ชาคริต", age: 42, disc: true },
    { name: "รุ่งโรจน์", age: 49, disc: false },
    { name: "สามารถ", age: 27, disc: false }
];
function showINFO(tuple: { name: string, age: number, disc: boolean }) {
    let status: string = tuple.disc ? "ยังไม่ชำระเงินค่าสมาชิก" : "ชำระเงินค่าสมาชิกแล้ว";
    console.log(`คุณ ${tuple.name} อายุ ${tuple.age} ปี ${status}`);
}
let person1 = fitness[0];
let person2 = fitness[1];
let person3 = fitness[2];
let person4 = fitness[3];
let person5 = fitness[4];

showINFO(person1);
showINFO(person2);
showINFO(person3);
showINFO(person4);
showINFO(person5);