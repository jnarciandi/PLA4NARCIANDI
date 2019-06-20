/**
 * 
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