/**
 * 
 */

function suma(){
	var tamMatriz = prompt("Dime el tamaño de la matriz");
	tamMatriz = parseInt(tamMatriz);
	var matriz = [];
	var vectorResultado = [];
	var elemTotal = tamMatriz * tamMatriz;
	var contador = 0;
	var sumaResultado = 0;
	var posicionRespuesta = 0;
	var division = 0;
	
	
	while (contador < elemTotal){
		matriz.push(Math.floor(Math.random() * 9));
		contador++;
	}
	

		while (posicionRespuesta < matriz.length){
			sumaResultado = sumaResultado + matriz[posicionRespuesta];
			posicionRespuesta = posicionRespuesta + tamMatriz;
		}
			division = sumaResultado / tamMatriz;
			vectorResultado.push(division)

	console.log(matriz);
	console.log(sumaResultado);
	console.log(vectorResultado);
	return division;
}