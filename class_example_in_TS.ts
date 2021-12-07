class Animal {
    attack = () => { //metoda instancji - class field
        this.run();
    }

    run() { //metoda prototypu
        console.log("run!1");
    }

    // @ts-ignore
    run = () => { //metoda instancji
        console.log("run!2");
    }

    static sleep() { // metoda klasy
        this.findShelter();
    }

    static findShelter() {
        console.log("finding shelter!")
    }
}

const animal = new Animal();

// animal.attack();
// Animal.sleep();

class A {

    private age = 20; // class field
    public name = 'sdfsdf;'; // class field


    private greet() {
        console.log('hi!');
    }

    public publicGreet() {
        console.log(this.age);
        this.greet();
    }

    protected szok() {
        console.log('jajo');
    }

    public okejka() {
        this.szok();
    }
}

class B extends A {
    myMethod() {
        this.szok()
        // this.greet();
    }
}

const b = new B();
const a = new A();

a.publicGreet();
b.publicGreet()

b.myMethod()

// a.szok();
// b.szok();

interface Shejp {
    draw: () => null
}

abstract class Shape {
    abstract draw(): void;
}

class Triangle extends Shape {
    draw() {
        console.log('triangle');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('rectangle');
    }
}

function szokio(a: Shape) {
    a.draw();
}

szokio(new Rectangle());
szokio(new Triangle());

class Aa {
    a: number
    greet() { console.log('a'); }
}

class Bb extends Aa {
    b: string
    greet() { console.log('b'); }
}

class Cc extends Aa {
    c: boolean
    greet() { console.log('c'); }
}

function x(z: Aa): number {
    z.greet();

    return z.a;
}

const aa = new Aa();
const bb = new Bb();
const cc = new Cc();

x(aa);
x(bb);
x(cc);


// agregacja:

class Szok {
    draw(x: number) {

    }
}

class Heh {
    lol: null | Szok = null;

    constructor(lol: Szok) {
        this.lol = lol;
    }

    draw(z: number) {
        this.lol.draw(z);
    }
}

new Heh(new Szok());

// kompozycja:

class Yo {
    draw(z: number) {

    }
}

class Platki {
    bigYo = Yo;
    yo = new Yo();

    draw(z: number) {
        this.yo.draw(z);
    }
}