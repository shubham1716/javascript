// // Object.create

// const jsuser ={
//     name: "kumar",
//     age: 30,
//     city: "New York"
// }

// // console.log(jsuser.age);
// // console.log(jsuser["city"]);


// jsuser.newuser = function(){
//     console.log("Hello shubham");

// }
// jsuser.newusertwo = function(){
//     console.log(`Hello shubham ${this.name}`);
// }

// console.log(jsuser.newuser());
// console.log(jsuser.newusertwo());



///////   object singleton pattern
/// 
// onject.created
const jsuser ={
    name: "kumar",
    age: 30,
    city: "New York",
    [mysym] :"shubham"
}

console.log(jsuser.age);
console.log(jsuser["city"]);
console.log(jsuser[mysym]);