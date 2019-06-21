/**
 * Para decir cuantos números mayores al escrito hay en la secuencia 
 * vamos comprobando carácter a carácter que se cumpla el requisito. 
 * Si se cumple sumamos en una variable que nos haga de contador.
 */
function recuento(){
	var CADENA = "0123456789";
	var posCadena = 0;
	var numElegido = prompt("Dime a partir de qué numero empiezo a contar (no inclusive)");
	var contador = 0
	
	while (posCadena < CADENA.length){
		if (CADENA.charAt(posCadena) > numElegido){
			contador++
		}
		posCadena++
	}
	return contador
}