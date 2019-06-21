/**
 *  Creamos la constante con el abecedario tal cual. Vamos caracter a caracter 
 *  viendo las coincidencias con la constante y sumando valores en el vector "numLetras".
 *  Como vamos comprobando por orden alfabético vamos añadiendo valores a cola en el
 *  vector y ya nos saldrán ordenados.
 */
function recuento(){
	var abeCedario = "abcdefghijklmnñopqrstuvwxyz";
	var cadena = prompt("Escribe una cadena de letras");
	var posCadena = 0
	var posAbece = 0;
	var contador = 0;
	var numLetras = [];
	
	while (posAbece < abeCedario.length){
		while(posCadena < cadena.length){
			if(cadena.charAt(posCadena) == abeCedario.charAt(posAbece)){
				contador++;
			} 
			posCadena++;
		}
		numLetras.push(contador);
		contador = 0;
		posCadena=0;
		posAbece++;
	}
	return numLetras
}