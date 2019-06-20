/**
 * 
 */
function recuento(){
	
	var CADENA = prompt("Dame tu cadena de letras a analizar.");
	var posicionLetra = 0;
	var letraRep = 0;
	var encuentroLetra = false

	while (encuentroLetra == false) {
		if (CADENA.charAt(posicionLetra) == "a") {
			encuentroLetra = true;
		}	
		posicionLetra++;

	}
	return posicionLetra;
	}