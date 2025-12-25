 const course ={
    name:"js in hindi",
    price:"999",
    instuctor:"shubham",
 }

 course.instuctor

//  const {instuctor : teacher} = course;
//  console.log(teacher);

const {instuctor} = course;
 console.log(instuctor);

 //json
    const userjson = `{
        "name": "shubham",
        "age": 30,
        "city": "New York"
    }`;
    const userobj = JSON.parse(userjson);z