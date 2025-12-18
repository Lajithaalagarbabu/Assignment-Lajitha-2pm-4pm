//  1.) Write a function that prints "Good Morning". 

function gm(){
    console.log("Good Morning!");
}
gm()

// 2.) Create a function that takes two numbers and returns their sum.

 function sum(a,b){
    return a-b
    
}
console.log(sum(30,20));

// 3.)Convert the function to an arrow function.

const greet = name => console.log("Hello " + name);
greet("Buddy");

//4.) Write a callback function for setTimeout.

   function delay(){
    console.log("You delayed 5mins!");
}
setInterval(delay,5000)

// 5.)Create an IIFE that prints "Started".

(function(){
    console.log("The file is started!");
})();

