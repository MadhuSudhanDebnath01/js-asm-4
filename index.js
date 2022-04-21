console.log("working");
//Create one function with zero parameter having a console statement

function zeroParameter(){
    console.log("Its Zero Parameter");
}
zeroParameter();
//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

let sum = (a,b) =>{
    let c=a+b;
    console.log(`The sum of ${a} and ${b} is ${c} `);
}
sum(5,6);

//Create one arrow function
const arrow = () =>{
    console.log("Its Arrow Function");
}
arrow();

//print output

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
//the output is undefined

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
//Output-21

//print
var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
// Output-Uncaught ReferenceError

//Write a function that accepts parameter n and returns factorial of n

let fact = (n) =>{
    let f= 1;
    for(let i=2; i<=n; i++){
        if (n==0){
            f=1;
            break;
        }
        f *=i;
    }
    console.log("the factorial of the" + n + "is:" + f);
}
fact(5);