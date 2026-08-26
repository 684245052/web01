class Animal {
    move(){
        console.log("Animal is moving");
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is braking");
    }
}

const dog1 = new Dog();
dog1.move();
dog1.bark();