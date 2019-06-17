$(document).ready(function(){

	$('#btnSend').click(function(){

	//----------Validación de errores de ingreso de datos -----------------
		
		var errores ='';

		if( $('#names').val() == ''){
			$('#namet').text("*Debe de ingresar su Nombre");
			$('#names').css("border-color", "#F14B4B");
		}else{
			$('#names').css("border-color", "#d1d1d1");
			$('#namet').text("");
		}
/*---------------validación de tipo vacio y signos de variable de correo---------------*/

		if( $('#email').val() == ''){
			$('#correot').text("*Debe de ingresar un correo electróncio valido");
			$('#email').css("border-color", "#F14B4B")
		}else{
			var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!exp.test(document.getElementById("email").value)){
				$('#correot').text("*El correo electrónico debe de contar con @dominio");
				$('#email').css("border-color", "#F14B4B")
			}else{

				$('#email').css("border-color", "#d1d1d1");
				$('#correot').text("")
		}
	}
/*--------------------------Validación de tipo vacio y numérica y 8 dígitos ------------------*/

		if( $('#phone').val() == ''){
			$('#phone').css("border-color", "#F14B4B");
			$('#telt').text("*Ingrese su número de teléfono");
		}else{
			if(isNaN(document.getElementById("phone").value)){
				$('#phone').css("border-color", "#F14B4B");
				$('#telt').text("*El número de teléfono solo debe de contar con números");
			}else{
				if(document.getElementById("phone").value.length<8){
					$('#phone').css("border-color", "#F14B4B");
					$('#telt').text("*El número de teléfono debe de contar con 8 dígitos");	
				}else{
				$('#phone').css("border-color", "#d1d1d1");
				$('#telt').text("")
			}
		}
		}	
/*-------------------------------validación de la casilla -------------------------------*/

		if( $('#casilla').val() !== ''){

			$('#casillat').text("*Debe de aceptar los Términos y Condiciones");
		}else{
	
			$('#casillat').text("");
		}

			var checkbox = document.getElementById('casilla');
			checkbox.addEventListener("change", validaCheckbox, false);
			function validaCheckbox(){
  			var checked = checkbox.checked;
  				if(checked){
    				$('#casillat').text("");
  			}
		}
//-------------------------------Espaciado del boton ----------------------------------

		if( $('#names').val() == '' && $('#email').val() == '' && $('#phone').val()== ''){

			$('.boton').css("bottom", "-190px");
		}else{

			$('.boton').css("bottom", "-170px")
		}



	// ----------------Enviando Mensaje -------------------------------

//	if( errores == '' == false){
//		var mensajeModal = '<div class="modal-wrap">'+
//								'<div class="mensaje-modal">'+
//									'<h3>Errores Encontrados</h3>'+
//									errores+
//									'<span id="btnClose">Cerrar</span>'+
//								'</div>'+
//							'</div>'

//		$('body').append(mensajeModal);

//	}

	//------------------Cerrando la ventana Modal -------------------

	$('#btnClose').click(function(){
		$('.modal-wrap').remove();

	//---------------- Validación del contenido del campo------------

	});

	});
});


//--------------------------
