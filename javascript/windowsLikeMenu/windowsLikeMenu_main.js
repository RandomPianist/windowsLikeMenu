/*
WINDOWS LIKE MENU © 2023
Desenvolvido por Reynolds Costa, no Notepad++
O uso é permitido; a comercialização, proibida.
*/

/*
         ---------------
Esse é o |==PRINCIPAL==| arquivo dessa biblioteca.
         ---------------
AVISO:
Não altere se não souber o que está fazendo.
*/

var combinarTeclas = new Array();

var Menu = function(dados) {
	var menuLib = dados;
	
	for (var i = 0; i < menuLib.length; i++) {
		if (menuLib[i]["filhos"] === undefined) menuLib[i]["filhos"] = new Array();
		if (menuLib[i]["desativado"] && menuLib[i]["funcao"] === undefined) menuLib[i]["funcao"] = "";
	}
	
	const menuEstilo = {
		"menu" : {
			"border" : "#99a",
			"background" : "linear-gradient(#e1e6f6, #d4dbee, #e1e6f6)"
		},
		"menu_item" : {
			"color" : "#000",
			"hover" : {
				"border" : "#99a",
				"background" : "linear-gradient(#d4dbee, #e1e6f6, #d4dbee)"
			},
			"active" : {
				"border" : "#99a",
				"background" : "linear-gradient(#999, #c8cddc, #d6d6ee)"
			}
		},
		"submenu" : {
			"border" : "#99a",
			"background" : "#eee"
		},
		"submenu_item" : {
			"on" : {
				"color" : "#000",
				"hover" : {
					"border" : "#99a",
					"background" : "linear-gradient(#d4dbee, #e1e6f6, #d4dbee)"
				}
			},
			"off" : {
				"color" : "#666",
				"hover" : {
					"border" : "#ccc",
					"background" : "linear-gradient(#eee, #ddd)"
				}
			}
		},
		"shadow" : "#888"
	};
	
	const menuCod = {
		0: "Erro",
		8: "Backspace",
		9: "Tab",
		13: "Enter",
		16: "Shift",
		17: "Ctrl",
		18: "Alt",
		19: "Pause/break",
		20: "Caps Lock",
		32: "Espaço",
		33: "Page up",
		34: "Page down",
		35: "End",
		36: "Home",
		37: "←",
		38: "↑",
		39: "→",
		40: "↓",
		44: "Print Screen",
		45: "Insert",
		46: "Delete",
		48: "0",
		49: "1",
		50: "2",
		51: "3",
		52: "4",
		53: "5",
		54: "6",
		55: "7",
		56: "8",
		57: "9",
		59: ";",
		65: "A",
		66: "B",
		67: "C",
		68: "D",
		69: "E",
		70: "F",
		71: "G",
		72: "H",
		73: "I",
		74: "J",
		75: "K",
		76: "L",
		77: "M",
		78: "N",
		79: "O",
		80: "P",
		81: "Q",
		82: "R",
		83: "S",
		84: "T",
		85: "U",
		86: "V",
		87: "W",
		88: "X",
		89: "Y",
		90: "Z",
		91: "Windows Esquerdo",
		93: "Windows Direito",
		95: "sleep",
		96: "0 Numérico",
		97: "1 Numérico",
		98: "2 Numérico",
		99: "3 Numérico",
		100: "4 Numérico",
		101: "5 Numérico",
		102: "6 Numérico",
		103: "7 Numérico",
		104: "8 Numérico",
		105: "9 Numérico",
		106: "*",
		107: "+",
		108: ".",
		109: "-",
		110: ".",
		111: "/",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		124: "F13",
		125: "F14",
		126: "F15",
		127: "F16",
		128: "F17",
		129: "F18",
		130: "F19",
		131: "F20",
		132: "F21",
		133: "F22",
		134: "F23",
		135: "F24",
		136: "F25",
		137: "F26",
		138: "F27",
		139: "F28",
		140: "F29",
		141: "F30",
		142: "F31",
		143: "F32",
		144: "Num lock",
		145: "Scroll lock",
		173: "Mute/unmute",
		174: "Diminuir volume",
		175: "Aumentar volume",
		176: "Próximo",
		177: "Anterior",
		178: "Parar",
		179: "Tocar"
	};
	
	var menuResCorpo = "";
	
	var menuTesteCombo = new Array();
	var menuNoF = new Array();
	var menuAtal = new Array();
	var menuAtalSub = new Array();
	var menuAtalSubF = new Array();
	var menuAtalSubC = new Array();
	var menuVisiveis = new Array();
	var menuFixar = new Array();
	var menuListaDesativados = new Array();
	var menuListaBlock = new Array();
		
	var menuAberto = false;
	var menuHasChild = false;
	var menuLast = true;
	var menuECom = false;
	var menuErrAtalho = false;
	var menuTeclado = false;
	var mostrando = true;
	
	var menuSelecionado = 0;
	var menuNivel = 0;
	var menuNivelLim = 0;
	var menuSelecionadoSub = 0;
	var menuEscId = -1;

	var menuLoad = function() {
		menuNoF = new Array();
		menuAtalSub = new Array();
		menuAtalSubF = new Array();
		menuAtalSubC = new Array();
		menuVisiveis = new Array();
		menuFixar = new Array();
		menuListaBlock = new Array();
		var resultado = menuCriar(menuLib, false, 0, 1, [], []);
		document.body.innerHTML = "<div>" + resultado + "</div><div class = 'menuRes' id = 'menuRes'>" + menuResCorpo + "</div>";
		document.getElementById("menuRes").style.height = (window.innerHeight - 68) + "px";
	}
	
	var menuColorir = function(id, ativo) {
		var legenda = ativo ? "on" : "off";
		document.getElementById(id).style.borderColor = menuEstilo["submenu_item"][legenda]["hover"]["border"];
		document.getElementById(id).style.background = menuEstilo["submenu_item"][legenda]["hover"]["background"];
	}
	
	var menuRecol = function(id, sel, reg) {
		var classes = ["menu_item", "menu_item_des"];
		for (var i = 0; i < 1; i++) {
			var el = document.getElementsByClassName(classes[i])[id];
			var aux = ["menuC", "menu_abrir"];
			for (var j = 0; j < 2; j++) {
				if (el.id == aux[j] + sel.join("_")) {
					menuColorir(el.id, menuListaDesativados.indexOf(sel.join("_")) == -1);
					reg = el.id;
				} else if (reg == "") {
					document.getElementById(el.id).style.borderColor = "transparent";
					document.getElementById(el.id).style.background = "none";
				}
			}
			aux = sel[0];
			for (var j = 1; j < sel.length - 1; j++) {
				aux += "_" + sel[j];
				menuColorir("menu_abrir" + aux, true);
			}
		}
	}

	var menuCallAbrir = function(id, clique, evento) {
		menu.abrir(id, true, event.keyCode);
		setTimeout(function() {
			for (var i = 0; i < menuLib.length; i++) {
				if (i == id) {
					document.getElementById("menu_m" + i).style.borderColor = menuEstilo["menu_item"]["active"]["border"];
					document.getElementById("menu_m" + i).style.background = menuEstilo["menu_item"]["active"]["background"];
				} else {
					document.getElementById("menu_m" + i).style.borderColor = "transparent";
					document.getElementById("menu_m" + i).style.background = "none";
				}
			}
		}, 1);
	}
	
	var verMenu = function(id, visivel) {
		document.getElementById(id).style.display = visivel ? "block" : "none";
		id = id.substring(12);
		if (!visivel && menuVisiveis.indexOf(id) > -1) {
			var aux = new Array();
			for (var i = 0; i < menuVisiveis.length; i++) {
				if (menuVisiveis[i] != id) aux[aux.length] = menuVisiveis[i];
			}
			menuVisiveis = aux;
		} else if (visivel) menuVisiveis[menuVisiveis.length] = id;
	}
	
	var menuFechar = function() {
		for (var i = 0; i < document.getElementsByClassName("menu_submenu").length; i++) document.getElementsByClassName("menu_submenu")[i].style.display = "none";
		menuVisiveis = new Array();
		for (var i = 0; i < document.getElementsByClassName("menu_span").length; i++) {
			document.getElementsByClassName("menu_span")[i].style.borderColor = "";
			document.getElementsByClassName("menu_span")[i].style.background = "";
		}
		menuEstiloLimpar();
		menuAberto = false;
		menuHasChild = false;
		menuLast = true;
		menuECom = false;
		menuSelecionado = 0;
		menuNivel = 0;
		menuNivelLim = 0;
		menuSelecionadoSub = 0;
		menuEscId = -1;
		document.getElementById("menu_delHover").innerHTML = "";
	}
	
	var menuEstiloLimpar = function() {
		var aux = ["menu_item", "menu_item_des"];
		for (var i = 0; i < 2; i++) {
			for (var j = 0; j < document.getElementsByClassName(aux[i]).length; j++) {
				document.getElementsByClassName(aux[i])[j].style.borderColor = "";
				document.getElementsByClassName(aux[i])[j].style.background = "";
			}
		}
	}

	var menuOverSub = function(id) {
		menuEstiloLimpar();
		aux = id[0];
		var aux2 = menuLib[id[0]];
		for (var i = 1; i < id.length - 1; i++) {
			aux += "_" + id[i];
			aux2 = aux2["filhos"][id[i]];
			menuColorir("menu_abrir" + aux, true);
		}
		for (var i = 0; i < aux2["filhos"].length; i++) {
			if (aux2["filhos"][i]["filhos"] !== undefined) verMenu("menu_submenu" + aux + "_" + i, false);
		}
		if (aux2["filhos"].length > 0) {
			if (aux2["filhos"][id[id.length - 1]]["filhos"] !== undefined) {
				if (menuListaDesativados.indexOf(id.join("_")) == -1) {
					menuHasChild = true;
					menuLast = false;
					if (!menuTeclado) verMenu("menu_submenu" + id.join("_"), true);
					var lista = document.getElementsByClassName("menu_submenu");
					for (var i = 0; i < lista.length; i++) {
						if (lista[i].id.substring(12).split("_").length > id.length) verMenu(lista[i].id, false);
					}
					try {
						menuColorir("menu_abrir" + id.join("_"), true);
					} catch(err) {
						menuHasChild = false;
					}
				} else menuColorir("menu_abrir" + id.join("_"), false);
			} else {
				menuLast = true;
				var ativo = menuListaDesativados.indexOf(id.join("_")) == -1;
				if (ativo) menuECom = true;
				menuColorir("menuC" + id.join("_"), ativo);
			}
			menuSelecionadoSub = id.join("_");
			aux = menuLib[id[0]]["filhos"];
			for (var i = 1; i < id.length - 1; i++) aux = aux[id[i]]["filhos"];
			menuNivelLim = aux.length - 1;
			menuNivel = id.length - 1;
		}
	}

	var menuManterAberto = function(id) {
		for (var i = 0; i < document.getElementsByClassName("menu_submenu").length; i++) document.getElementsByClassName("menu_submenu")[i].style.display = "none";
		menuVisiveis = new Array();
		var lista = new Array();
		for (var i = 0; i < id.length; i++) {
			var aux = new Array;
			for (var j = 0; j <= i; j++) aux[j] = id[j];
			lista[i] = aux.join("_");
		}
		for (var i = 0; i < lista.length - 1; i++) verMenu("menu_submenu" + lista[i], true);
		menuOverSub(id);
	}
	
	var menuProx = function(id) {
		verMenu("menu_submenu" + id.join("_"), true);
		id[id.length] = 0;
		menuOverSub(id);
	}
	
	var menuSelecionar = function(novo) {
		menuSelecionado += novo;
		if (menuSelecionado < 0) menuSelecionado = menuLib.length - 1;
		else if (menuSelecionado >= menuLib.length) menuSelecionado = 0;
		menuCallAbrir(menuSelecionado, true, event.keyCode);
	}
	
	var funcao = function(val) {
		menu.fim();
		var fun = new Function(val);
		fun();
	}
	
	var callNoF = function() {
		if (menuNoF[menuSelecionado] === undefined) setTimeout(function() {
			menu.fim();
		}, 150);
		else funcao(menuNoF[menuSelecionado]);
	}
	
	var menuCriar = function(arr, sub, recuo, nivel, idsub, larguras) {
		var maior = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]["texto"].length > maior) maior = arr[i]["texto"].length;
		}
		var largura = maior * ((maior * -0.0631111) + 8.4333333);
		maior = 2;
		var cont = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]["atalho"] === undefined) cont++;
			else if (menuAtalho(arr[i]["atalho"]).length > maior) maior = menuAtalho(arr[i]["atalho"]).length;
		}
		if (cont == arr.length) {
			cont = 0;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i]["filhos"] === undefined) cont++;
			}
		}
		largura += maior * ((maior * -0.0631111) + 8.4333333);
		largura *= 64 / 65;
		var margem = 20;
		if (maior > 2 || cont == 0) largura += parseInt(margem * 1.5);
		var aux, span;
		var soma_larguras = 0;
		for (var i = 0; i < larguras.length; i++) soma_larguras += menuLimCem(larguras[i]);
		if (
			recuo != 0 &&
			menuFixar.indexOf(idsub[0] + "@" + nivel) == -1 &&
			soma_larguras + menuLimCem(largura) > window.innerWidth
		) recuo = (menuLimCem(largura) * -1) - parseInt(margem / 4);
		else if (idsub.length > 0) menuFixar[menuFixar.length] = idsub[0] + "@" + nivel;
		if (sub) {
			if (recuo < 0) recuo += 4;
			if (cont >= arr.length) {
				maior = 0;
				for (var i = 0; i < arr.length; i++) {
					if (arr[i]["texto"].length > maior) maior = arr[i]["texto"].length;
				}
				var larguraAux = parseInt(1.0775194 * (5.5813953 * maior + 33.6744186) - 12.0465116) + margem;
				aux = recuo == 0 ?
					"menu_submenu' style = 'width:" + menuLimCem(larguraAux) + "px"
				:
					"menu_submenu' style = 'left:" + menuLimCem(recuo) + "px;width:" + menuLimCem(largura) + "px"
				;
			} else aux = recuo != 0 ?
				"menu_submenu' style = 'left:" + menuLimCem(recuo) + "px;width:" + menuLimCem(largura) + "px"
			:
				"menu_submenu' style = 'width:" + menuLimCem(largura) + "px"
			;
			aux += ";z-index:" + (idsub.length + 1);
			if (recuo < 0) aux += ";box-shadow:-2px 2px 2px 1px " + menuEstilo["shadow"];
			if (nivel == 2) aux += ";margin-top:2px";
		} else aux = "menu' id = 'menu";
		largura -= parseInt(margem * 1.5);
		resultado = "<ul class = '" + aux + "'";
		var nomeMenu = "";
		if (sub) {
			nomeMenu = idsub.join("_");
			resultado += "id = 'menu_submenu" + nomeMenu + "'";
		}
		resultado += ">";
		for (var i = 0; i < arr.length; i++) {
			var menuC = new Array();
			var classe = "menu_item";
			var hasF = true;
			if (nivel == 1) {
				if (arr[i]["funcao"] !== undefined && arr[i]["funcao"] != "") hasF = false;
				else if (arr[i]["funcao"] == "") hasF = !arr[i]["desativado"];
			}
			if (arr[i]["desativado"]) classe += "_des";
			var funcaoC = !arr[i]["desativado"] ? "javascript:menu.fim();" + arr[i]["funcao"] : "#";
			for (var j = 0; j < nivel - 1; j++) menuC[menuC.length] = idsub[j];
			menuC[menuC.length] = i;
			if (arr[i]["destacar"]) resultado += "<li class = 'menu_destaque'>" +
					"<table class = 'menu_tabela'>" +
						"<tr>" +
							"<td class = 'menu_margem' style = 'width:20px'>" +
								"&nbsp;" +
							"</td>" +
							"<td class = 'menu_texto' style = 'padding:0'>" +
								"<hr>" +
							"</td>" +
						"</tr>" +
					"</table>" +
				"</li>";
			resultado += "<li";
			if (arr[i]["filhos"] !== undefined) {
				if (sub) {
					recuo = largura + parseInt(margem * 1.5);
					if (i == 0) larguras[larguras.length] = recuo;
					idsub = menuC;
					if (arr[i]["desativado"]) menuListaDesativados[menuListaDesativados.length] = idsub.join("_");
					resultado += ">" +
						"<a onmousemove = 'menu.overSub([" + idsub.join(",") + "]);' id = 'menu_abrir" + idsub.join("_") + "' class = '" + classe + "'>" +
							"<table class = 'menu_tabela'>" +
								"<tr>" +
									"<td class = 'menu_margem'>" +
										"&nbsp;" +
									"</td>" +
									"<td class = 'menu_texto'>" +
										menuEspacamento(arr[i]["texto"]) +
									"</td>" +
									"<td class = 'menu_open'>" +
										"►" +
									"</td>" +
									"<td class = 'menu_margemFim1'>" +
										"&nbsp;" +
									"</td>" +
								"</tr>" +
							"</table>" +
						"</a>" +
					menuCriar(arr[i]["filhos"], true, recuo, nivel + 1, idsub, larguras);
				} else if (!hasF) {
					if (arr[i]["desativado"] === undefined || !arr[i]["desativado"]) menuNoF[i] = arr[i]["funcao"];
					resultado += ">" +
						"<span class = 'menu_span' onmouseover = 'menu.over(" + i + ");' onclick = 'menu.exec(" + i + ")' id = 'menu_m" + i + "'>" +
							"<a href = '#'>" +
								menuEspacamento(arr[i]["texto"]) +
							"</a>" +
						"</span>" +
					menuCriar(arr[i]["filhos"], true, 0, 2, [i], []);
				} else resultado += ">" +
						"<span class = 'menu_span' onmouseover = 'menu.over(" + i + ");' onclick = 'menu.abrir(" + i + ", true, -1);' id = 'menu_m" + i + "'>" +
							"<a href = '#'>" +
								menuEspacamento(arr[i]["texto"]) +
							"</a>" +
						"</span>" +
					menuCriar(arr[i]["filhos"], true, 0, 2, [i], []);
			} else if (arr[i]["atalho"] !== undefined) {
				span = menuCalcAtal(arr[i], nomeMenu);
				if (arr[i]["desativado"]) menuListaDesativados[menuListaDesativados.length] = menuC.join("_");
				resultado += ">" + 
					"<a " +
						"href = '" + funcaoC + "'" +
						"class = '" + classe + "'" +
						"onmousemove = 'menu.manterAberto([" + menuC.join(",") + "])'" +
						"id = 'menuC" + menuC.join("_") +
					"'>" +
						"<table class = 'menu_tabela'>" +
							"<tr>" +
								"<td class = 'menu_margem'>" +
									"&nbsp;" +
								"</td>" +
								"<td class = 'menu_texto'>" +
									span +
								"</td>" +
								"<td class = 'menu_atalho'>" +
									menuEspacamento(menuAtalho(arr[i]["atalho"])) +
								"</td>" +
								"<td class = 'menu_margemFim2'>" +
									"&nbsp;" +
								"</td>" +
							"</tr>" +
						"</table>" +
					"</a>";
				menuTesteCombo[arr[i]["funcao"]] = arr[i]["atalho"];
			} else {
				span = menuCalcAtal(arr[i], nomeMenu);
				if (arr[i]["desativado"]) menuListaDesativados[menuListaDesativados.length] = menuC.join("_");
				resultado += ">" + 
					"<a " +
						"href = '" + funcaoC + "'" +
						"class = '" + classe + "'" +
						"onmousemove = 'menu.manterAberto([" + menuC.join(",") + "])'" +
						"id = 'menuC" + menuC.join("_") +
					"'>" +
						"<table class = 'menu_tabela'>" +
							"<tr>" +
								"<td class = 'menu_margem'>" +
									"&nbsp;" +
								"</td>" +
								"<td class = 'menu_texto'>" +
									span +
								"</td>" +
							"</tr>" +
						"</table>" +
					"</a>";
			}
			resultado += "</li>";
		}
		resultado += "</ul>";
		return resultado;
	}

	var menuCalcAtal = function(lista, nome) {
		var span = "<span>";
		if (lista["letraAlt"] !== undefined && !lista["desativado"]) {
			span = lista["texto"].substring(0, lista["letraAlt"]);
			if (menuAtalSub.indexOf(lista["texto"].substring(lista["letraAlt"], lista["letraAlt"] + 1).toUpperCase()) == -1) {
				menuAtalSub[menuAtalSub.length] = lista["texto"].substring(lista["letraAlt"], lista["letraAlt"] + 1).toUpperCase();
				menuAtalSubF[menuAtalSubF.length] = lista["funcao"];
				menuAtalSubC[menuAtalSubC.length] = nome;
			} else console.error('Ocorreu um erro ao instanciar os atalhos.\nHá repetições no parâmetro "letraAlt".');
			span += "</span><span class = 'menu_letraAtal'>" + lista["texto"].substring(lista["letraAlt"], lista["letraAlt"] + 1) + "</span><span>";
			span += lista["texto"].substring(lista["letraAlt"] + 1);
		} else span += menuEspacamento(lista["texto"]);
		span += "</span>";
		return span;
	}
	
	var menuLimCem = function(val) {
		if (val > 0 && val < 100) val = 100;
		return val;
	}

	var menuEspacamento = function(texto) {
		while (texto.indexOf(" ") > -1) texto = texto.replace(" ", "&nbsp");
		return texto;
	}

	var menuAtalho = function(arr) {
		var resultado = new Array();
		for (var i = 0; i < arr.length; i++) {
			resultado[resultado.length] = menuCod[arr[i]];
			if (menuCod[arr[i]] === undefined) menuErrAtalho = true;
		}
		return resultado.join("+");
	}

	var menuEstiloCriar = function() {
		return "<style type = 'text/css'>" +
			"body {" +
				"overflow:hidden" +
			"}" +
			".menu, .menu_submenu, .menu_tabela td {" +
				"padding:0;" +
				"margin:0" +
			"}" +
			".menu, .menu_tabela {" +
				"width:100%" +
			"}" +
			".menuRes {" +
				"overflow-y:auto;" +
				"padding:20px" +
			"}" +
			".menu {" +
				"height:25px;" +
				"padding-top:1px;" +
				"border-bottom:1px solid " + menuEstilo["menu"]["border"] + ";" +
				"background:" + menuEstilo["menu"]["background"] + ";" +
				"font-family:Tahoma;" +
				"font-size:12.5px;" +
				"user-select:none" +
			"}" +
			".menu li {" +
				"display:inline-block;" +
				"position:relative" +
			"}" +
			".menu li a {" +
				"display:block;" +
				"text-decoration:none;" +
				"color:" + menuEstilo["submenu_item"]["on"]["color"] + ";" +
				"cursor:default" +
			"}" +
			".menu li a.menu_item_des {" +
				"color:" + menuEstilo["submenu_item"]["off"]["color"] +
			"}" +
			".menu .menu_submenu {" +
				"display:none" +
			"}" +
			".menu .menu_submenu .menu_submenu {" +
				"position:absolute;" +
				"top:-2px" +
			"}" +
			".menu_submenu {" +
				"position:absolute;" +
				"top:24px;" +
				"left:0px;" +
				"padding:4px 0;" +
				"border-color:" + menuEstilo["submenu"]["border"] + ";" +
				"border-style:solid;" +
				"border-width:0 1px 1px;" +
				"box-shadow:1px 2px 2px 1px " + menuEstilo["shadow"] + ";" +
				"background:" + menuEstilo["submenu"]["background"] + ";" +
				"list-style-type:none;" +
				"cursor:default" +
			"}" +
			".menu_submenu li {" +
				"display:block;" +
				"margin:-2px 0" +
			"}" +	
			".menu_submenu .menu_destaque {" +
				"margin:-5px 0 -6px" +
			"}" +
			"span.menu_span, a.menu_item, a.menu_item_des {" +
				"border:1px solid transparent;" +
				"border-radius:3px" +
			"}" +
			"span.menu_span {" +
				"display:inline-block;" +
				"padding:3px 8px;" +
				"border-radius:5px" +
			"}" +
			"span.menu_span:hover {" +
				"border-color:" + menuEstilo["menu_item"]["hover"]["border"] + ";" +
				"background:" + menuEstilo["menu_item"]["hover"]["background"] +
			"}" +
			"span.menu_span:active {" +
				"border-color:" + menuEstilo["menu_item"]["active"]["border"] + ";" +
				"background:" + menuEstilo["menu_item"]["active"]["background"] +
			"}" +
			"span.menu_span a {" +
				"color:" + menuEstilo["menu_item"]["color"] +
			"}" +
			"table.menu_tabela {" +
				"border-spacing:0;" +
				"color:inherit;" +
				"font-size:inherit" +
			"}" +
			"table.menu_tabela td {" +
				"white-space:nowrap" +
			"}" +
			"table.menu_tabela td.menu_margem {" +
				"width:19px;" +
				"border-right:1px solid " + menuEstilo["menu"]["border"] +
			"}" +
			"table.menu_tabela td.menu_texto {" +
				"padding:2px 0 2px 6px" + 
			"}" +
			"table.menu_tabela td.menu_margemFim1 {" +
				"width:4px" +
			"}" +
			"table.menu_tabela td.menu_margemFim2 {" +
				"width:14px" +
			"}" +
			"table.menu_tabela td.menu_open {" +
				"font-size:10px" +
			"}" +
			"table.menu_tabela td.menu_atalho, table.menu_tabela td.menu_open {" +
				"text-align:right" +
			"}" +
		"</style>" +
		"<style type = 'text/css' id = 'menu_delHover'></style>" +
		"<style type = 'text/css' id = 'menu_alt'></style>";
	}
	
	this.callLoad = function() {
		menuResCorpo = document.body.innerHTML;
		document.head.innerHTML += menuEstiloCriar();
		menuLoad();
		setTimeout(function() {
			var erroMsg = "Ocorreu um erro ao instanciar os atalhos.\n";
			if (!menuErrAtalho) {
				var atal = new Array();
				var erro = false;
				for (x in menuTesteCombo) {
					if (atal.indexOf(menuTesteCombo[x].join(",")) == -1) atal[atal.length] = menuTesteCombo[x].join(",");
					else erro = true;
				}
				if (!erro) {
					combinarTeclas = menuTesteCombo;
					comandos = new CombinarTeclas(combinarTeclas);
				} else {
					menuErrAtalho = true;
					console.error(erroMsg + "Há atalhos repetidos.");
				}
			} else console.error(erroMsg + "Um ou mais códigos de tecla não existem.");
		}, 200);
	}
	
	this.resize = function() {
		menuFechar();
		menuLoad();
	}
	
	this.keyDown = function(e, event) {
		if (!menuErrAtalho) comandos.executarFuncao(e, event.keyCode);
		var span, aux, lista;
		var feito = false;
		var sel = menuSelecionadoSub.toString().split("_");
		if (document.getElementById("menu_alt").innerHTML != "") {
			for (var i = 0; i < menuAtalSub.length; i++) {
				if (menuCod[event.keyCode] == menuAtalSub[i] && menuVisiveis.indexOf(menuAtalSubC[i]) > -1) {
					feito = true;
					funcao(menuAtalSubF[i]);
				}
			}
			for (var i = 0; i < menuAtal.length; i++) {
				if (menuCod[event.keyCode] == menuAtal[i].toUpperCase() && !feito) {
					if (menuNoF[i] !== undefined) {
						feito = true;
						funcao(menuNoF[i]);
					} else if (menuListaBlock.indexOf(i) == -1) {
						if (menuSelecionado != i || (menuVisiveis.length == 0 && menuLib[i]["filhos"].length > 0)) {
							menuCallAbrir(i, true, -1);
							mostrando = true;
						} else menu.fim();
					} else if (menuSelecionado != i) menuCallAbrir(i, true, -1);
					else menu.fim();
				}
			}
		}
		if (feito || event.keyCode == 13 || event.keyCode == 18 || event.keyCode == 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
			e.preventDefault();
			menuTeclado = true;
		}
		if (!feito && !(menuListaBlock.indexOf(menuSelecionado) > -1 && (event.keyCode == 13 || event.keyCode == 38 || event.keyCode == 40))) {
			if ((event.keyCode == 38 || event.keyCode == 40) && menuSelecionadoSub != "") {
				if (mostrando) {
					for (var i = 0; i < sel.length; i++) sel[i] = parseInt(sel[i]);
					sel[menuNivel] += event.keyCode - 39;
					var continuar = true;
					if (sel[menuNivel] < 0) {
						var indicador = menuSelecionadoSub.split("_");
						if (indicador.length <= 2) {
							sel[menuNivel] = 0;
							continuar = false;
						} else sel[menuNivel] = menuNivelLim;
					} else if (sel[menuNivel] > menuNivelLim) sel[menuNivel] = 0;
					if (continuar) {
						if (menuEscId > -1) {
							verMenu("menu_submenu" + menuEscId, true);
							sel[menuNivel] = 0;
							menuEscId = -1;
						}
						menuOverSub(sel);
						for (var i = document.getElementsByClassName("menu_item").length - 1; i >= 0; i--) menuRecol(i, sel, "");
						for (var i = document.getElementsByClassName("menu_item_des").length - 1; i >= 0; i--) menuRecol(i, sel, "");
					} else {
						verMenu("menu_submenu" + indicador[0], false);
						mostrando = false;
					}
				} else if (event.keyCode == 40) {
					menuCallAbrir(parseInt(menuSelecionadoSub.split("_")[0]), true, -1);
					mostrando = true;
				}
			} else if (event.keyCode == 18) {
				mostrando = true;
				if (!menuAberto) {
					menuAtal = new Array();
					for (var i = 0; i < menuLib.length; i++) {
						lista = menuLib[i];
						if (lista["letraAlt"] !== undefined) {
							span = lista["texto"].substring(0, lista["letraAlt"]);
							menuAtal[i] = lista["texto"].substring(lista["letraAlt"], lista["letraAlt"] + 1);
							span += "<u>" + menuAtal[i] + "</u>";
							span += lista["texto"].substring(lista["letraAlt"] + 1);
							document.getElementById("menu_m" + i).innerHTML = span;
						} else menuAtal[i] = "-1";
					}
					document.getElementById("menu_alt").innerHTML = "span.menu_letraAtal{text-decoration:underline}";
					menuCallAbrir(0, true, -1);
				} else menu.fim();
			} else if (event.keyCode == 27) {
				if (menuEscId == -1 && mostrando && menuVisiveis.length > 0) {
					lista = document.getElementsByClassName("menu_submenu");
					for (var i = 0; i < lista.length; i++) document.getElementsByClassName("menu_submenu")[i].style.display = "none";
					menuVisiveis = new Array();
					menuEscId = menuSelecionado;
					menuECom = false;
					mostrando = false;
				} else menu.fim();
			} else if (menuAberto) {
				if (event.keyCode == 13) {
					if (mostrando) {
						if (menuECom) {
							aux = menuLib[sel[0]];
							for (var i = 1; i < sel.length; i++) aux = aux["filhos"][sel[i]];
							if (aux["funcao"] !== undefined && !aux["desativado"]) funcao(aux["funcao"]);
							else if (menuHasChild) menuProx(sel);
						} else if (!menuHasChild) callNoF();
						else menuProx(sel);
					} else if (menuLib[menuSelecionado]["filhos"].length > 0) {
						menuSelecionar(0);
						mostrando = true;
					} else callNoF();
				} else if (event.keyCode == 37 || event.keyCode == 39) {
					if (mostrando) {
						if (!menuHasChild || (event.keyCode == 39 && menuLast)) menuSelecionar(event.keyCode - 38);
						else if (event.keyCode == 37) {
							aux = new Array();
							for (var i = 0; i < sel.length - 1; i++) aux[i] = sel[i];
							sel = aux;
							if (sel.length > 1) {
								menuOverSub(sel);
								verMenu("menu_submenu" + sel.join("_"), false);
							} else menuSelecionar(-1);
						} else {
							menuProx(sel);
							try {
								verMenu("menu_submenu" + sel.join("_"), false);
								aux = new Array();
								for (var i = 0; i < sel.length - 1; i++) aux[i] = sel[i];
								sel = aux;
								verMenu("menu_submenu" + sel.join("_"), true);
							} catch(err) {}
						}
					} else {
						menuSelecionar(event.keyCode - 38);
						verMenu("menu_submenu" + menuSelecionadoSub.split("_")[0], false);
					}
				}
			}
		} else if (menuListaBlock.indexOf(menuSelecionado) > -1 && event.keyCode == 13) callNoF();
	}
	
	this.keyUp = function(event) {
		try {
			comandos.retirar(event.keyCode);
		} catch(err) {}
	}
	
	this.clique = function(e) {
		if (!document.getElementById("menu").contains(e.target) && menuAberto) {
			menuFechar();
			menu.fim();
		}
	}
	
	this.exec = function(id) {
		var executar = !menuAberto;
		menu.fim();
		if (executar) {
			var fun = new Function(menuNoF[id]);
			fun();
		}
	}
	
	this.abrir = function(id, clique, evento) {
		if (!menuAberto || evento > -1) {
			menuFechar();
			for (var i = 0; i < document.getElementsByClassName("menu_span").length; i++) {
				if (i == id) {
					document.getElementsByClassName("menu_span")[i].style.borderColor = menuEstilo["menu_item"]["active"]["border"];
					document.getElementsByClassName("menu_span")[i].style.background = menuEstilo["menu_item"]["active"]["background"];
				}
			}
			if (document.getElementById("menu_submenu" + id).innerHTML != "") verMenu("menu_submenu" + id, true);
			menuSelecionado = id;
			menuSelecionadoSub = menuSelecionado + "_0";
			menuNivel = 1;
			if (evento > -1) {
				var resultado = "a.menu_item:hover{border-color:transparent;background:none}" +
					"a.menu_item_des:hover{border-color:transparent;background:none}";
				document.getElementById("menu_delHover").innerHTML = resultado;
				setTimeout(function() {
					menuAberto = true;
					menuOverSub([id, 0]);
				}, 50);
			} else {
				menuAberto = true;
				menuECom = false;
				document.getElementById("menu_delHover").innerHTML = "";
			}
		} else if (clique && id == menuSelecionado) menu.fim();
		else menuOver(id);
		var hasF = true;
		if (menuLib[id]["funcao"] !== undefined && menuLib[id]["funcao"] != "") hasF = false;
		else if (menuLib[id]["funcao"] == "") hasF = !menuLib[id]["desativado"];
		if (!hasF) {
			var lista = document.getElementsByClassName("menu_submenu");
			for (var i = 0; i < lista.length; i++) document.getElementsByClassName("menu_submenu")[i].style.display = "none";
			menuVisiveis = new Array();
			menuEscId = menuSelecionado;
			menuECom = false;
			mostrando = false;
			if (menuListaBlock.indexOf(menuSelecionado) == -1) menuListaBlock[menuListaBlock.length] = menuSelecionado;
		}
	}
	
	this.manterAberto = function(id) {
		if (!menuTeclado) menuManterAberto(id);
		else menuTeclado = false;
	}
	
	this.over = function(id) {
		if (menuAberto) {
			menuAberto = false;
			menu.abrir(id, false, -1);
		}
	}
	
	this.overSub = function(id) {
		menuTeclado = false;
		menuOverSub(id);
	}
	
	this.fim = function() {
		menuFechar();
		menuTeclado = false;
		for (var i = 0; i < menuLib.length; i++) document.getElementById("menu_m" + i).innerHTML = menuLib[i]["texto"];
		document.getElementById("menu_alt").innerHTML = "";
	}
	
	this.ativacao = function(id, ativo) {
		var arr = id.split("_");
		if (arr.length > 1) {
			var aux = menuLib[arr[0]]["filhos"];
			for (var i = 1; i < arr.length - 1; i++) aux = aux[arr[i]]["filhos"];
			aux = aux[arr[arr.length - 1]];
			aux["desativado"] = !ativo;
			menuListaDesativados = new Array();
		} else {
			menuLib[arr[0]]["desativado"] = !ativo;
			if (menuLib[arr[0]]["funcao"] === undefined) menuLib[arr[0]]["funcao"] = "";
		}
		menuLoad();
	}
}

//Aqui termina o código PRINCIPAL