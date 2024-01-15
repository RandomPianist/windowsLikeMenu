/*
WINDOWS LIKE MENU 1.1 © 2023
Desenvolvido por Reynolds Costa, no Notepad++

O uso é permitido; a comercialização, proibida.
*/

// ARQUIVO DE EXEMPLO

const WLM = new Menu([
	{
		texto : "Navegar",
		letraAlt : 0,
		filhos : [
			{
				texto : "Introdução",
				funcao : function() {
					location.href = "#introducao";
				}
			},
			{
				texto : "Instalação",
				funcao : function() {
					location.href = "#instalacao";
				}
			},
			{
				texto : "Utilização",
				filhos : [
					{
						texto : "Objeto principal",
						funcao : function() {
							location.href = "#objeto";
						}
					},
					{
						texto : "Função principal",
						funcao : function() {
							location.href = "#principal";
						}
					},
					{
						texto : "Função ativar",
						funcao : function() {
							location.href = "#ativar";
						}
					},
					{
						texto : "Propriedade WLM_letra_auto",
						funcao : function() {
							location.href = "#auto";
						}
					}
				]
			},
			{
				texto: "Palavras reservadas",
				funcao : function() {
					location.href = "#reservadas";
				}
			},
			{
				texto: "Alterações",
				funcao : function() {
					location.href = "#alteracoes";
				}
			},
			{
				texto : "Voltar",
				atalho : [36],
				funcao : function() {
					window.open("https://github.com/RandomPianist?tab=repositories", "_blank");
				},
				destacado : true
			}
		]
	},
	{
		texto : "Redes",
		letraAlt : 0,
		filhos : [
			{
				texto : "GitHub",
				letraAlt : 3,
				filhos : [
					{
						texto : "Repositórios",
						filhos : [
							{
								texto : "Bibliotecas",
								filhos : [
									{
										texto : "CombinarTeclas",
										filhos : [
											{
												texto : "Repositório",
												funcao : function() {
													window.open("https://github.com/RandomPianist/combinarTeclas", "_blank");
												}
											},
											{
												texto : "Explicação",
												funcao : function() {
													window.open("https://randompianist.github.io/combinarTeclas", "_blank");
												}
											}
										]
									},
									{
										texto : "WindowsLikeMenu",
										filhos : [
											{
												texto : "Repositório",
												funcao : function() {
													window.open("https://github.com/RandomPianist/windowsLikeMenu", "_blank");
												},
												desativado : true
											},
											{
												texto : "Explicação",
												funcao : function() {
													window.open("https://randompianist.github.io/windowsLikeMenu", "_blank");
												},
												desativado : true
											}
										]
									},
									{
										texto : "JanelaPersonalizada",
										filhos : [
											{
												texto : "Repositório",
												funcao : function() {
													window.open("https://github.com/RandomPianist/janelaPersonalizada", "_blank");
												}
											},
											{
												texto : "Explicação",
												funcao : function() {
													window.open("https://randompianist.github.io/janelaPersonalizada", "_blank");
												}
											}
										]
									}
								]
							},
							{
								texto : "Puzzle",
								letraAlt : 0,
								atalho : [16, 80],
								funcao : function() {
									window.open("https://randompianist.github.io/puzzle", "_blank");
								}
							}
						]
					},
					{
						texto : "Forks",
						filhos : [
							{
								texto : "Line Chart",
								filhos : [
									{
										texto : "Repositório",
										funcao : function() {
											window.open("https://github.com/RandomPianist/oi.linechart.js", "_blank");
										}
									},
									{
										texto : "Explicação",
										funcao : function() {
											window.open("https://randompianist.github.io/oi.linechart.js", "_blank");
										}
									}
								]
							},
							{
								texto : "Gwent 3.1",
								letraAlt : 0,
								atalho : [16, 71],
								funcao : function() {
									window.open("https://randompianist.github.io/gwent-classic-v3.1", "_blank");
								}
							}
						]
					}
				]
			},
			{
				texto : "Outras",
				letraAlt : 0,
				funcao : function() {
					window.open("https://linktr.ee/reynoldscosta", "_blank");			
				}
			}
		]
	},
	{
		texto : "Sobre",
		letraAlt : 0,
		filhos : [
			{
				texto : "Sobre o Windows Like Menu",
				letraAlt : 2,
				funcao : function() {
					alert("Essa biblioteca tem a finalidade de simular um menu como o do S.O. Windows, incluindo comandos de atalho e seleção com o teclado.");
				},
				atalho : [16, 65]
			}
		]
	}
]);