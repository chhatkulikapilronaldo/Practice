// function add(a,b){
//     console.log(a+b)
// }
// add(3,3)

// function add(name){
//     console.log('hello' +name)
// }
// add('kapil')

//anonymous function
// Anonymous function created as a function expression
// (function () {});

// Anonymous function created as an arrow function
// var a=function(){
//   return 3;
// }
// //console.log(a);
// //console.log(typeof(a))
// const b=a()
// console.log(b)


// function multiply(num1, num2) {
//     let result = num1 * num2;
//     console.log(result)
//     //return result;
//   }
//   multiply(2,2);
//   multiply(3,3);
//   multiply(1,1);


 //No param no return 
  // function display(){
  //   console.log("Display No parameter No return Type");
  // }
  // display();

  // const test = {
  //   prop: 42,
  //   func: function() {
  //     return this.prop;
  //   },
  // };
  
  // console.log(test.func());

  //simple arrow function
  // hello=()=>{
  //   console.log("hello sansar");
  // }
  // hello();

  //


  const sayhello=name=>{
    console.log("hello" +"" +name)
    console.log()
  }
  const x={
    name:"kapil",
    address:"Dhd",

    ab:function(){
      setTimeout(()=>{
        console.log(`The name is ${this.name}`)
      },5000)
    }
  }
  //sayhello("kapil","hello");
  sayhello();

