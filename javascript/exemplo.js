/*
WINDOWS LIKE MENU © 2023
Desenvolvido por Reynolds Costa, no Notepad++

O uso é permitido; a comercialização, proibida.
*/

var menu = new Menu([
	{
		"texto" : "Navegar",
		"letraAlt" : 0,
		"filhos" : [
			{
				"texto" : "Instruções de uso",
				"letraAlt" : 0,
				"funcao" : "irPara(0)"
			},
			{
				"texto" : "Palavras reservadas",
				"letraAlt" : 0,
				"funcao" : "irPara(1)"
			},
			{
				"texto" : "Voltar",
				"atalho" : [36],
				"letraAlt" : 0,
				"funcao" : "irPara(2)",
				"destacar" : true
			}
		]
	},
	{
		"texto" : "Redes",
		"letraAlt" : 0,
		"filhos" : [
			{
				"texto" : "GitHub",
				"filhos" : [
					{
						"texto" : "Bibliotecas",
						"filhos" : [
							{
								"texto" : "combinarTeclas",
								"filhos" : [
									{
										"texto" : "Repositório",
										"funcao" : "irPara(3)"
									},
									{
										"texto" : "Explicação",
										"funcao" : "irPara(4)"
									}
								]
							},
							{
								"texto" : "janelaPersonalizada",
								"filhos" : [
									{
										"texto" : "Repositório",
										"funcao" : "irPara(5)"
									},
									{
										"texto" : "Explicação",
										"funcao" : "irPara(6)"
									}
								]
							},
							{
								"texto" : "windowsLikeMenu",
								"filhos" : [
									{
										"texto" : "Repositório",
										"funcao" : "irPara(7)",
										"desativado" : true
									},
									{
										"texto" : "Explicação",
										"funcao" : "irPara(8)",
										"desativado" : true
									}
								]
							}
						]
					},
					{
						"texto" : "Jogos",
						"filhos" : [
							{
								"texto" : "Puzzle",
								"letraAlt" : 1,
								"atalho" : [16,80],
								"funcao" : "irPara(9)"
							}
						]
					}
				]
			},
			{
				"texto" : "Outras",
				"letraAlt" : 0,
				"funcao" : "irPara(10)"
			}
		]
	},
	{
		"texto" : "Sobre",
		"letraAlt" : 0,
		"filhos" : [
			{
				"texto" : "Sobre o Windows Like Menu",
				"letraAlt" : 2,
				"funcao" : "sobre()",
				"atalho" : [16,87]
			}
		]
	}
]);

function sobre() {
	alert("Esse script tem a finalidade de simular um menu como o do S.O. Windows, incluindo comandos de atalho e de seleção com o teclado.");
}

function irPara(id) {
	var enderecos = [
		"#sobre",
		"#reservadas",
		"https://github.com/RandomPianist?tab=repositories",
		"https://github.com/RandomPianist/combinarTeclas",
		"https://randompianist.github.io/combinarTeclas",
		"https://github.com/RandomPianist/janelaPersonalizada",
		"https://randompianist.github.io/janelaPersonalizada",
		"https://github.com/RandomPianist/windowsLikeMenu",
		"https://randompianist.github.io/windowsLikeMenu",
		"https://randompianist.github.io/puzzle",
		"https://linkr.bio/9k3yn"
	];
	if (id > 1) window.open(enderecos[id], "_blank");
	else location.href = enderecos[id];
}