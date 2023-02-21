/*
WINDOWS LIKE MENU © 2023
Desenvolvido por Reynolds Costa, no Notepad++

O uso é permitido; a comercialização, proibida.
*/

/*
Esse arquivo contém
      -------------
1) as |==FUNÇÕES==| que o script reescreve e
      -------------
2) a inclusão de listeners que interagem com o menu.
*/

window.onload = function() {
	menu.callLoad();
}

window.onresize = function() {
	menu.resize();
}

window.onkeydown = function(e) {
	menu.keyDown(e, event);
}

window.onkeyup = function() {
	try {
		menu.keyUp(event);
	} catch(err) {}
}

window.onclick = function(e) {
	menu.clique(e);
}

//Aqui terminam as FUNÇÕES