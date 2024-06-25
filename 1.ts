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


