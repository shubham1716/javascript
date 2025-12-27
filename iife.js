// iife immediately invoked function expression

// thats correct
function  example(){
    console.log("this is example function");
}

example();
// iife example

(function  exampleIIFE(){
    console.log("this is example IIFE function");
})();

// semicolon is optional in iife but its a good practice to use it beause it do stop a iife 


( ()=>{
    console.log("this is arrow function iife");
})()