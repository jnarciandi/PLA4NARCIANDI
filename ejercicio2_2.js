/**
 * 
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