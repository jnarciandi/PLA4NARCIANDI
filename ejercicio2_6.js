/**
 * Creo el vector-matriz a partir de la pregunta creando números random.
 * Esta vez estoy obligado a usar la formula "tamaño de matriz+1" para escoger los elementos.
 */

function suma(){
	var tamMatriz = prompt("Dime el tamaño de la matriz");
	tamMatriz = parseInt(tamMatriz);
	var matriz = [];
	var elemTotal = tamMatriz * tamMatriz;
	var contador = 0;
	var posMatriz = 0;
	var resultado = 0;
	
	while (contador < elemTotal){
		matriz.push(Math.floor(Math.random() * 9)+1);
		contador++;
	}
	while (posMatriz < matriz.length){
		resultado = resultado + matriz[posMatriz];
//		posMatriz = posMatriz + parseInt(tamMatriz) + 1;
		posMatriz = posMatriz + tamMatriz + 1;
	}
	
	console.log(matriz)
	console.log(tamMatriz)
	console.log(posMatriz)
	return resultado;
}