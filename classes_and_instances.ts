class A {
    public abc() {
        console.log("abc")
    }

    protected bcd() {
        console.log("bcd")
    }

    static cde() {
        console.log("cde")
    }
}

class B extends A {
 static reraew() {
 }
}

A.cde();
B.cde();




class Asd {
    private cat: any;
    dog: any;
    constructor(a, b) {
        this.cat = a;
        this.dog = b;
    }
}























//Dependency Inversion:

interface CommonShit {
    makeRequest(): Promise<number>
}

class Axios implements CommonShit {
    makeRequest(): Promise<number> {
        // @ts-ignore
        return Promise.resolve(1);
    }

    validate() {}

    gowno = 123
}

class SuperNowyKlient implements CommonShit{
    makeRequest(): Promise<number> {
        // robi w chuj zajebiste rzeczy
        // @ts-ignore
        return Promise.resolve(100);
    }

    die() {}
}



class Auth {
    authorize(httpClient: CommonShit) {
        httpClient.makeRequest().then((resp) => {
            console.log('resp', resp);
        })
    }
}


new Auth().authorize(new Axios())