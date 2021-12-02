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

animal.attack();
Animal.sleep();