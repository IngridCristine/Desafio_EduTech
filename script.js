//função para aparecer o submenu ao clicar
$('.submenu-acesso').click(function(){
	//ao clicar na ul irá mudar a classe(toggleClass)
	$('.menu-de-navegacao ul .submenu-lista').toggleClass('mostra'); 
});


//função para girar a seta ao clicar no submenu
$('.submenu-acesso').click(function(){
	$('.menu-de-navegacao ul .seta').toggleClass('gira');
})



//Verifica se os campos foram preenchidos
function validaCampo() {
	var nome = document.getElementById("nome");
	var email = document.getElementById("email");
	var cgm = document.getElementById("cgm");
	var telefone = document.getElementById("telefone");

	if(nome.value.length == "") {
		//exibe um alerta caso o campo esteja em branco
		alert("Por favor, preencha todos os campos obrigatórios.");
		nome.focus(); //deixa o campo em foco
		return;
	}

	if(email.value == "") {
		alert("Por favor, preencha todos os campos obrigatórios.");
		email.focus();
		return;
	}

	if(cgm.value == "") {
		alert("Por favor, preencha todos os campos obrigatórios.");
		cgm.focus();
		return;
	}

	if(telefone.value == "") {
		alert("Por favor, preencha todos os campos obrigatórios.");
		telefone.focus();
		return;
	}

	else {
		//redireciona o usuário para outra página
		location.href = "inscricao-2.html";
		return false;
	}
}

//redireciona para outra página ao clicar no botão
function redireciona() {
	location.href = "inscricao-3.html";
}

function redireciona2() {
	location.href = "inscricao-4.html";
}

function finalizaInscricao() {
	location.href = "inscricao-finalizada.html";
}



//Função que faz aparecer o resto do conteúdo de acordo com a opção marcada
function leiaMais() {
	var confirmar = document.getElementById("a-confirmar");
	var avancar = document.getElementById("a-avancar");

	var mais1 = document.getElementById("mais-1");
	var mais2 = document.getElementById("mais-2");
	var mais3 = document.getElementById("mais-3");
	var mais4 = document.getElementById("mais-4");
	var mais5 = document.getElementById("mais-5");

	var trilha1 = document.getElementById("matricula-1");
	var trilha2 = document.getElementById("matricula-2");
	var trilha3 = document.getElementById("matricula-3");
	var trilha4 = document.getElementById("matricula-4");
	var trilha5 = document.getElementById("matricula-5");
	var trilha6 = document.getElementById("matricula-6");
	var trilha7 = document.getElementById("matricula-7");
	var trilha8 = document.getElementById("matricula-8");
	var trilha9 = document.getElementById("matricula-9");
	var trilha10 = document.getElementById("matricula-10");

	var some1 = document.getElementById("some1");
	var some2 = document.getElementById("some2");
	var some3 = document.getElementById("some3");
	var some4 = document.getElementById("some4");
	var some5 = document.getElementById("some5");
	var some6 = document.getElementById("some6");
	var some7 = document.getElementById("some7");
	var some8 = document.getElementById("some8");
	var some9 = document.getElementById("some9");
	var some10 = document.getElementById("some10");

	var mais = [mais1, mais2, mais3, mais4, mais5];
	var trilhas = [trilha1, trilha2, trilha3, trilha4, trilha5, trilha6, trilha7, trilha8, trilha9, trilha10];

	if(confirmar.style.display === "none") {
		confirmar.style.display = "inline";
		mais.style.display = "none";
		avancar.style.display = "none"; 
	} 

	else if(trilha1.checked == true) {
		confirmar.style.display = "none";
		mais1.style.display = "inline";
		avancar.style.display = "inline";
		trilha1.style.display = "inline";
		some2.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha2.checked == true) {
		confirmar.style.display = "none";
		mais1.style.display = "inline";
		avancar.style.display = "inline";
		trilha2.style.display = "inline";
		some1.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha3.checked == true) {
		confirmar.style.display = "none";
		mais2.style.display = "inline";
		avancar.style.display = "inline";
		trilha3.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha4.checked == true) {
		confirmar.style.display = "none";
		mais2.style.display = "inline";
		avancar.style.display = "inline";
		trilha4.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some3.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha5.checked == true) {
		confirmar.style.display = "none";
		mais3.style.display = "inline";
		avancar.style.display = "inline";
		trilha5.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha6.checked == true) {
		confirmar.style.display = "none";
		mais4.style.display = "inline";
		avancar.style.display = "inline";
		trilha6.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha7.checked == true) {
		confirmar.style.display = "none";
		mais5.style.display = "inline";
		avancar.style.display = "inline";
		trilha7.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha8.checked == true) {
		confirmar.style.display = "none";
		mais5.style.display = "inline";
		avancar.style.display = "inline";
		trilha8.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some9.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha9.checked == true) {
		confirmar.style.display = "none";
		mais5.style.display = "inline";
		avancar.style.display = "inline";
		trilha9.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some10.style.display = "none";
	}

	else if(trilha10.checked == true) {
		confirmar.style.display = "none";
		mais5.style.display = "inline";
		avancar.style.display = "inline";
		trilha10.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
		some3.style.display = "none";
		some4.style.display = "none";
		some5.style.display = "none";
		some6.style.display = "none";
		some7.style.display = "none";
		some8.style.display = "none";
		some9.style.display = "none";
	}
}

//Função que faz aparecer o resto do conteúdo de acordo com a opção marcada
function mostraMais() {
	var confirmar = document.getElementById("a-confirmar");
	var avancar = document.getElementById("a-avancar");
	var texto = document.getElementById("turno-texto");

	var mais1 = document.getElementById("mais-1");
	var mais2 = document.getElementById("mais-2");
	var mais3 = document.getElementById("mais-3");

	var some1 = document.getElementById("some1");
	var some2 = document.getElementById("some2");
	var some3 = document.getElementById("some3");

	var turno1 = document.getElementById("turno-1");
	var turno2 = document.getElementById("turno-2");
	var turno3 = document.getElementById("turno-3");

	if(confirmar.style.display === "none") {
		confirmar.style.display = "inline";
		mais.style.display = "none";
		texto.style.display = "none";
		avancar.style.display = "none";
	} 

	else if(turno1.checked == true) {
		confirmar.style.display = "none";
		texto.style.display = "inline";
		mais2.style.display = "inline";
		mais3.style.display = "inline";
		avancar.style.display = "inline";
		turno1.style.display = "inline";
		some2.style.display = "none";
		some3.style.display = "none";
	}

	else if(turno2.checked == true) {
		confirmar.style.display = "none";
		texto.style.display = "inline";
		mais1.style.display = "inline";
		mais3.style.display = "inline";
		avancar.style.display = "inline";
		turno2.style.display = "inline";
		some1.style.display = "none";
		some3.style.display = "none";
	}

	else if(turno3.checked == true) {
		confirmar.style.display = "none";
		texto.style.display = "inline";
		mais1.style.display = "inline";
		mais2.style.display = "inline";
		avancar.style.display = "inline";
		turno3.style.display = "inline";
		some1.style.display = "none";
		some2.style.display = "none";
	}
}