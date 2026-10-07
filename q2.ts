abstract class Discount {
    constructor(private name : string, private salary:number) {}
    abstract calculateDiscount(): number;
    getDetails():string {
        return `${this.name}| Salary:${this.salary} Discount:${this.calculateDiscount}`;
    }
}
class FixedDiscount {
    constructor(private name : string, private salary:number) {}
    calculateDiscount(): number {
        return this.salary ;
}
}
class percentageDiscount {
    constructor(private name : string, private salary:number) {}
    calculatepercentage(percent: number): number {
    return (total * percent) / 100;
    }
}
abstract class product {
    constructor(private name : string, private salary:number) {
        this.addproduct(product : product) : void{
            this.products.push(product);
        }
}
calculateTotal(): number  {
    let total = 0 ;
    this.product.forEach(p => {
        total += p.getSubtotal();
    });
    return total;
}
calculateDiscount(percent: number): number {
    const total = this.calculateTotal();
    return (total * percent) / 100;
}
calculateNetTotal(percent : number): number {
    const total = this.calculateTotal();
    const Discount = this.calculateDiscount(percent);
    return total - Discount; {}
}
}
const myOrder = new Order();
myOrder.addproduct(new products("notebook",50,1))
myOrder.addproduct(new product("pen",50,1))
const total = myOrder.calculateTotal();
const discount = myOrder.calculateDiscount(10);
const net = myOrder.calculateNetTotal(10);
console.log(`Total: ${total}Bath`);
console.log(`Discount (10%): ${discount} Bath`);
console.log(`Net Total:${net}Bath`);