// setTimeout(() => {
//     console.log("test");
//     console.debug("test")
// }, 3000);

// setInterval(() => {
//     let i=0
//     i++
//     console.warn('hi')
//     console.log("hello")
// }, 3000);
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

// let a = [10,3,4,1,2];
// let c=a.map((ele)=>ele+10);
// console.log(c);
// let d=c.filter(function(ele){ return ele >12})
// console.log(d);

//let b = [];
// let b = ["abc","xyz","abcde"];
// let c=b.pop("abc","xyz");
// let c = b[2];
// let c=b.filter((ele,i)=>ele.length === 5).toString();
// console.log(c)

// let a=['a','b','c','d'];
// let b=a.slice(1,4);
// console.log(b);

// let a=['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d'];
// let b=a.slice(4,8);
// let c=b.slice(1,4);
// console.log(b);
// console.log(c);

// let c =["car","bike","cycle"];
// let d=c.slice(1,3).join(" and ");
// console.log(d);

// let a = [30,40,50];
// let b = [2,3,4];
// let c = b.concat(a);
// console.log(c);
// let d = a.concat(b);
// console.log(d);

// let a = "hi im simon";
// let b=a.split(" ").filter(val=>val.length === 2).join(" & ");
// console.log(b);

// let a = [[name="himanshu",age=21],[name="lamda",age=10]];
// let b = a.filter(val=>val.length==3);
// console.log(a);

// let a=['a','b','c','d'];
// let b=0;
// a.forEach((ele,i)=>{
//     b+=1;
//     //b=b+1;
// });
// console.log(b)

function setPrint(params) {
    setTimeout(() => {
        console.log("hi buddy");
        }, 3000);
}

function onGetInput(e) {
    const data = e.target.value;
    console.log(data);
}
// function localsave() {
//     localStorage.setItem("Surename","himanshu");
//     alert("your data is in local storage");
// }
function sessionsave() {
    sessionStorage.setItem("hello","jain");
    sessionStorage.onGetInput(e);
}

function localsave() {
    localStorage.getItem("abc");
    localStorage.removeItem("abc");
    localStorage.getItem("helo");
}
function localsavechange(e) {
    var c=e.target.value;
    localStorage.setItem("name",c);
    if(localStorage.value("name"))
    console.log("hi my name is",c);
}

const{fname,lname}={fname:"himanshu",lname:"jain"}
console.log(fname);
console.log(lname);

const aa=[34,5];
const bb=[10,14,11];
const cc=[aa,bb];
const dd=[...aa,...bb];
console.log(cc);
console.log(dd);

const a=[1,0,3,5];
let [b,d,...e]=[1,3,6,8,9];
console.log(b);
console.log(d);
console.log(e);
console.log(a);


