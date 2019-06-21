/**
 * Se crean las 5 listas en vectores con los valores deseados (en mi caso he repetido 5 veces el número de la propia lista). 
 * Como tenemos definido todos los parámetros sencillamente hacemos la suma de los componentes que queríamos.
 */
function suma(){
	var lista1 = [1,1,1,1,1];
	var lista2 = [2,2,2,2,2];
	var lista3 = [3,3,3,3,3];
	var lista4 = [4,4,4,4,4];
	var lista5 = [5,5,5,5,5];
//	var resultado = parseInt(lista1[1]) + parseInt(lista2[2]) + parseInt(lista3[3]) + parseInt(lista4[4]) + parseInt(lista5[5]);
	var resultado = lista1[0] + lista2[1] + lista3[2] + lista4[3] + lista5[4];
	
	return resultado;

}