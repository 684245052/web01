class PaymentGateway{
    process(amount: number) {
    }
}
class CreditCardPayment extends PaymentGateway{
    process(amount: number) {
        console.log(`กำลังประมวลผลการชำระเงินด้วยบัตรเครดิต จำนวน $${amount}...`);
    }
}
class PayPalPayment extends PaymentGateway{
    process(amount: number) {
        console.log(`กำลังเปลี่ยนเส้นทางไปยัง PayPal เพื่อชำระเงิน จำนวน $${amount}...`);
    }
}
function executePayment(p:PaymentGateway,amt:number){
    p.process(amt);
}
const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
executePayment(creditCard, 100);
executePayment(paypal, 250);