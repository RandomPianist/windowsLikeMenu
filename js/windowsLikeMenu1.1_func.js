/*
WINDOWS LIKE MENU 1.1 © 2023
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
	WLM.load();
}

window.onresize = function() {
	WLM.resize();
}

window.onclick = function(e) {
	WLM.click(e);
}

window.onkeydown = function(e) {
	try {
		if (!WLM.keydown(e)) try {
			CT.keydown(e);
		} catch(err) {}
	} catch(err) {
		try {
			CT.keydown(e);
		} catch(err) {}
	}
}

window.onkeyup = function(e) {
	try {
		if (!WLM.keyup(e)) try {
			CT.keyup(e);
		} catch(err) {}
	} catch(err) {
		try {
			CT.keyup(e);
		} catch(err) {}
	}
}