//orgena una lista de numeros de menor a mayor

//genera la cantidad de numeros pseudoaleatorios
//segun el valor del parametro max  
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//genera 1000 numeros pseudoaleatorios
let var1=[];
for (let i=0; i<=10000;i++){
var1[i]=getRandomInt(10000);
}

let intermedio=0;
/*a continuacion se imprime en pantalla el listado
 de numeros aleatorios*/
document.write(var1+" <br> ");
//la primer iteracion toma el primer valor
for (let i = 0; i < (var1.length-1); i++) {
	/*la segnda iteracion compara el valor que toma la
	primer iteracion y lo compara con todos los valores 
	siguientes*/
	for (let h=i+1; h<=(var1.length-1);h++){
		/*el if compara el valor que toma el pimer for y
		 lo compara con el siguiente*/
		if (var1[i]>var1[h]) {
			intermedio = var1[h];
			var1[h]=var1[i];
			var1[i]=intermedio;
		}
	}
}
document.write(var1);
