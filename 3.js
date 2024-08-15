// const position = {
//     x: 24, y: 45, _direction: "north"
//
// }
//
// const positionProxy = new Proxy(position, {
//     get(target, key) {
//         return key.startsWith('_') ? 'hidden' : target[key]
//     }
// })
//
// console.log(positionProxy.x, // Output: 24
//     positionProxy.y, // Output: 45
//     positionProxy._direction // Output: 'hidden'
// )


// console.log(
//     "Hello!".startsWith('H') // Output: true
// )


const person = {
    name: "Gago",
    age: 56,
    job: "fullstack"
}

const personProxy = new Proxy(person, {
    has: (target, key) => Object.prototype.hasOwnProperty.call(target, key),
    ownKeys(target, keys) {
        return Object.getOwnPropertyNames(target)
    }
})

console.log(
    Object.keys(personProxy) // ['name', 'age', 'job']
)


let x = void 0

console.log(x) // undefined