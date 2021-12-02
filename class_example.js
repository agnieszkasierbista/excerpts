class Dog {
    constructor(name) { this.name = name; } // this w konstruktorze odnosi sie do instancji
    bark() { console.log('hau!', this.name); }
    static run() { console.log('run!', this); }
}

Dog.run();

const a = new Dog("Fafik");

a.bark();

const b = new Dog("Azor");

b.bark();


function Enemy(name) {
    this.name = name;
}

Enemy.prototype = {
    attack: function() {
        console.log('attack!', this)
    },
    constructor: Enemy
}

Enemy.hide = function hide() {
    console.log('hide!', this);
} // definiujemy metode statyczną (znajdującą sie bezpośrednio na klasie)

Enemy.hide();

var enemy = new Enemy("John");

console.log('enemy', enemy);

enemy.attack();