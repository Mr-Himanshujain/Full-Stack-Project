setTimeout(() => {
    console.log("test");
    console.debug("test")
}, 3000);

setInterval(() => {
    // let i=0
    // i++
    console.warn('hi')
    //console.log("hello")
}, 3000);
// let a = 2;
// typeof(a)
// console.log(typeof(a));

// let a=[9,10,2,7];
// let b=a.shift();
// a.push(9);
// console.log(a);

// setTimeout(wakeUpUser,5000);
// function wakeUpUser() {
//     alert("are u going stare at this boring page forever?");
// } 
// var price = 28.99;
// var discount = 10;
// var total = (price * (discount/100));
// if(total>25){
//     freeShipping();
// }

let a = [10,3,4,1,2];
let c=a.map((ele)=>ele+10);
console.log(c);
let d=c.filter(function(ele){ return ele >12})
console.log(d);

