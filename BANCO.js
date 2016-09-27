
var contador=0;
function accionradio(tipodefuncion){
	switch (tipodefuncion){
		case 'tn':
		darnumero();
		break;
		case 'dp':
		tipooperacion();
		break;
		default:
		alert('ejemplo de nuemro de cuenta')
		break;
		}
	//alert('su numero es 1'+tipodefuncion)
	}

function darnumero(){
	
			 var cedula = prompt("numero de cedula");
			 var resultados= 'su turno es '+cedula+'-'+contador;
			 contador=contador+1;
			 alert(resultados)
	
}
	
function  tipooperacion(){
	         var operacion= prompt('que operacion desea realizar');
			 var tcuenta = prompt("número de cuenta");
			 var resultado= 'usted ha '+operacion+' a su cuenta '+tcuenta;
			 alert(resultado)
	 }
	

	





