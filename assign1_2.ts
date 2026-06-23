const bookTitle: string = "Learning JavaScript";
const isbn: string = "9781234567890";
const price: number = 420;
const isAvailable: boolean = true;

const bookData: [string, number] = [bookTitle, price];

const finalPrice: number = price - (price * 15 / 100);

const isPremium: boolean = price > 500;

const showcaseStatus: boolean = isPremium && isAvailable;

console.log("===== Book Information =====");
console.log(`Title              : ${bookData[0]}`);
console.log(`ISBN               : ${isbn}`);
console.log(`Original Price     : ${bookData[1]} บาท`);
console.log(`Price After Discount : ${finalPrice} บาท`);
console.log(`Premium Book       : ${isPremium}`);
console.log(`Available          : ${isAvailable}`);
console.log(`Can Show in Showcase : ${showcaseStatus}`);