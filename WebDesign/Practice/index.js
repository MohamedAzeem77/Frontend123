// let a={name:"Abc",num:56};
// let b={name:"cde",num:57};
// console.log(a);
// console.log(b);

// function display(){
//     document.getElementById("qe").innerHTML="How r u ? ";
// }



/* Simple Object creation  without a constructor (individual initialization)*/

let school={                  //object is created using object literal
    name:'vidya Ratna PTS',
    established:'1996',
    location:'Adyar',
    displayInfo:function(){      //method for a display
        console.log(`My school is ${school.name} was established in ${school.established} located at ${school.location}`)
    },
    phoneNumber: {              //object inside an object
        countrycode: '+91',
        mobile: '9546672488',
        landline: '45563536'
       }
    }
    console.log(school.phoneNumber.landline);   
    
    


/* SIMPLE OBJECT CREATION USING  A CONSTRUCTOR--> new keyword  (NOT WITH A CLASS) */


function person(firstName , lastName){         //constructor 
    this.firstName=firstName;
    this.lastName=lastName;
}




let person1=new person("Ajay","devarkonda");    //object creating with a new keyword
let person2=new person("Rajish","khapoor");


console.log(person1.firstName);                //Output
console.log(`second object : ${person2.firstName} ${person2.lastName}`);






/* OBJECT CREATION ALONG WITH CLASS -> TRADITIONAL WAY FROM ECMA6S*/ 

class car{
    constructor(brand,price) {
       this.brand=brand;
       this.price=price; 
    }

    getDetails(){
        console.log(`car brand is ${this.brand} & its price is ${this.price} INR `)
    }
}

let car1=new car("HondaCity",1234556);
let car2=new car("BMW x-Series",5564332);

console.log(car1.brand);
console.log(car2.getDetails());