/**
 * 
 */
function recuento(){
	
	var CADENA = "kajbefukafvbdvmbasefjbu";
	var posicionLetra = 0;
	var letraRep = 0;
	var letraEscogida = prompt("dime que letra quieres que busque");

	while (posicionLetra < CADENA.length) {
		if (CADENA.charAt(posicionLetra) == letraEscogida) {
			letraRep++;
		}	
		posicionLetra++;

	}
	return letraRep;
	}