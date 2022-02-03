function *generator() {
    yield 1;
}

function *useGenerator() {
    console.log('eeeeeeeeeeeeee');
    const data = yield generator();

    console.log(data, "data");
}


const gen = useGenerator();
//@ts-ignore

gen.next();
//@ts-ignore

gen.next();
