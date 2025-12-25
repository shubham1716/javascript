// function addtwo(num1 ,num2 ){
//     console.log( num1 + num2);
// }

// addtwo(5, 10);  

// function add(num1 ,num2 ){
//     console.log( num1 + num2);
// }
// add(15, 25);

function calculatecartprice(num1){
    return num1;

}

console.log(calculatecartprice(1000))

////    ...    rest operator
function calculatecartprice(...num1){
    return num1;

}

console.log(calculatecartprice(1000,10,200))


const user = {
    name: "John",
    age: 30,
    city: "New York"
};

function handleobject(anyobject){
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}, City: ${anyobject.city}`);
}

handleobject(user);