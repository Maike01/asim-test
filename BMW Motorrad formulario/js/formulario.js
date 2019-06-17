// Declaración de variables correspondientes

var opt_1 = new Array ("-", "Atención Anfitriona Sala de Ventas", "Atención o Seguimiento del Vendedor", "Comunicación Telefónica", "Conocimiento o Explicación del Producto", "Instalaciones", "Planes de Financiamiento", "Políticas de la Empresa", "Producto, Selección o Precio", "Prueba Demo", "Trámites o Traspasos", "Otros");

var opt_2 = new Array ("-", "Atención o Seguimiento del Vendedor", "Comunicación Telefónica", "Conocimiento o Explicación del Producto", "Instalaciones", "Planes de Financiamiento", "Políticas de la Empresa", "Producto, Selección o Precio", "Trámites o Traspasos", "Otros");

var opt_3 = new Array ("-", "Atención o Seguimiento del Asesor", "Calidad del Trabajo", "Comunicación Telefónica", "Conocimientos Técnicos", "Costo Servicio o Repuestos", "Espera Repuestos o Pedidos Especiales", "Falla Repuestos o Motocicleta", "Instalaciones", "Políticas de la Empresa", "Tiempo de Entrega", "Otros");

var opt_4 = new Array ("-", "Atención o Seguimiento del Vendedor", "Comunicación Telefónica", "Conocimiento del Producto", "Instalaciones", "Pedidos Especiales", "Políticas de la Empresa", "Producto, Selección o Precio", "Telefonista", "Trámites o Traspasos", "Otros");

var opt_5 = new Array ("-", "Atención o Seguimiento del Vendedor", "Conocimiento del Producto", "Espera Repuesto o Pedido Especial", "Instalaciones", "Políticas de la Empresa", "Producto, Selección o Precio", "Otros");

var opt_6 = new Array ("-", "Atención del Cajero", "Políticas de la Empresa", "Otros");

var opt_7 = new Array ("-", "Anuncios / Patrocinios", "Cotización On-line", "Facebook", "Instagram", "Mailing Directo", "Página Web", "Otros");

var opt_8 = new Array ("-", "Centros Comerciales", "Cursos de Manejo", "Eventos o Presentaciones", "Salida en Moto", "Sub-Distribuidores", "Otros");

//Prueva de revisión de variables declaradas.
//console.log(opt_2);

// Función que ejecuta el cambio dinámico

function cambia(){
	var selector;
	// Se toma el valor de la selección realizada para igualar el valor
	selector = document.formularioVoc.contenedor_opt[document.formularioVoc.contenedor_opt.selectedIndex].value;

	//Se verifica que el valor de la selección este definido
	if (selector!=0){
		//Seleccionamos el valor de la selección correcto para validación con el selector dinámico consecuente
		mis_opts=eval("opt_" + selector);
		//Se calcula el número de la selección
		num_opts=mis_opts.length;
		// determina el número de la opción en el select
		document.formularioVoc.opt.length = num_opts;
		//para cada opción del array, se coloca en el select
		for(i=0; i<num_opts; i++){
				document.formularioVoc.opt.options[i].value=mis_opts[i];
				document.formularioVoc.opt.options[i].text=mis_opts[i];
		}
		}else{

			//si no hay alguna opción seleccionada, se reinicia el select
			document.formularioVoc.opt.length= 1;
			// se coloca el elemento vacio en la opción que se registro
			document.formularioVoc.opt.options[0].value="-";
			document.formularioVoc.opt.options[0].text="-";
		}

		// se reinician las opciones
		document.formularioVoc.opt.options[0].selected = true;
	}

