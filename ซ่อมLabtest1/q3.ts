let dailysales: number[] = [15000, 5500, 4200, 8900, 7300, 9600, 12500];
let total: number = 0;
let gooddays: number = 0;
for (let i = 0; i < dailysales.length; i++) {
    total += dailysales[i];
    gooddays++;
    console.log(`วันที่ ${i+1}, ยอดขายดีมาก = ${dailysales[i]}บาท`);
}
let average : number = total / dailysales.length;
console.log(`ยอดขายแต่ละวันในสัปดานี้ =`, dailysales);
console.log(`จำนวนวันที่ยอดขายดีมาก =`, gooddays),`วัน`;
console.log(`ยอดขายแต่ละวันในสัปดานี้ =`, average.toFixed(),`บาท`);