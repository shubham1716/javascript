  if(true){
    let a=0;
    var b=1;
    const c=2;
  }


  //console.log(a);

// this is run and occur scope error because letand const is block scope
    console.log(b);
  
  
    //console.log(c);


    function one(){
        const username="john";
            function two(){
                const website="example.com";
                console.log(username);
                
            }
            //console.log(website);
    two()
    }
    one() 