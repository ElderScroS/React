// function add(x, y){
//     return x + y;
// }
//
// // console.log(add(2, 3))
//
// const Add = (x, y)=> x+y;
// console.log(Add(36, 78))


// const arr = ['1', '2', '3', '17', '100', '13']
//
// const result = arr
//     .map(x=> parseInt(x))
//     .filter(x=> x % 2 !== 0)
//     .reduce((x, y)=>Math.min(x, y))
//
//
// console.log(result)


const helloGenerator = {
    hello: (name)=>{
        console.log("Hello", name)
    },

    sayHelloHamiya : function (names){
        names.forEach((name)=>{
            this.hello(name)
        })
    }
}

helloGenerator.sayHelloHamiya(['Elvin', "Vugar", "Axmed", "MAgomed", "Mark", "Renat", "React"])