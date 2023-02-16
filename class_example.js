// class Dog {
//     constructor(name) { this.name = name; } // this w konstruktorze odnosi sie do instancji
//     bark() { console.log('hau!', this.name); }
//     static run() { console.log('run!', this); }
// }
//
// Dog.run();
//
// const a = new Dog("Fafik");
//
// a.bark();
//
// const b = new Dog("Azor");
//
// b.bark();
//
//
// function Enemy(name) {
//     this.name = name;
// }
//
// Enemy.prototype = {
//     attack: function() {
//         console.log('attack!', this)
//     },
//     constructor: Enemy
// }
//
// Enemy.hide = function hide() {
//     console.log('hide!', this);
// } // definiujemy metode statyczną (znajdującą sie bezpośrednio na klasie)
//
// Enemy.hide();
//
// var enemy = new Enemy("John");
//
// console.log('enemy', enemy);
//
// enemy.attack();

class A {
    constructor(abc) {
        console.log("construct~!")
    }
    greet() {
        console.log('hi!');
    }
}

class B extends A { //dziedziczenie
    constructor() {
        super(123);
        console.log("B")
    }
    greet() {
        super.greet();
        console.log('hello!');
    }
    run() {
        console.log('run');
    }
}

const a = new A();
const b = new B();

a.greet();
b.greet()
b.run();


class Cat {
    constructor(paws, whiskers) {
        this.paws = paws;
        this.whiskers = whiskers;
    }

    jump = function meow() { //instance
        console.log('meow!')
    }

    jump() { //prototype

    }

    static sleep() {

    }
}





















