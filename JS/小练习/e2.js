// E2
/*
EC(G)
    i = 0
    A = 0x00A [SCOPE]: EC(G)
    y = 0x00X
    B = 0x00B [SCOPE]: EC(G)
*/ 
var i = 0;
function A() {
    /*
     EC(A1)
     
     AC(A)
     [SCOPE-CHAIN] -> (EC(A),EC(G))
     形参赋值:--
     代码执行
     i = 10
     x = 0x00X [SCOPE] = EC(A1)

    */ 
    var i = 10;
    function x() {
        /*
        EC(X1)
        [SCOPE-CHAIN] -> (EC(X1),EC(A1))
        */
        /*
        EC(X2)
        [SCOPE-CHAIN] -> (EC(X2),EC(A1))
        */
        console.log(i); //-> 10 10
    }
    return x; 
}
var y = A();
y();
function B() {
    /*
    EC(B1)
    [SCOPE-CHAIN] -> (EC(B1),EC(G))
    i=20
    */ 
    var i = 20;
    y(); //EC(X2)
}
B();
//Answer : //-> 10 10

//E3
/*
EC(G):
x=5
fn = 0x001
f = 0x002
*/ 
let x = 5;
function fn(x) {
    /*
    EC(fn1)
    AO(fn1)
    x->6
    [SCOPE-CHAIN] -> (EC(fn1),EC(G))
    形参赋值：x=6
    return 0x002
    */ 
    return function (y) {
        /*
        */ 
        console.log(y + (++x));
    }
}
let f = fn(6);  
f(7); // 14
fn(8)(9); // 18
f(10); // 18
console.log(x); //5

// Answer:14 18 18 5


//E4
let a=0,
    b=0;
function A(a){
    A=function(b){
        console.log(a+b++);
    };
    console.log(a++);
}
A(1);
A(2);

// Answer:1 4


