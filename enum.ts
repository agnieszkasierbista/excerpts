enum Size {
    small = 200,
    medium = 300,
    big = 400,
    x_large = "huge"
}
type x = 1 | 2;

const sweatSuitSize: Size = Size.small;

const x: Partial<Record<Size, number>> = {
    [Size.big]: 4,
    300: 4,

}

console.log(sweatSuitSize === 200);
