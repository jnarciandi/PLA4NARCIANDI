/**
 * Para que el programa nos detecte cuantas A hay en la secuencia 
 * ha de ir comparándo los caracteres uno a uno e ir sumando las coincidencias en una variable.
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

