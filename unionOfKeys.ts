const person = {age: 22, name: "Aaaa"}
type Person = typeof person
type PersonKeys = keyof Person;

type Union = "age" | "name"

// const keys = ["adsf", "zcvb"] as const;
const keys: Union[] = ["age"];

const jo: [Union, Union, Union] = ['age', 'name', 'age'];

const abc: typeof keys[number] = "age";