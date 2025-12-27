// this keyword in regular function

//this show cuurent context
// const user= {
//     username: "Alice",
//     price: 250,

//     welcome: function() {
//         console.log(`Welcome ${this.username}, your price is ${this.price}`);
//     }
// }
// user.welcome();


// function showThis() {
//     const username = "Bob";
//     console.log(this.username);
// }

const shubham=() =>{
    const username="Shubham";
    console.log(this.username);


}
shubham();


const add=(num1,num2) => (num1+num2);
console.log(add(5,10));