function* func() {
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
    yield '!';
}

const gen = func()

console.log(gen.next());