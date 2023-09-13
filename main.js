console.log("Hello World")


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



for (let [key,value] of Object.entries(person3)){
    if (Array.isArray(value)){
        console.log(`${key}:`)
        value.forEach(value => console.log(value))
    } else {
        console.log(`${key}: ${value}`)
        
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



class Person {
    constructor(name,age){
        this.age = age,
        this.name = name
    
     this.printInfo = () => {
            return `Name: ${this.name} \nAge: ${this.age}`
       }
    this.newAge = (years) => {
        this.age += years
        }
}
}
    let pers1 = new Person('Nicki Minaj', 40)
    // console.log(pers1.printInfo())
    // console.log(pers1.age)
    // console.log(pers1.name)
    console.log(pers1.newAge(3))


    console.log(pers1['printInfo']())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


 const greaterTen = (string) => {
    return new Promise((resolve,reject)=>{
        if (string.length >= 10){resolve(string)}
        else {reject(string)}})}

        greaterTen("dominicanrepublic")

        .then((result) =>{
            console.log(`That is a big word`)})
        .catch ((error) =>{
            console.log(`This is a small word`)});        


// =============Code Wars Problems ============//

// reverse sequence 
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const N = 10;
const arr = Array.from({length: N}, (_, index) => index + 1);
console.log(arr);

arr.reverse();
console.log(arr);

// Incorrect division method
//const solve = (x, y) => x // y

x = 13;
y = 1 ;
console.log(x/y);


