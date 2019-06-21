/**
 * En este caso como buscamos la prosición de la primera A que aparezca en la cadena que nos 
 * introduzca el usuario no hemos de buscar en toda la secuencia sino que nos detendremos ante 
 * la primera coincidiencia. Aqui podemos aprovechar la misma variable para contar posiciones 
 * y para dar la respuesta final.
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