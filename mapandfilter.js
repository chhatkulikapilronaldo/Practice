//map and filter are both in-build function
//map garnu vanya given array lai modify garnu ho
const arrayA=[123,232,223,22,34];
const result=arrayA.map((item)=>{
    console.log(item);
    return item*2;
})
console.log(result);
console.log(arrayA);


//filter garnu vanya given array bata value nikalnu ho as requirement
const filteredArray=arrayA.filter((item)=>{
    return(
        item%2==0
    )
})
console.log(filteredArray);


//custome value doesnt return in for each
arrayA.forEach((a=>{
    console.log( a*2);
}))

console.log(arrayA)
