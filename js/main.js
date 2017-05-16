function validateForm(){
	var letras = /^[a-zA-Z ]+$/; /*/^[a-zA-Z ]+$/;/^[0-9]$/*/
	var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	console.log(nombre);
	var apellido = document.getElementById("lastname").value;
	console.log(apellido);
	var email = document.getElementById("input-email").value;
	console.log(email);
	var password = document.getElementById("input-password").value;
	console.log(password);
	/*var selecciona = document.getElementById("").value;*/
	/*var tw = document.getElementById("input-social").value;*/
	if (nombre === "") {
		var contenedor = document.getElementsByClassName("input-box")[0];
		var res = document.createElement("span");
		var texto = document.createTextNode("Contesta todos los campos"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		} else if (nombre === /^[0-9]$/.test(nombre)) {
			var contenedor = document.getElementsByClassName("input-box")[0];
			var res = document.createElement("span");
			var texto = document.createTextNode("Ingresa solo letras"); 
			contenedor.appendChild(res);
			res.appendChild(texto);
		} else if (nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
				var contenedor = document.getElementsByClassName("input-box")[0];
				var res = document.createElement("span");
				var texto = document.createTextNode("ingresa una Mayuscula"); 
				contenedor.appendChild(res);
				} else {
					var contenedor = document.getElementsByClassName("input-box")[0];
					var res = document.createElement("span");
					var texto = document.createTextNode("Tu dato ha sido ingresado correctamente'"); 
					contenedor.appendChild(res);
				}
	if (apellido === "" || apellido !== letras.test(apellido) || apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()) {
		var contenedor = document.getElementsByClassName("input-box")[1];
		var res = document.createElement("span");
		var texto = document.createTextNode("Completa los campos correctamente"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		}
	if (email === "" || email == correo.test(email)) {
		var contenedor = document.getElementsByClassName("input-box")[2];
		var res = document.createElement("span");
		var texto = document.createTextNode("Completa los campos correctamente"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		}
	if (password === "" || password < 6 || password == "password" || password == "123456" || password == "098754") {
		var contenedor = document.getElementsByClassName("input-box")[3];
		var res = document.createElement("span");
		var texto = document.createTextNode("Completa los campos correctamente"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		}
	document.getElementById("name").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("input-email").value = "";
	document.getElementById("input-password").value = "";
}