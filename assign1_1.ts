const productName: string = "Bluetooth Speaker";
const pricePerUnit: number = 320;
const quantity: number = 4;
const isMember: boolean = true;

const totalPrice: number = pricePerUnit * quantity;

const receiveDiscount: boolean = totalPrice > 1000 || isMember;

const amountToPay: number = receiveDiscount
    ? totalPrice - (totalPrice * 0.10)
    : totalPrice;

console.log("===== Store Receipt =====");
console.log(`Product Name : ${productName}`);
console.log(`Quantity      : ${quantity}`);
console.log(`Total Price   : ${totalPrice} บาท`);
console.log(`Get Discount  : ${receiveDiscount}`);
console.log(`Amount to Pay : ${amountToPay} บาท`);