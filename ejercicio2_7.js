/**
 * 
 */

function suma(){
	var tamMatriz = prompt("Dime el tamaño de la matriz");
	tamMatriz = parseInt(tamMatriz);
	var matriz = [];
	var elemTotal = tamMatriz * tamMatriz;
	var contador = 0;
	var posMatriz = 0;
	var positivos = 0;
	var ceros = 0;
	var posicionLista = 0;
	var inicioFila = 1;
	var contadorFilas = 1;
	var resultado = []
	
	while (contador < elemTotal){
		matriz.push(Math.floor(Math.random() * 9));
		contador++;
	}
	
	while (inicioFila < matriz.length){
		posicionLista = inicioFila + contadorFilas;
		inicioFila = tamMatriz * contadorFilas +1;
		contadorFilas++;
		while (posicionLista < inicioFila){
			if (matriz[posicionLista] > 0){
				positivos++;
			}
			if (matriz[posicionLista] == 0){
				ceros++;
			}
			posicionLista++
		}
	}
	
	resultado.push(positivos);
	resultado.push(ceros);
	
	
	console.log(matriz)
	console.log(tamMatriz)
	console.log(resultado)
	document.write("el numero de positivos es " + resultado[0] + "y el numero de ceros es " + resultado[1]);
}