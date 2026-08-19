class Character {
    constructor(
        protected name: string,
        protected health: number,
        protected level: number
    ) {}
    takeDamage(damage: number) {
        this.health -= damage;
    }
    get detail(): string {
        return `${this.name}, Health: ${this.health}, Level: ${this.level}`;
    }
    attack(): void {
        console.log(`${this.name} attacks!`);
    }
}
class Mage extends Character {
    constructor(
        name: string,
        health: number,
        level: number,
        private mana: number
    ) {
        super(name, health, level);
    }
    get detail(): string {
        return `${super.detail}, Mana: ${this.mana}`;
    }
    attack(): void {
        console.log(`${this.name} uses Spell!`);
    }
}
class Warrior extends Character {
    constructor(
        name: string,
        health: number,
        level: number,
        private stamina: number
    ) {
        super(name, health, level);
    }
    get detail(): string {
        return `${super.detail}, Stamina: ${this.stamina}`;
    }
    attack(): void {
        console.log(`${this.name} uses Sword!`);
    }
}
const mage1 = new Mage("Gandalf", 100, 3, 200);
console.log(mage1.detail);
mage1.takeDamage(10);
console.log(mage1.detail);
mage1.attack();
const warrior1 = new Warrior("Conan", 120, 4, 150);
console.log(warrior1.detail);
warrior1.attack();