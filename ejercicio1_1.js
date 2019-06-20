/**
 * 
 */
function recuento(){
	
var CADENA = "kajbefukafvbdvmbasefjbu";
var posicionLetra = 0;
var letraRep = 0;

while (posicionLetra < CADENA.length) {
	if (CADENA.charAt(posicionLetra) == "a") {
		letraRep++;
	}	
	posicionLetra++;

}
return letraRep;
}

