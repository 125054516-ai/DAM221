
console.log("Hola Node.js");

let edad1= 20;
let edad2= 7;

console.log("edad promedio:");
console.log((edad1 + edad2)/2);

console.log("---medir procesos ");

console.time("mi proceso")
for( i=0; i<100000000000000000000000000000000; i++){
}
console.timeEnd("mi proceso")