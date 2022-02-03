var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.abc = function () {
        console.log("abc");
    };
    A.prototype.bcd = function () {
        console.log("bcd");
    };
    A.cde = function () {
        console.log("cde");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.reraew = function () {
    };
    return B;
}(A));
A.cde();
B.cde();
var Axios = /** @class */ (function () {
    function Axios() {
        this.gowno = 123;
    }
    Axios.prototype.makeRequest = function () {
        // @ts-ignore
        return Promise.resolve(1);
    };
    Axios.prototype.validate = function () { };
    return Axios;
}());
var SuperNowyKlient = /** @class */ (function () {
    function SuperNowyKlient() {
    }
    SuperNowyKlient.prototype.makeRequest = function () {
        // robi w chuj zajebiste rzeczy
        // @ts-ignore
        return Promise.resolve(100);
    };
    SuperNowyKlient.prototype.die = function () { };
    return SuperNowyKlient;
}());
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.authorize = function (httpClient) {
        httpClient.makeRequest().then(function (resp) {
            console.log('resp', resp);
        });
    };
    return Auth;
}());
new Auth().authorize(new Axios());
