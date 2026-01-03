
#project 1(change background color )  code


```  javascript
 const buttons = document.querySelectorAll('.button');
//  console.log(buttons)

const body =document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e)
  {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id ==='yellow'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id ==='blue'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id ==='white'){
      body.style.backgroundColor = e.target.id;
    }
  })
}
)
```
## project 2 (BMI CALCULATOR)

``` javascript
const form = document.querySelector('form')


form.addEventListener('submit',function(e){
  e.preventDefault()

 const height =parseInt(document.querySelector('#height').value)
 const weight =parseInt(document.querySelector('#weight').value)
 const results =document.querySelector('#results')

if(height === ''  || height < 0  || isNaN(height)){
  results.innerHTML = 'please give valid height '
}
 else if(weight === ''  || weight < 0  || isNaN(weight)){
  results.innerHTML = 'please give valid weight '
}
else{
  const bmi =(weight /((height*height)/10000)).toFixed(2)
results.innerHTML = `<span>${bmi}</span>`
}

}
)

```

## project 3 (DIGITAL CLOCK)
```javascript
const clock = document.querySelector('#clock')



setInterval(function(){
  let date = new Date();
clock.innerHTML=date.toLocaleTimeString();
},1000 )

```
