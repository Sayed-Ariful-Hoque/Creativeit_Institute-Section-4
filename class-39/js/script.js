let arr = [
    {title: "rakib"},
    {title: "fozlo"},
    "saiful"
]


console.log(arr.map((ele) => ele.title))

let obj ={
    name: "ariful",
    age: 24,
    call: function(a,b){
        let add = a + b
        let sub = a - b
        let mul = a * b
        console.log("add = " + add)
        console.log("sub = " + sub)
        console.log("mul = " + mul)
        return add, sub, mul
    }
}

obj.call( 20, 24)


let abc = [2, 8, 3 , 9 ,1, 0, 34, 4, 9, 2]

console.log(abc.sort())


let a = 1335;
let b =a.toString();

console.log(typeof a)

console.log(typeof b)


let c = "ariful"
let d = Number(c)
// console.log(typeof c)
console.log(typeof d)


