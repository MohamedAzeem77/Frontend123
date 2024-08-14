let button=document.querySelector('button')
let result=document.createElement('div')
result.id='result'
document.getElementById('wrapper').appendChild(result)



button.addEventListener('click',()=>{
    let input=document.querySelector('#input')
    let city=input.options[input.selectedIndex].value

    console.log(city)
    let population , Growth_Rate , language

switch(city){
    
    case 'Chennai': population = 11933000
                    Growth_Rate = 2.37
                    language = 'Tamil'
                     break;

    case 'Bengaluru':population = 13608000
                    Growth_Rate = 3.15
                    language = 'Kannada'
                    break;

    case 'Mumbai':  population = 21296517
                    Growth_Rate = 1.6
                    language = 'Marathi'
                    break ;       
}

let text= `The current population of ${city} is ${population} as of today, based on worldometer elaboration of the latest united Nations data. Growing rate is ${Growth_Rate} People who spoken language is ${language}.`

result.innerHTML=text;
})


