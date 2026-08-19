class Employee {
    private _firstName: string;
    private _lastName: string;
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName(): string {
        return this._firstName + " " + this._lastName;
    }
    set fullName(name: string) {
        let parts: string[] = name.split(" ");
        if (parts.length > 1) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            this._firstName = name;
            this._lastName = "";
        }
    }
}
const emp1 = new Employee("Viroon", "Student");
console.log(emp1.fullName);
emp1.fullName = "Nay pee";
console.log(emp1.fullName);