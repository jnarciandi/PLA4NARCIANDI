/**
 * 
 */
function recuento(){
	
	var CADENA = prompt("Dame tu cadena de letras a analizar.");
	var posicionLetra = 0;
	var letraRep = 0;
	var letraEscogida = prompt("Dime que letra quieres que busque.");
	var posicionesLetras = [];

	while (posicionLetra < CADENA.length) {
		if (CADENA.charAt(posicionLetra) >= 0 && CADENA.charAt(posicionLetra) <= 9) {
			alert("Error, detectado un " + CADENA.charAt(posicionLetra) + " en la posición "  + posicionLetra);
		}
		if (CADENA.charAt(posicionLetra) == letraEscogida) {
			posicionesLetras.push(posicionLetra);
		}	
		posicionLetra++;

	}
	return posicionesLetras;
}