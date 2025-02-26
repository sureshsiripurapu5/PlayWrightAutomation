
//1. Var : old way
//Es6
//scope: var
//functionally/locally + global scope

var x = 10;
function test(){
    var y = 20;
    console.log(y);

}
console.log(x);

test();


var browser = "chromeBrowser";
var browser = "fireFoxBrowser";
browser="edgeBrowser";
console.log(browser); //fireFoxBrowser // latestValue will be printed //Re-declaration..we can declare the same variable number of times, the latest value will be printed

var g;
console.log(g); //undefined
g="sureshSiripurapu";
console.log(g); //sureshSiripurapu


//issue with the var 
var s="hey suresh";
var t1 =4;
if(t1>3){
    var s="hey tom";

}
console.log(s); //hey tom

//let:
//blocked scope
//{}

let m ="hey suresh";
var s1=4;
if(s1>3){
    let msg =" playwright";
    console.log(msg);
}
//console.log(msg); //ReferenceError: msg is not defined
console.log(m); //hey suresh

let n= 10;
n=20;
console.log(n); //20


//const

const ar = 7;
console.log(ar * 10); //70
