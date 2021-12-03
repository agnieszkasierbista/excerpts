class Animal {
    attack = () => { //metoda instancji
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

    private age = 20;
    public name = 'sdfsdf;';


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