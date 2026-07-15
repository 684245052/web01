class Major {
    age: number;
    disc: boolean;
    constructor(age: number, disc: boolean) {
        this.age = age;
        this.disc = disc;
    }
    show(): void {
        let price: number = 0;
        if (this.age < 12) {
            price = 60;
        } else if (this.age >= 12 && this.age <= 59) {
            price = 120;
        } else {
            price = 100;
        }
        let discount: number;
        if (this.disc) {
            discount = 10;
        } else {
            discount = 0;
        }
        let netPrice = price - (price * discount / 100);
        console.log(`คุณอายุ ${this.age} ปี`);
        console.log(`ราคาตั๋วปกติ ${price} บาท`);
        console.log(`ได้รับส่วนลด ${discount}%`);
        console.log(`ราคาสุทธิ ${netPrice} บาท`);
    }
}
let person1 = new Major(10, true);
let person2 = new Major(20, false);
let person3 = new Major(65, true);

person1.show();
person2.show();
person3.show();