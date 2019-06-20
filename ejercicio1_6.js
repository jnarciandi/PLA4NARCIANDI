/**
 * 
 */
function recuento(){
	
	var CADENA = prompt("Dame tu cadena de letras a analizar.");
	var posicionLetra = 0;
	var letraRep = 0;
	var letraEscogida = prompt("Dime que letra quieres que busque.");
	var posicionesLetras = []

	while (posicionLetra < CADENA.length) {
		if (CADENA.charAt(posicionLetra) == letraEscogida) {
			posicionesLetras.push(posicionLetra);
		}	
		posicionLetra++;

	}
//	while (letraRep < posicionesLetras.length){
//		alert("La letra elegida aparece en " + letraRep);
//		LetraRep++
//	}
	return posicionesLetras;
	}