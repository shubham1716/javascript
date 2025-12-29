//for of

const arr=[10,20,30,40,50];

for (const num of arr) {
    console.log("Number is: " + num);
}


//for in    
const myobject={
    js :'JavaScript',
    cpp :'C Plus Plus',
    py :'Python',
}

for (const key in myobject) {
    console.log(key + " : " + myobject[key]);
   
}


const coding=['JavaScript', 'C Plus Plus', 'Python', 'Java', 'Ruby'];

coding.forEach(function(lang, index) {
    console.log(index + " : " + lang);
})