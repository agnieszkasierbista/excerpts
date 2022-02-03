var _a;
var Size;
(function (Size) {
    Size[Size["small"] = 200] = "small";
    Size[Size["medium"] = 300] = "medium";
    Size[Size["big"] = 400] = "big";
    Size["x_large"] = "huge";
})(Size || (Size = {}));
var sweatSuitSize = Size.small;
var x = (_a = {},
    _a[Size.big] = 4,
    _a[300] = 4,
    _a);
console.log(sweatSuitSize === 200);
