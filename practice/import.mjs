// import add from "./Export.mjs"
//     console.log(add(2))
// import { ab,cd } from './Export.mjs'

// const testFunction = () => {
//     setTimeout(()=>{
//         console.log('Im the main function')

//     },3000)
//    // console.log('Im the main function')
//     ab()
//     cd()
// }

// testFunction()

import { addFn, exampleFn } from './Export.mjs';

console.log(addFn(1,2));
console.log(exampleFn())