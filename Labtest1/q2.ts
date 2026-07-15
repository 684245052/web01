let total: number = 0;
for (let day = 1; day <= 30; day++) {
    total += day ;
    console.log(`วันที่ ${day} ยอดเงิน = ${day } บาท`);
}
console.log(`ขอแสดงความยินดี เดือนนี้คุณออมเงินได้ ${total} บาท`);