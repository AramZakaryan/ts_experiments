//////////// FRONTENDIYA
/** @link  https://www.youtube.com/watch?v=XBmRgdCIf2M&t=3042s */

// enum Payment_Type {
//     'idle',
//     ' inProgress'
// }
//
// type NewType = keyof typeof Payment_Type
// const payment: NewType = 'idle'

//// const mansMap: ManMapType = {
//     'id1': {
//         name: 'Karl',
//         age:
//             18
//     },
//     'id2':
//         {
//             name: 'Karl',
//             age:
//                 18
//         }
// }
//
// type Age = number
//
// type Man = {
//     name: string;
//     age: Age
// }
// // type ManMapType = Record<string, Man>
// // type ManMapType = {
// //     [key: string]: Man
// // }
// type ManMapType = {
//     [key in string]: Man
// }

// // Необходимо реализовать класс EventEmitter, с возможностью подписки на разные события, отписки, и оповещения
// // Базовый пример для проверки:
//
// class EventEmitter {
//     cbs: Map<string, Set<Function>>
//     cbs: Map<any, Set<Function>>
//
//     constructor() {
//         this.cbs = new Map();
//     }
//
//     on(event: string, cb: Function): void {
//         !this.cbs.has(event) && this.cbs.set(event, new Set());
//         this.cbs.get(event).add(cb)
//     }
//
//     emit(event: string): void {
//         this.cbs.get(event).forEach(cb => cb())
//     }
//
//     off(event: string, cb: Function): void {
//         this.cbs.get(event).delete(cb)
//     }
//
// }
//
// // Реализуйте класс, чтобы заработал код ниже
// const emitter = new EventEmitter(
//
// )
// const cb1 = () => console.log('cb111')
// const cb2 = () => console.log('cb222')
//
// emitter
//     .on('event', cb1) // подписка коллбэка сь1 на событие 'event'
// emitter
//     .on('event', cb2)
// emitter
//     .emit('event') // срабатывание события 'event' // 'cb1' // 'cb2'
// emitter
//     .off('event', cb2) // отписка коллбэка сь2 от события 'event'
// emitter
//     .emit('event')
// // // // 'cb1'
//
//
// const mySet: Set<any> = new Set()
//
// const myMap: Map<any, any> = new Map()
//
// myMap.set('foo', 'bar')
// myMap.has("myKey")
// myMap.delete('myKey')
//
//
// mySet.add("myValue")
// mySet.delete("myValue")

////////// Год опыта | Собеседование frontend | ЛАЙВ КОДИНГ
/** @link  https://www.youtube.com/watch?v=w34Fk5HT4b8 */

// const arr1 = [0, 10, 20, 30]
// const fn1 = function graterThan10(n: number) {
//     return n > 10
// }
//
// const customFilter = (arr: number[], fn: (n: number, i?: number) => boolean | number) => {
//     let res=[]
//
//     for (let i = 0; i < arr.length; i++) {
//         if(fn(arr[i],i)) {
//             res.push(arr[i])
//         }
//     }
//
//     return res
//
//
//     // return arr.filter(fn)
// }
//
// console.log(customFilter(arr1, fn1))
//
// const arr2 = [1, 2, 3]
// const fn2 = function firstIndex(n: number, i: number) {
//     return i === 0
// }
//
// console.log(customFilter(arr2, fn2))
//
// const arr3 = [-2, -1, 0, 1, 2]
// const fn3 = function PlusOne(n: number) {
//     return n + 1
// }
//
// console.log(customFilter(arr3, fn3))

// const customExpect = (n: number): any => {
//
//     return {
//         helper(condition: boolean, msg: string) {
//             if (condition) {
//                 return {
//                     'value': true
//                 }
//             }
//             throw new Error(msg)
//         }
//         ,
//         toBe: function (m: number) {
//             return this.helper(m === n, 'not equal')
//         },
//         notToBe: function (m: number) {
//             return this.helper(m !== n, 'equal')
//         }
//     }
// }
//
// console.log(customExpect(5).toBe(5))
// console.log(customExpect(5).toBe(4))
//
// console.log(customExpect(5).notToBe(null))
// console.log(customExpect(5).notToBe(5))

// //     v.1
// const addTwoPromises = async (pr1: Promise<number>, pr2: Promise<number>) => {
//     const res1 = await pr1
//     const res2 = await pr2
//     console.log(res1 + res2)
// }

// //     v.2
// const addTwoPromises = async (pr1: Promise<number>, pr2: Promise<number>) => {
//     Promise.allSettled([pr1, pr2]).then(arr =>
//         console.log(arr.reduce((acc, cur:any) => acc+=cur.value, 0)
//         )
//     )
// }
//
// addTwoPromises(Promise.resolve(2), Promise.resolve(3))

// function f(){
//     a=1
// }
// console.log(a)

// const a = {
//     age: 28,
//     sayAge:() =>{
//         console.log(this.age)
//     }
// }
//
// const c=a.sayAge
//
// c()


// a.sayAge=function (){ c()}
//
// a.sayAge()


// function Human(age: number) {
//     this.age = age;
//     this.sayAge = () => console.log(this.age)
// }
//
// const man = new Human(28)
//
// man.sayAge()

// const sum = (a: number, b: number) => a + b
//
// const newSum = sum.bind(null, 10)
//
// console.log(newSum(5))

// const arr = [1, 2, 3, 3, 3, 3, 2, 2, 2, 3, 4, 4, 4, 5, 6]
//
// console.log(arr.reduce((acc, el) => {
//         if (acc[el]) {
//             acc[el]++;
//         } else {
//             acc[el] = 1;
//         }
//         return acc;
//     }
//     , {}))

const arr = [1, 2, 3, 3, 3, 3, 2, 2, 2, 3, 4, 4, 4, 5, 6]

const set = new Set(arr)

console.log(Array.from(set))