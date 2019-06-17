// Despliega las opciones ocultas con el display dinamico

$(document).ready(function(){

	$('#select').on('change', function(){

		//var selectValor = '#'+$(this).val();
		var selectValor = '#'+$(this).val();
		
		$('#queja').children('div').hide();
		$('#queja').children(selectValor).show();

		if( $('#names').val() == '' && $('#email').val() == '' && $('#phone').val()== ''){

			$('.boton').css("bottom", "-220px");
		}else{

			$('.boton').css("bottom", "-170px")
		}

	});

});

//Despliega el cuadro de texto, al momento de seleccionar otros

