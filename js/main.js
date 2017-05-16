function validateForm(){
	var letras = /^[a-zA-Z ]+$/;
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
	if (nombre == "") {
		var contenedor = document.getElementsByClassName("input-box")[0];
		var res = document.createElement("span");
		var texto = document.createTextNode("Completa los campos obligatorios"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		}
	if (apellido == "") {
		var contenedor = document.getElementsByClassName("input-box")[1];
		var res = document.createElement("span");
		var texto = document.createTextNode("Completa los campos obligatorios"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		}
	if (email == "") {
		var contenedor = document.getElementsByClassName("input-box")[2];
		var res = document.createElement("span");
		var texto = document.createTextNode("Completa los campos obligatorios"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		}
	if (password == "") {
		var contenedor = document.getElementsByClassName("input-box")[3];
		var res = document.createElement("span");
		var texto = document.createTextNode("Completa los campos obligatorios"); 
		contenedor.appendChild(res);
		res.appendChild(texto);
		}
	document.getElementById("name").value = "";
}