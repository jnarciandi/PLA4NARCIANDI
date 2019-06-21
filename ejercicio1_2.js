/**
 * Para detectar la letra elegida por el usuario tan solo hemos de buscar 
 * las coincidencias con la respuesta de la pregunta y actuar como en el ejercicio 1.
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