/*ejercicio1*/

var saludo = () => `Mi nombre es Sebastian Yabiku y tengo 33 años`;
console.log( saludo() )

/*ejercicio2*/ 

//definias la funcion
function sumofcubes(x,y,z){
   var cuboDeX=Math.pow(x,3);
   var cuboDeY=Math.pow(y,3);
   var cuboDeZ=Math.pow(z,3);
   var resultado = cuboDeX + cuboDeY + cuboDeZ;
   console.log(resultado);
}

sumofcubes(1,5,9);

/*ejercicio3*/ 
function hola (x){
   return typeof x
}

hola(45);

/*ejercicio4*/ 

function sum(...theArgs) {
   return theArgs.reduce((previous, current) => {
     return previous + current;
   });
 }
 console.log(sum(7, 6, 5, 4));




/*ejercicio14*/
function sumofsquares(x,y){
   var cuadradoDeX=Math.pow(x,2);
   var cuadradoDeY=Math.pow(y,2);
   var resultado = cuadradoDeX + cuadradoDeY;
   console.log(resultado);
}

sumofsquares(3,2);






