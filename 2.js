// // const personMap = new Map([
// //     ['name', 'Gago'],
// //     ['age', 56],
// //     [50, true],
// //     [{address: "Yerevan"}, true],
// //     [NaN, 'empty']
// // ])
// //
// // console.log(
// //     Object.fromEntries(personMap)   // {
// //                                     // 50: true,
// //                                     // name: 'Gago',
// //                                     // age: 56,
// //                                     // [object Object]: true,
// //                                     // NaN: 'empty'
// //                                     // }
// // )
// //
// // const object = {'name': 'John'};
// //
// // console.log(
// //     object.toString() // [object Object]
// // )
// // ;
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


const xml = new XMLHttpRequest()

xml.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);

xml.responseType = 'json';

xml.setRequestHeader('Content-type', 'application/json');

xml.onload = () => {
    if (xml.status >= 400) {
        console.error(xml.response);
    }
    console.log(xml.response);

}

xml.onerror = () => {
    console.log(xml.response)
}

const body = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

xml.send(JSON.stringify(body));






 




















