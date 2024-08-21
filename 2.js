//
//
// const f = n => n % 2 ? 'Odd' : 'Even';
//
// const evenOrOdd = new Proxy(
//     function (n) {
//         return f(n);
//     },
//     {
//         get: (_, prop) => new Proxy(function () {
//             return f(prop);
//         }, {
//             get: target => 'xuy',
//             construct: _ => new String(f(prop))
//         }),
//         construct: (_, [n]) => new String(f(n)),
//     });
//
// console.log(
//     // evenOrOdd(2), //'Even'
//     evenOrOdd[2], //'Even'
//     // new evenOrOdd(2), //'Even'
//     // new evenOrOdd[2], //'Even'
//     // evenOrOdd(7), //'Odd'
//     evenOrOdd[7], //'Odd'
//     // new evenOrOdd(7), //'Odd'
//     // new evenOrOdd[7], //'Odd'
// )

let k = 120000


let medalG = {place1: 'Gold medal'}
let medalS = {place2: 'Silver medal'}
let medalB = {place3: 'Bronze medal'}

const gamers = new WeakMap([
    [medalG, 'Valo'],
    [medalS, 'Ano'],
    [medalB, 'Gago']
])

medalB = null

console.log(
    gamers.has(medalB), // false
    gamers  // {{place1: 'Gold medal'} => 'Valo', 
    // {place2: 'Silver medal'} => 'Ano', 
    // {place3: 'Bronze medal'} => 'Gago'}
)







