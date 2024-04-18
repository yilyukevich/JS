export {};

let a: number = 2;
let b: number = 4; 
let c: number;

c = b;
b = a;
a = c;

console.log(" a = " + a + "\n b = " + b + "\n c = " + c);
