// Array Processing with Callbacks
//Use forEach, map, or custom callback.

// for each 
let num=[1,2,3,4,5];
 num.forEach(function (num){
    console.log(num*2);
    
 });


 // map 

 let nume=[1,2,3,4,5];
 let sq=nume.map(function(nume){
    return nume*nume;
 });

 console.log(sq);
 
 //arrow

 let numbers = [1, 2, 3, 4];
let doubled = numbers.map(n => n * 2);
console.log(doubled);

//custom callback function
function pa(arr, callback){
    for(let value of arr){
        callback(value);
    }
}
pa([10,20,30],function(item){
    console.log(item);
    
})

