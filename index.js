function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log(`A named function`);
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`An Anonymous function`);
    }
}