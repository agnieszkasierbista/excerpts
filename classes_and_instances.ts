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