/**
 * Creo la matriz en un vector y sumo cada 6 valores para definir los valores 
 * que me interesa sumar.
 */
function suma(){
	var matriz = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5];
	var posMatriz = 0;
	var resultado = 0
	
	while (posMatriz < matriz.length){
		resultado = resultado + matriz[posMatriz];
		posMatriz = posMatriz + 6;
	}
	return resultado;
}