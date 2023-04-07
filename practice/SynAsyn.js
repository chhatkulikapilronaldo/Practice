const data1 = () => {
    console.log("Second one");
}

const data2 = ()=>{
    setTimeout( ()=>{
     console.log("Hello world");
    },3000)
}
const data = (a,b)=> {
    setTimeout(()=>{
        console.log(a+b);
    },4000)

    const data5=(a,b)=>{
        setTimeout(()=>{
            console.log(a-b)
        },6000)
    }
    console.log("First one");
    data2();
    data1();
    
    console.log("Third one");
    data5(4,5);
}
data(2,3);
//data5(4,3);
//date2();