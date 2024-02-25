// Parentheses = ()
// Curly Braces Bracket = {}
// Square Bracket = [] 
// backtick = ``
/**
 * 
 * 
 ----> Loop ---------------
 ----> for loop , do while loop , while Loop;
 ----> advance foreach, map, for in , for of ;

 */

     //  ----->1st loop initaialization  let i = 0
    // ------>2nd conditon checking i<100; i>100;
    // ------>3rd increment and decrement i++ ; i--;

    // execution body

//  for(i=1; i<=100; i++){
//     console.log( i,"Hellow World Increment")
//  }

// let multiplication_tablles =document.querySelector('.multiplication_tablles')
 
const input = prompt("Enter your Multiplication Tables")
let orginalInput = +input



if (isNaN(orginalInput)){
    alert("invalid number")
}else{
    for(let i = 1; i<=10;  i++ ){
        document.write(`${orginalInput} x ${i} =${orginalInput*i} </br> </br>`)
    }
    
}



// const input1 = prompt("Enter your multipication ++ Tables")
// let orginalInput1 = +input1

// const input2 = prompt("Enter your multiplication - Tables")
// let orginalInput2 = +input2

// const input3 = prompt("Enter your multiplication / Tables")
// let orginalInput3 = +input3

// if (isNaN(orginalInput1)){
//     alert("invalid number")
// }else{
//     for(let i = 1; i<=10;  i++ ){
//         document.write(` </br>${orginalInput1} + ${i} =${orginalInput1+i} </br> </br>`)
//     }
// }

// if (isNaN(orginalInput2)){
//     alert("invalid number")
// }else{
//     for(let i = 1; i<=10;  i++ ){
//         document.write(` </br>${orginalInput2} - ${i} =${orginalInput2 - i } </br> </br>`)
//     }
// }

// if (isNaN(orginalInput3)){
//     alert("invalid number")
// }else{
//     for(let i = 1; i<=10;  i++ ){
//         document.write(` </br>${orginalInput2} / ${i} =${orginalInput2 / i } </br> `)
//     }
// }



