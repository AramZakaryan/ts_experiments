const people = [
    {id: 'id001', name: 'Alice', job: 'Engineer', age: 30},
    {id: 'id002', name: 'Bob', job: 'Designer', age: 25},
    {id: 'id003', name: 'Charlie', job: 'Teacher', age: 35},
    {id: 'id004', name: 'Diana', job: 'Doctor', age: 40},
    {id: 'id005', name: 'Eve', job: 'Artist', age: 28}
]

let ArrayIndexed = new Proxy(Array, {
    construct(target, [arg]) {
        const arrIndexedById = {}
        arg.forEach(a => arrIndexedById[a.id] = a)
        return new Proxy(new target(...arg), {
            get(target, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            arrIndexedById[item.id] = item
                            target[prop].call(target, item)
                        }
                    case 'findById':
                        return id => arrIndexedById[id]
                    default:
                        return target[prop]
                }

            }
        })
    }
})

const peopleProxy = new ArrayIndexed(people)


peopleProxy.push({id: 'id006', name: 'Lil', job: 'cook', age: 48})

console.log(
    peopleProxy[5], // {id: 'id006', name: 'Lil', job: 'cook', age: 48}
    peopleProxy.findById('id006') // {id: 'id006', name: 'Lil', job: 'cook', age: 48}
)

