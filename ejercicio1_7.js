/**
 * He creado un vector con 10 elementos a 0. 
 * Así, ante cada coincidencia puedo ir cambiando el parámetro 
 * correspondiente de la linea. 
 * Al final solo ha de decir las 10 respuestas.
 */
function recuento(){
	
	var CADENA = prompt("Dame tu cadena de números a analizar.");
	var posicionNumero = 0;
	var numeroRep = 0;
	var numeroEscogido = 0;
	var posicionesNumeros = [0,0,0,0,0,0,0,0,0,0]
//	var contador = 0

	while (numeroEscogido < 10){
	while (posicionNumero < CADENA.length) {
		if (CADENA.charAt(posicionNumero) == numeroEscogido) {
//			contador++;
			posicionesNumeros[numeroEscogido]++;
		}	
		posicionNumero++;
	}
//	posicionesNumeros[numeroEscogido]= contador;
	posicionNumero = 0;
	numeroEscogido++;
	contador = 0;
	console.log(posicionesNumeros)
	}

	return posicionesNumeros;
	}