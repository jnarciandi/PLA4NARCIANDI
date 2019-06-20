/**
 * 
 */
function recuento(){
	
	var CADENA = prompt("Dame tu cadena de letras a analizar.");
	var posicionLetra = 0;
	var letraRep = 0;
	var letraEscogida = prompt("Dime que letra quieres que busque.");

	while (posicionLetra < CADENA.length) {
		if (CADENA.charAt(posicionLetra) == letraEscogida) {
			letraRep++;
		}	
		posicionLetra++;

	}
	return letraRep;
	}