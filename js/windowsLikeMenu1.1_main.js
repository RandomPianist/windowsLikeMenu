/*
WINDOWS LIKE MENU 1.1 © 2023
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

let WLM_letra_auto = false;

function Menu(dados) {
	let CT_menu;
	let menuLib = dados;
	let warnG    = "";
	let erroG    = "";
	let errLocal = "";
	let letraAltArr = new Array();
	let elArr       = new Array();
	
	const menuValidar = function(arr, primeiro) {
		if (!erroG) {
			if (arr === undefined) {
				erroG = "As informações foram declaradas incorretamente";
				errLocal = "";
			}
		}
		if (!erroG) {
			if (arr.constructor !== Array) {
				erroG = "As informações foram declaradas incorretamente";
				errLocal = "";
			}
		}
		if (!erroG) {
			arr.forEach((el) => {
				if (!erroG) {
					if (typeof el != "object") {
						erroG = "Cada elemento deve ser um objeto";
						errLocal = "";
					}
				}
				if (!erroG) {
					if (el.texto === undefined) {
						erroG = "Há um elemento com título faltante";
						errLocal = "";
					}
				}
				if (!erroG) {
					if (typeof el.texto != "string") {
						erroG = "O texto de cada elemento deve do tipo string.\n" + el.texto + " não reconhecido";
						errLocal = "";
					}
				}
				if (!erroG) {
					if (!el.texto) {
						erroG = "Há um elemento com título em branco";
						errLocal = "";
					}
				}
				if (!erroG) errLocal = el.texto;
				for (x in el) {
					if (["texto", "letraAlt", "desativado", "funcao", "filhos", "destacado", "atalho"].indexOf(x) == -1) {
						warnG = 'Elemento "' + x + '" não conhecido.\nLocal: "' + errLocal + '"';
					}
				}
				if (!erroG) {
					if (["undefined", "number"].indexOf(typeof el.letraAlt) == -1) {
						erroG = 'O parâmetro "letraAlt", se declarado, deve ser do tipo number.\n' + el.letraAlt + " não reconhecido";
					}
				}
				if (!erroG) {
					if (!WLM_letra_auto) {
						if (typeof el.letraAlt == "number") {
							if (parseInt(el.letraAlt) != el.letraAlt) {
								erroG = 'O parâmetro "letraAlt", se declarado, deve ser um inteiro.\n' + el.letraAlt + " não reconhecido";
							}
							if (!erroG) {
								if (el.letraAlt + 1 > el.texto.length) erroG = "O índice da letra de atalho excede o limite " + el.texto.length;
							}
							if (!erroG) {
								let letra = el.texto.substring(el.letraAlt, el.letraAlt + 1).toUpperCase();
								if (letraAltArr.indexOf(letra) > -1) {
									erroG = 'Ocorreu um erro ao instanciar os atalhos na raiz.\nHá repetições no parâmetro "letraAlt".\nLocais: "' +
										elArr[letraAltArr.indexOf(letra)] + '" e "' + el.texto + '"';
									errLocal = "";
								} else {
									letraAltArr.push(letra);
									elArr.push(el.texto);
								}
							}
						}
					} else {
						let cont = 0;
						do {
							var letra = el.texto.substring(cont, cont + 1).toUpperCase();
							cont++;
						} while (letraAltArr.indexOf(letra) > -1 && cont < el.texto.length);
						letraAltArr.push(letra);
						el.letraAlt = cont - 1;
						if (cont >= el.texto.length) {
							erroG = "Não foi possível incluir os atalhos automáticos";
							errLocal = "";
						}
					}
				}
				if (!erroG) {
					if (el.filhos === undefined && el.funcao === undefined) erroG = "Para cada elemento deve haver filhos ou uma função";
				}
				if (!erroG) {
					if (el.filhos !== undefined && el.funcao !== undefined) erroG = "Um elemento não pode possuir filhos e uma função ao mesmo tempo";
				}
				if (!erroG) {
					if (el.filhos !== undefined) {
						if (el.filhos.constructor !== Array) erroG = "Os filhos devem seguir a mesma estrutura do pai";
					}
				}
				if (!erroG) {
					if (el.funcao !== undefined) {
						if (typeof el.funcao != "function") erroG = "Há um erro na função";
					}
				}
				if (!erroG) {
					if (["undefined", "boolean"].indexOf(typeof el.destacado) > -1) {
						if (el.destacado !== undefined && primeiro) erroG = 'O parâmetro "destacado" não pode ser declarado em elementos da raiz do menu';
					} else erroG = 'O parâmetro "destacado", se declarado, deve ser do tipo boolean';
				}
				if (!erroG) {
					if (["undefined", "boolean"].indexOf(typeof el.desativado) == -1) {
						erroG = 'O parâmetro "desativado", se declarado, deve ser do tipo boolean';
					}
				}
				if (!erroG) {
					if (el.atalho !== undefined) {
						if (el.atalho.constructor !== Array) erroG = 'O parâmetro "atalho", se declarado, deve ser um Array';
						else if (el.funcao === undefined) warnG = 'Há um atalho que não aponta para função alguma.\nLocal: "' + errLocal + '"';
					}
				}
				if (!erroG) {
					if (el.filhos !== undefined) menuValidar(el.filhos, false);
				}
			});
		}
	}
	
	if (dados !== undefined) {
		if (dados.constructor === Array) menuValidar(menuLib, true);
		else erroG = "As informações foram declaradas incorretamente";
	} else erroG = "As informações não foram declaradas";
	if (erroG != "") {
		if (errLocal) erroG += '.\nLocal: "' + errLocal + '"';
		console.error(
			"A classe Menu não pôde ser construída devido a uma falha no parâmetro.\n" +
			erroG + "."
		);
	} else if (warnG) console.warn(warnG);

	if (!erroG) {
		menuLib.forEach((el) => {
			if (el.filhos === undefined) el.filhos = new Array();
			if (el.filhos && el.funcao === undefined) el.funcao = "";
		});
	}
	
	const menuEstilo = {
		menu : {
			border : "#99a",
			background : "linear-gradient(#e1e6f6, #d4dbee, #e1e6f6)"
		},
		menu_item : {
			color : "#000",
			hover : {
				border : "#99a",
				background : "linear-gradient(#d4dbee, #e1e6f6, #d4dbee)"
			},
			active : {
				border : "#99a",
				background : "linear-gradient(#999, #c8cddc, #d6d6ee)"
			}
		},
		submenu : {
			border : "#99a",
			background : "#eee"
		},
		submenu_item : {
			on : {
				color : "#000",
				hover : {
					border : "#99a",
					background : "linear-gradient(#d4dbee, #e1e6f6, #d4dbee)"
				}
			},
			off : {
				color : "#666",
				hover : {
					border : "#ccc",
					background : "linear-gradient(#eee, #ddd)"
				}
			}
		},
		shadow : "#888"
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
	
	const that = this;
	
	let menuResCorpo = "";
	
	let menuTesteCombo       = new Array();
	let menuNoF              = new Array();
	let menuAtal             = new Array();
	let menuAtalSub          = new Array();
	let menuAtalSubF         = new Array();
	let menuAtalSubC         = new Array();
	let menuAtalSubT         = new Array();
	let menuVisiveis         = new Array();
	let menuFixar            = new Array();
	let menuListaDesativados = new Array();
	let menuListaBlock       = new Array();
	let menuListaF           = new Array();
	
	let menuAberto    = false;
	let menuHasChild  = false;
	let menuLast      = true;
	let menuECom      = false;
	let menuErrAtalho = false;
	let menuTeclado   = false;
	let mostrando     = true;
	
	let menuSelecionado    = 0;
	let menuNivel          = 0;
	let menuNivelLim       = 0;
	let menuSelecionadoSub = 0;
	let menuEscId          = -1;
	
	const menuLoad = function() {
		menuNoF        = new Array();
		menuAtalSub    = new Array();
		menuAtalSubF   = new Array();
		menuAtalSubC   = new Array();
		menuAtalSubT   = new Array();
		menuListaF     = new Array();
		menuVisiveis   = new Array();
		menuFixar      = new Array();
		menuListaBlock = new Array();
		let res = document.getElementById("menuRes");
		let resultado = menuCriar(menuLib, false, 0, 1, [], []);
		if (res === null) {
			document.body.innerHTML = "<div id = 'menuDiv'>" + resultado + "</div>" +
			"<div id = 'menuCobrir'></div>" +
			"<div class = 'menuRes' id = 'menuRes'>" + menuResCorpo + "</div>";
			res = document.getElementById("menuRes");
		} else document.getElementById("menuDiv").innerHTML = resultado;
		res.style.height = (window.innerHeight - 28) + "px";
	}
	
	const menuColorir = function(id, ativo) {
		const legenda = ativo ? "on" : "off";
		const estilo = document.getElementById(id).style;
		const preencher = menuEstilo.submenu_item[legenda].hover;
		estilo.borderColor = preencher.border;
		estilo.background = preencher.background;
	}
	
	const menuRecol = function(id, sel, reg) {
		const el = document.getElementsByClassName("menu_item")[id];
		["menuC", "menu_abrir"].forEach((tipo) => {
			if (el.id == tipo + sel.join("_")) {
				menuColorir(el.id, menuListaDesativados.indexOf(sel.join("_")) == -1);
				reg = el.id;
			} else if (reg == "") {
				el.style.borderColor = "transparent";
				el.style.background  = "none";
			}
		});
		let aux = sel[0];
		for (let i = 1; i < sel.length - 1; i++) {
			aux += "_" + sel[i];
			menuColorir("menu_abrir" + aux, true);
		}
	}

	const menuCallAbrir = function(id, clique, evento) {
		that.open(id, true, event.keyCode);
		setTimeout(function() {
			for (let i = 0; i < menuLib.length; i++) {
				let estilo = document.getElementById("menu_m" + i).style;
				if (i == id) {
					estilo.borderColor = menuEstilo.menu_item.active.border;
					estilo.background  = menuEstilo.menu_item.active.background;
				} else {
					estilo.borderColor = "transparent";
					estilo.background  = "none";
				}
			}
		}, 1);
	}
	
	const verMenu = function(id, visivel) {
		document.getElementById(id).style.display = visivel ? "block" : "none";
		id = id.substring(12);
		if (!visivel && menuVisiveis.indexOf(id) > -1) {
			let aux = new Array();
			menuVisiveis.forEach((el) => {
				if (el != id) aux.push(el);
			});
			menuVisiveis = aux;
		} else if (visivel) menuVisiveis.push(id);
	}
	
	const menuEstiloLimparMain = function(classe) {
		Array.from(document.getElementsByClassName(classe)).forEach((el) => {
			let estilo = el.style;
			estilo.removeProperty("border-color");
			estilo.removeProperty("background");
		});
	}
	
	const menuSubEsconder = function() {
		Array.from(document.getElementsByClassName("menu_submenu")).forEach((el) => {
			el.style.display = "none";
		});
	}
	
	const menuFechar = function() {
		menuSubEsconder();
		menuVisiveis = new Array();
		menuEstiloLimparMain("menu_span");
		menuEstiloLimpar();
		menuAberto   = false;
		menuHasChild = false;
		menuLast     = true;
		menuECom     = false;
		menuSelecionado    = 0;
		menuNivel          = 0;
		menuNivelLim       = 0;
		menuSelecionadoSub = 0;
		menuEscId          = -1;
		document.getElementById("menu_delHover").innerHTML = "";
	}
	
	const menuEstiloLimpar = function() {
		menuEstiloLimparMain("menu_item");
		menuEstiloLimparMain("menu_item_des");
	}

	const menuOverSub = function(id) {
		menuEstiloLimpar();
		let aux = id[0];
		let aux2 = menuLib[id[0]];
		for (let i = 1; i < id.length - 1; i++) {
			aux += "_" + id[i];
			aux2 = aux2.filhos[id[i]];
			menuColorir("menu_abrir" + aux, true);
		}
		for (let i = 0; i < aux2.filhos.length; i++) {
			if (aux2.filhos[i].filhos !== undefined) verMenu("menu_submenu" + aux + "_" + i, false);
		}
		if (aux2.filhos.length) {
			if (aux2.filhos[id[id.length - 1]].filhos !== undefined) {
				if (menuListaDesativados.indexOf(id.join("_")) == -1) {
					menuHasChild = true;
					menuLast     = false;
					if (!menuTeclado) verMenu("menu_submenu" + id.join("_"), true);
					Array.from(document.getElementsByClassName("menu_submenu")).forEach((el) => {
						if (el.id.substring(12).split("_").length > id.length) verMenu(el.id, false);
					});
					try {
						menuColorir("menu_abrir" + id.join("_"), true);
					} catch(err) {
						menuHasChild = false;
					}
				} else menuColorir("menu_abrir" + id.join("_"), false);
			} else {
				menuLast = true;
				const ativo = menuListaDesativados.indexOf(id.join("_")) == -1;
				if (ativo) menuECom = true;
				menuHasChild = false;
				menuColorir("menuC" + id.join("_"), ativo);
			}
			menuSelecionadoSub = id.join("_");
			aux = menuLib[id[0]].filhos;
			for (let i = 1; i < id.length - 1; i++) aux = aux[id[i]].filhos;
			menuNivelLim = aux.length - 1;
			menuNivel = id.length - 1;
		}
	}

	const menuManterAberto = function(id) {
		menuSubEsconder();
		menuVisiveis = new Array();
		lista        = new Array();
		for (let i = 0; i < id.length; i++) {
			let aux = new Array;
			for (let j = 0; j <= i; j++) aux[j] = id[j];
			lista[i] = aux.join("_");
		}
		for (let i = 0; i < lista.length - 1; i++) verMenu("menu_submenu" + lista[i], true);
		menuOverSub(id);
	}
	
	const menuProx = function(id) {
		verMenu("menu_submenu" + id.join("_"), true);
		id.push(0);
		menuOverSub(id);
	}
	
	const menuSelecionar = function(novo) {
		menuSelecionado += novo;
		if (menuSelecionado < 0) menuSelecionado = menuLib.length - 1;
		else if (menuSelecionado >= menuLib.length) menuSelecionado = 0;
		menuCallAbrir(menuSelecionado, true, event.keyCode);
	}
	
	const funcao = function(fn) {
		fn();
		that.end();
	}
	
	const callNoF = function() {
		if (menuNoF[menuSelecionado] === undefined) setTimeout(function() {
			that.end();
		}, 150);
		else funcao(menuNoF[menuSelecionado]);
	}
	
	const corrigeEstilo = function() {
		try {
			let estilo = document.getElementById("menuRes").style;
			if (menuAberto) estilo.zIndex = 1;
			else estilo.removeProperty("z-index");
		} catch(err) {}
	}
	
	let menuCriar = function(arr, sub, recuo, nivel, idsub, larguras) {
		let aux, span;
		let cont = 0;
		let maior = 0;
		let soma_larguras = 0;
		let margem = 20;
		let nomeMenu = "";
		arr.forEach((el) => {
			if (el.texto.length > maior) maior = el.texto.length;
		});
		let largura = maior * ((maior * -0.0631111) + 8.4333333);
		aux = 4;
		arr.forEach((el) => {
			if (el.filhos !== undefined) aux = 2;
		});
		maior = aux;
		arr.forEach((el) => {
			if (el.atalho === undefined) cont++;
			else if (menuAtalho(el.atalho).length > maior) maior = menuAtalho(el.atalho).length;
		});
		if (cont == arr.length) {
			cont = 0;
			arr.forEach((el) => {
				if (el.filhos === undefined) cont++;
			});
		}
		largura += maior * ((maior * -0.0631111) + 8.4333333);
		largura *= 64 / 65;
		if (maior > aux || cont == 0) largura += parseInt(margem * 1.5);
		larguras.forEach((lg) => {
			soma_larguras += menuLimCem(lg);
		});
		if (
			recuo != 0 &&
			menuFixar.indexOf(idsub[0] + "@" + nivel) == -1 &&
			soma_larguras + menuLimCem(largura) > window.innerWidth
		) recuo = (menuLimCem(largura) * -1) - parseInt(margem / 4);
		else if (idsub.length) menuFixar[menuFixar.length] = idsub[0] + "@" + nivel;
		if (sub) {
			if (recuo < 0) recuo += 4;
			if (cont >= arr.length) {
				maior = 0;
				arr.forEach((el) => {
					if (el.texto.length > maior) maior = el.texto.length;
				});
				const larguraAux = parseInt(1.0775194 * (5.5813953 * maior + 33.6744186) - 12.0465116) + margem;
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
			if (recuo < 0) aux += ";box-shadow:-2px 2px 2px 1px " + menuEstilo.shadow;
			if (nivel == 2) aux += ";margin-top:2px";
		} else aux = "menu' id = 'menu";
		largura -= parseInt(margem * 1.5);
		resultado = "<ul class = '" + aux + "'";
		if (sub) {
			nomeMenu = idsub.join("_");
			resultado += "id = 'menu_submenu" + nomeMenu + "'";
		}
		resultado += ">";
		for (let i = 0; i < arr.length; i++) {
			let menuC = new Array();
			let classe = "menu_item";
			let hasF = true;
			if (nivel == 1) {
				if (arr[i].funcao !== undefined && arr[i].funcao != "") hasF = false;
				else if (arr[i].funcao == "") hasF = !arr[i].desativado;
			}
			if (arr[i].desativado) classe += "_des";
			let funcaoCAux = "";
			if (typeof arr[i].funcao == "function") {
				menuListaF.push(arr[i].funcao);
				funcaoCAux = "WLM.exec(" + (menuListaF.length - 1) + ", false)";
			}
			let funcaoC = !arr[i].desativado ? "javascript:WLM.end();" + funcaoCAux : "#";
			for (let j = 0; j < nivel - 1; j++) menuC.push(idsub[j]);
			menuC.push(i);
			if (arr[i].destacado) resultado += "<li class = 'menu_destaque'>" +
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
			if (arr[i].filhos !== undefined) {
				if (sub) {
					recuo = largura + parseInt(margem * 1.5);
					if (i == 0) larguras.push(recuo);
					idsub = menuC;
					if (arr[i].desativado) menuListaDesativados.push(idsub.join("_"));
					resultado += ">" +
						"<a onmousemove = 'WLM.overSub([" + idsub.join(",") + "]);' id = 'menu_abrir" + idsub.join("_") + "' class = '" + classe + "'>" +
							"<table class = 'menu_tabela'>" +
								"<tr>" +
									"<td class = 'menu_margem'>" +
										"&nbsp;" +
									"</td>" +
									"<td class = 'menu_texto'>" +
										menuCalcAtal(arr[i], idsub.join("_")) +
									"</td>" +
									"<td class = 'menu_open'>" +
										"&#9658;" +
									"</td>" +
									"<td class = 'menu_margemFim1'>" +
										"&nbsp;" +
									"</td>" +
								"</tr>" +
							"</table>" +
						"</a>" +
					menuCriar(arr[i].filhos, true, recuo, nivel + 1, idsub, larguras);
				} else {
					if (!hasF) {
						var fn = "WLM.exec(" + i + ", true)";
						if (arr[i].desativado === undefined || !arr[i].desativado) {
							menuNoF[i] = arr[i].funcao;
							if (arr[i].atalho !== undefined) menuTesteCombo.push([arr[i].atalho, arr[i].funcao]);
						}
					} else var fn = "WLM.open(" + i + ", true, -1)";
					resultado += ">" +
						"<span class = 'menu_span' onmouseover = 'WLM.over(" + i + ");' onclick = '" + fn + "' id = 'menu_m" + i + "'>" +
							"<a href = '#'>" +
								menuEspacamento(arr[i].texto) +
							"</a>" +
						"</span>" +
					menuCriar(arr[i].filhos, true, 0, 2, [i], []);
				}
			} else {
				span = menuCalcAtal(arr[i], nomeMenu);
				if (arr[i].desativado) menuListaDesativados.push(menuC.join("_"));
				resultado += ">" + 
					"<a " +
						"href = '" + funcaoC + "'" +
						"class = '" + classe + "'" +
						"onmousemove = 'WLM.keepOpen([" + menuC.join(",") + "])'" +
						"id = 'menuC" + menuC.join("_") +
					"'>" +
						"<table class = 'menu_tabela'>" +
							"<tr>" +
								"<td class = 'menu_margem'>" +
									"&nbsp;" +
								"</td>" +
								"<td class = 'menu_texto'>" +
									span +
								"</td>";
				if (arr[i].atalho !== undefined) {
					menuTesteCombo.push([arr[i].atalho, arr[i].funcao]);
					resultado += "<td class = 'menu_atalho'>" +
						menuEspacamento(menuAtalho(arr[i].atalho)) +
					"</td>" +
					"<td class = 'menu_margemFim2'>" +
						"&nbsp;" +
					"</td>";
				}
				resultado += "</tr></table></a>";
			}
			resultado += "</li>";
		}
		resultado += "</ul>";
		return resultado;
	}

	let menuCalcAtal = function(lista, nome) {
		let span = "<span>";
		const letra = lista.letraAlt;
		if (letra !== undefined && !lista.desativado) {
			span = lista.texto.substring(0, letra);
			const buscar = lista.texto.substring(letra, letra + 1);
			const buscarUp = buscar.toUpperCase();
			if (menuAtalSub.indexOf(buscarUp) > -1) {
				console.error(
					'Ocorreu um erro ao instanciar os atalhos.\nHá repetições no parâmetro "letraAlt".\nLocais: "' +
					menuAtalSubT[menuAtalSub.indexOf(buscarUp)] + '" e "' + lista.texto + '".'
				);
				menuAtalSub  = new Array();
				menuAtalSubC = new Array();
				menuAtalSubF = new Array();
				menuAtalSubT = new Array();
				setTimeout(function() {
					Array.from(document.getElementsByClassName("menu_letraAtal")).forEach((el) => {
						el.style.textDecoration = "none";
					});
				}, 0);
			} else {
				menuAtalSub.push(buscarUp);
				menuAtalSubC.push(nome);
				menuAtalSubF.push(lista.funcao);
				menuAtalSubT.push(lista.texto);				
			}
			span += "</span><span class = 'menu_letraAtal'>" + buscar + "</span><span>";
			span += lista.texto.substring(letra + 1);
		} else span += menuEspacamento(lista.texto);
		span += "</span>";
		return span;
	}
	
	let menuLimCem = function(val) {
		if (val > 0 && val < 100) val = 100;
		return val;
	}

	let menuEspacamento = function(texto) {
		while (texto.indexOf(" ") > -1) texto = texto.replace(" ", "&nbsp");
		return texto;
	}

	let menuAtalho = function(arr) {
		let resultado = new Array();
		arr.forEach((el) => {
			resultado.push(menuCod[el]);
			if (menuCod[el] === undefined) menuErrAtalho = true;
		});
		return resultado.join("+");
	}
	
	this.load = function() {
		if (!erroG) {
			menuResCorpo = document.body.innerHTML;
			document.head.innerHTML += "<style type = 'text/css'>" +
				"body {" +
					"margin:0;" +
					"overflow:hidden" +
				"}" +
				".menuRes, .menu, .menu .menu_submenu, #menuCobrir {" +
					"position:absolute;" +
				"}" +
				".menu, .menu .menu_submenu, .menu .menu_tabela td {" +
					"padding:0;" +
					"margin:0" +
				"}" +
				".menu, .menuRes, .menu .menu_tabela, #menuCobrir {" +
					"width:100%" +
				"}" +
				".menuRes {" +
					"overflow-y:auto;" +
					"overflow-x:hidden;" +
					"z-index:-1;" +
					"margin-top:27px" +
				"}" +
				".menu {" +
					"height:25px;" +
					"padding-top:1px;" +
					"border-bottom:1px solid " + menuEstilo.menu.border + ";" +
					"background:" + menuEstilo.menu.background + ";" +
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
					"color:" + menuEstilo.submenu_item.on.color + ";" +
					"cursor:default" +
				"}" +
				".menu li a.menu_item_des {" +
					"color:" + menuEstilo.submenu_item.off.color +
				"}" +
				".menu .menu_submenu, #menuCobrir {" +
					"display:none" +
				"}" +
				".menu .menu_submenu .menu_submenu {" +
					"top:-2px" +
				"}" +
				".menu .menu_submenu {" +
					"top:24px;" +
					"left:0px;" +
					"padding:4px 0;" +
					"border-color:" + menuEstilo.submenu.border + ";" +
					"border-style:solid;" +
					"border-width:0 1px 1px;" +
					"box-shadow:1px 2px 2px 1px " + menuEstilo.shadow + ";" +
					"background:" + menuEstilo.submenu.background + ";" +
					"list-style-type:none;" +
					"cursor:default" +
				"}" +
				".menu .menu_submenu li {" +
					"display:block;" +
					"margin:-2px 0" +
				"}" +	
				".menu .menu_submenu .menu_destaque {" +
					"margin:-5px 0 -6px" +
				"}" +
				".menu span.menu_span, a.menu_item, a.menu_item_des {" +
					"border:1px solid transparent;" +
					"border-radius:3px" +
				"}" +
				".menu span.menu_span {" +
					"display:inline-block;" +
					"padding:3px 8px;" +
					"border-radius:5px" +
				"}" +
				".menu span.menu_span:hover {" +
					"border-color:" + menuEstilo.menu_item.hover.border + ";" +
					"background:" + menuEstilo.menu_item.hover.background +
				"}" +
				".menu span.menu_span:active {" +
					"border-color:" + menuEstilo.menu_item.active.border + ";" +
					"background:" + menuEstilo.menu_item.active.background +
				"}" +
				".menu span.menu_span a {" +
					"color:" + menuEstilo.menu_item.color +
				"}" +
				".menu table.menu_tabela {" +
					"border-spacing:0;" +
					"color:inherit;" +
					"font-size:inherit" +
				"}" +
				".menu table.menu_tabela td {" +
					"white-space:nowrap" +
				"}" +
				".menu table.menu_tabela td.menu_margem {" +
					"width:19px;" +
					"border-right:1px solid " + menuEstilo.menu.border +
				"}" +
				".menu table.menu_tabela td.menu_texto {" +
					"padding:2px 0 2px 6px" + 
				"}" +
				".menu table.menu_tabela td.menu_margemFim1 {" +
					"width:4px" +
				"}" +
				".menu table.menu_tabela td.menu_margemFim2 {" +
					"width:14px" +
				"}" +
				".menu table.menu_tabela td.menu_open {" +
					"font-size:10px" +
				"}" +
				".menu table.menu_tabela td.menu_atalho, table.menu_tabela td.menu_open {" +
					"text-align:right" +
				"}" +
				"#menuCobrir {" +
					"height:30px" +
				"}" +
			"</style>" +
			"<style type = 'text/css' id = 'menu_delHover'></style>" +
			"<style type = 'text/css' id = 'menu_alt'></style>";
			menuLoad();
			setTimeout(function() {
				if (menuErrAtalho) console.error("Ocorreu um erro ao instanciar os atalhos.\nUm ou mais códigos de tecla não existem.");
				else CT_menu = new CombinarTeclas(menuTesteCombo);
			}, 200);
		}
	}
	
	this.resize = function() {
		if (!erroG) {
			menuFechar();
			menuLoad();
		}
	}
	
	this.keydown = function(e) {
		if (!erroG) {
			let pressionados = 0;
			if (!menuErrAtalho && !menuAberto) pressionados = CT_menu.keydown(e);
			if (pressionados < 2) {
				let span, aux, lista;
				let feito = false;
				let sel = menuSelecionadoSub.toString().split("_");
				if (document.getElementById("menu_alt").innerHTML != "") {
					for (let i = 0; i < menuAtalSub.length; i++) {
						if (menuCod[e.keyCode] == menuAtalSub[i] && !feito) {
							if (menuAtalSubF[i] === undefined) {
								sel = menuAtalSubC[i].split("_");
								let pai = new Array();
								sel.forEach((el) => {
									pai.push(el);
								});
								if (menuVisiveis.indexOf(pai.join("_")) > -1) {
									if (menuVisiveis.indexOf(menuAtalSubC[i]) > -1) verMenu("menu_submenu" + sel.join("_"), false);
									else menuProx(sel);
									feito = true;
								}
							} else if (menuVisiveis.indexOf(menuAtalSubC[i]) > -1) {
								funcao(menuAtalSubF[i]);
								feito = true;
							}
						}
					}
					for (let i = 0; i < menuAtal.length; i++) {
						if (menuCod[e.keyCode] == menuAtal[i].toUpperCase() && !feito) {
							if (menuNoF[i] !== undefined) {
								feito = true;
								funcao(menuNoF[i]);
							} else if (menuListaBlock.indexOf(i) == -1) {
								if (menuSelecionado != i || (!menuVisiveis.length && menuLib[i].filhos.length)) {
									menuCallAbrir(i, true, -1);
									mostrando = true;
								} else that.end();
							} else if (menuSelecionado != i) menuCallAbrir(i, true, -1);
							else that.end();
						}
					}
				}
				if (feito || [13, 18, 27, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
					e.preventDefault();
					menuTeclado = true;
				}
				if (!feito && (menuListaBlock.indexOf(menuSelecionado) == -1 || [13, 38, 40].indexOf(e.keyCode) == -1)) {
					if ([38, 40].indexOf(e.keyCode) > -1 && menuSelecionadoSub != "") {
						if (mostrando) {
							for (let i = 0; i < sel.length; i++) sel[i] = parseInt(sel[i]);
							sel[menuNivel] += e.keyCode - 39;
							if (sel[menuNivel] < 0) sel[menuNivel] = menuNivelLim;
							else if (sel[menuNivel] > menuNivelLim) sel[menuNivel] = 0;
							if (menuEscId > -1) {
								verMenu("menu_submenu" + menuEscId, true);
								sel[menuNivel] = 0;
								menuEscId = -1;
							}
							menuOverSub(sel);
							for (let i = document.getElementsByClassName("menu_item").length - 1; i >= 0; i--) menuRecol(i, sel, "");
							for (let i = document.getElementsByClassName("menu_item_des").length - 1; i >= 0; i--) menuRecol(i, sel, "");
						} else if (e.keyCode == 40) {
							menuCallAbrir(parseInt(menuSelecionadoSub.split("_")[0]), true, -1);
							mostrando = true;
						}
					} else if (e.keyCode == 18) {
						mostrando = true;
						if (!menuAberto) {
							menuAtal = new Array();
							for (let i = 0; i < menuLib.length; i++) {
								lista = menuLib[i];
								let letra = lista.letraAlt;
								if (letra !== undefined) {
									span = lista.texto.substring(0, letra);
									menuAtal[i] = lista.texto.substring(letra, letra + 1);
									span += "<u>" + menuAtal[i] + "</u>";
									span += lista.texto.substring(letra + 1);
									document.getElementById("menu_m" + i).innerHTML = span;
								} else menuAtal[i] = "-1";
							}
							document.getElementById("menu_alt").innerHTML = "span.menu_letraAtal{text-decoration:underline}";
							menuCallAbrir(0, true, -1);
						} else that.end();
					} else if (e.keyCode == 27) {
						if (menuEscId == -1 && mostrando && menuVisiveis.length) {
							menuSubEsconder();
							menuVisiveis = new Array();
							menuEscId = menuSelecionado;
							menuECom  = false;
							mostrando = false;
						} else that.end();
					} else if (menuAberto) {
						if (e.keyCode == 13) {
							if (mostrando) {
								if (menuECom) {
									aux = menuLib[sel[0]];
									for (let i = 1; i < sel.length; i++) aux = aux.filhos[sel[i]];
									if (aux.funcao !== undefined && !aux.desativado) funcao(aux.funcao);
									else if (menuHasChild) menuProx(sel);
								} else if (!menuHasChild) callNoF();
								else menuProx(sel);
							} else if (menuLib[menuSelecionado].filhos.length) {
								menuSelecionar(0);
								mostrando = true;
							} else callNoF();
						} else if (e.keyCode == 37 || e.keyCode == 39) {
							if (mostrando) {
								if (e.keyCode == 39 && menuLast) menuSelecionar(e.keyCode - 38);
								else if (e.keyCode == 37) {
									aux = new Array();
									for (let i = 0; i < sel.length - 1; i++) aux[i] = sel[i];
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
										for (let i = 0; i < sel.length - 1; i++) aux[i] = sel[i];
										sel = aux;
										verMenu("menu_submenu" + sel.join("_"), true);
									} catch(err) {}
								}
							} else {
								menuSelecionar(e.keyCode - 38);
								verMenu("menu_submenu" + menuSelecionadoSub.split("_")[0], false);
							}
						}
					}
				} else if (menuListaBlock.indexOf(menuSelecionado) > -1 && e.keyCode == 13) callNoF();
			}
		}
		return menuAberto;
	}
	
	this.keyup = function(e) {
		if (!erroG) try {
			CT_menu.keyup(e);
		} catch(err) {}
		corrigeEstilo();
		return menuAberto;
	}
	
	this.click = function(e) {
		if (!document.getElementById("menu").contains(e.target) && menuAberto && !erroG) that.end();
		corrigeEstilo();
	}
	
	this.exec = function(pos, noF) {
		if (noF) menuNoF[pos]();
		else menuListaF[pos]();
	}
	
	this.open = function(id, clique, evento) {
		if (!menuAberto || evento > -1) {
			const delHover = document.getElementById("menu_delHover");
			const submenu = "menu_submenu" + id;
			const lista = document.getElementsByClassName("menu_span");
			menuFechar();
			for (let i = 0; i < lista.length; i++) {
				if (i == id) {
					let estilo = lista[i].style;
					estilo.borderColor = menuEstilo.menu_item.active.border;
					estilo.background  = menuEstilo.menu_item.active.background;
				}
			} 
			if (document.getElementById(submenu).innerHTML != "") verMenu(submenu, true);
			menuSelecionado = id;
			menuSelecionadoSub = menuSelecionado + "_0";
			menuNivel = 1;
			if (evento > -1) {
				delHover.innerHTML = "a.menu_item:hover{border-color:transparent;background:none}" +
					"a.menu_item_des:hover{border-color:transparent;background:none}";
				setTimeout(function() {
					menuAberto = true;
					menuOverSub([id, 0]);
				}, 50);
			} else {
				menuAberto = true;
				menuECom = false;
				delHover.innerHTML = "";
			}
		} else if (clique && id == menuSelecionado) that.end();
		else menuOver(id);
		let hasF = true;
		if (menuLib[id].funcao !== undefined && menuLib[id].funcao != "") hasF = false;
		else if (menuLib[id].funcao == "") hasF = !menuLib[id].desativado;
		if (!hasF) {
			menuSubEsconder();
			menuVisiveis = new Array();
			menuEscId = menuSelecionado;
			menuECom = false;
			mostrando = false;
			if (menuListaBlock.indexOf(menuSelecionado) == -1) menuListaBlock[menuListaBlock.length] = menuSelecionado;
		}
	}
	
	this.keepOpen = function(id) {
		if (!menuTeclado) menuManterAberto(id);
		else menuTeclado = false;
	}
	
	this.over = function(id) {
		if (menuAberto) {
			menuAberto = false;
			that.open(id, false, -1);
		}
	}
	
	this.overSub = function(id) {
		menuTeclado = false;
		menuOverSub(id);
	}
	
	this.end = function() {
		menuFechar();
		menuTeclado = false;
		for (let i = 0; i < menuLib.length; i++) document.getElementById("menu_m" + i).innerHTML = menuLib[i].texto;
		document.getElementById("menu_alt").innerHTML = "";
	}
	
	this.ativar = function(id, ativo) {
		if (!erroG) {
			let erro = "";
			if (typeof id != "string") erro = 'O parâmetro "id" deve ser do tipo string';
			if (!erro && typeof ativo != "boolean") erro = 'O parâmetro "ativo" deve ser do tipo boolean';
			if (!erro) {
				try {
					let aviso = false;
					const arr = id.split("_");
					if (arr.length > 1) {
						let aux = menuLib[arr[0]].filhos;
						for (let i = 1; i < arr.length - 1; i++) aux = aux[arr[i]].filhos;
						aux = aux[arr[arr.length - 1]];
						if (aux.desativado != !ativo) aux.desativado = !ativo;
						else aviso = true;
						menuListaDesativados = new Array();
					} else {
						if (menuLib[arr[0]].desativado != !ativo) menuLib[arr[0]].desativado = !ativo;
						else aviso = true;
						if (menuLib[arr[0]].funcao === undefined) menuLib[arr[0]].funcao = "";
					}
					if (aviso) console.warn('O id "' + id + '" já estava ' + (!ativo ? "in" : "") + "ativo");
					menuLoad();
				} catch(err) {
					erro = document.getElementById("menu_submenu" + id) === null ? 
						'O id "' + id + '" não foi encontrado'
					:
						"Ocorreu um erro ao ativar o elemento " + id;
				}
			}
			if (erro) console.error(erro + ".");
		}
	}
}

// Aqui termina o código PRINCIPAL