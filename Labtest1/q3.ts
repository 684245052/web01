let dailySales: number[] = [15000, 5500, 4200, 8900, 7300, 9600, 12500];
let total: number = 0;
let excellentDays: number = 0;
for (let i = 0; i < dailySales.length; i++) {
    total += dailySales[i];
    if (dailySales[i] >= 10000) {
        excellentDays++;
        console.log(`วันที่ ${i + 1} : ยอดขายดีเยี่ยม = ${dailySales[i]} บาท`);
    }
}
let avg: number = total / dailySales.length;

console.log("--------------------------------");
console.log("ยอดขายแต่ละวันในสัปดาห์นี้ =", dailySales);
console.log("จำนวนวันที่มียอดขายดีเยี่ยม =", excellentDays, "วัน");
console.log("ยอดขายเฉลี่ยในสัปดาห์นี้ =", avg.toFixed(2), "บาท");