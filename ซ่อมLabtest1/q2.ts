let money: number = 0 ;
for (let day =1 ; day <= 30; day++ ) { money += day ;
    console.log(`(วันนี้วันที่) ${day} (ยอดเงิน = ${day} บาท)`) ;
}
console.log(`ขอแสดงความยินดีด้วยเดือนนี้คุณออมเงินได้ ${money}บาท`);