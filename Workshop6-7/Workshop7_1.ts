export {};
class Staff {
    private name: string;
    private salary: number;
    constructor(n: string, s: number) {
        this.name = n;
        this.salary = s;
    }
    getDetails(): string {
        return `Name: ${this.name} , Salary: $${this.salary}บาท`;
    }
}
class Manager extends Staff {
    private department: string;
    constructor(n: string, s: number, d: string) {
        super(n, s);
        this.department = d;
    }
    getDetails(): string {
        return `${super.getDetails()} , Department: ${this.department}`;
    }
}
const staff1 = new Staff(`น้องบอล` , 40000);
console.log(staff1.getDetails());
const manager1 = new Manager(`ตี๋ใหญ่` , 60000, `IT`);
console.log(manager1.getDetails());