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

let WLM_letra_auto=!1;function Menu(e){let n,t=e,o="",r="",a="",i=new Array,u=new Array;const l=function(e,n){r||void 0===e&&(r="As informações foram declaradas incorretamente",a=""),r||e.constructor!==Array&&(r="As informações foram declaradas incorretamente",a=""),r||e.forEach((e=>{for(x in r||"object"!=typeof e&&(r="Cada elemento deve ser um objeto",a=""),r||void 0===e.texto&&(r="Há um elemento com título faltante",a=""),r||"string"!=typeof e.texto&&(r="O texto de cada elemento deve do tipo string.\n"+e.texto+" não reconhecido",a=""),r||e.texto||(r="Há um elemento com título em branco",a=""),r||(a=e.texto),e)-1==["texto","letraAlt","desativado","funcao","filhos","destacado","atalho"].indexOf(x)&&(o='Elemento "'+x+'" não conhecido.\nLocal: "'+a+'"');if(r||-1==["undefined","number"].indexOf(typeof e.letraAlt)&&(r='O parâmetro "letraAlt", se declarado, deve ser do tipo number.\n'+e.letraAlt+" não reconhecido"),!r)if(WLM_letra_auto){let n=0;do{var t=e.texto.substring(n,n+1).toUpperCase();n++}while(i.indexOf(t)>-1&&n<e.texto.length);i.push(t),e.letraAlt=n-1,n>=e.texto.length&&(r="Não foi possível incluir os atalhos automáticos",a="")}else if("number"==typeof e.letraAlt&&(parseInt(e.letraAlt)!=e.letraAlt&&(r='O parâmetro "letraAlt", se declarado, deve ser um inteiro.\n'+e.letraAlt+" não reconhecido"),r||e.letraAlt+1>e.texto.length&&(r="O índice da letra de atalho excede o limite "+e.texto.length),!r)){let n=e.texto.substring(e.letraAlt,e.letraAlt+1).toUpperCase();i.indexOf(n)>-1?(r='Ocorreu um erro ao instanciar os atalhos na raiz.\nHá repetições no parâmetro "letraAlt".\nLocais: "'+u[i.indexOf(n)]+'" e "'+e.texto+'"',a=""):(i.push(n),u.push(e.texto))}r||void 0===e.filhos&&void 0===e.funcao&&(r="Para cada elemento deve haver filhos ou uma função"),r||void 0!==e.filhos&&void 0!==e.funcao&&(r="Um elemento não pode possuir filhos e uma função ao mesmo tempo"),r||void 0!==e.filhos&&e.filhos.constructor!==Array&&(r="Os filhos devem seguir a mesma estrutura do pai"),r||void 0!==e.funcao&&"function"!=typeof e.funcao&&(r="Há um erro na função"),r||(["undefined","boolean"].indexOf(typeof e.destacado)>-1?void 0!==e.destacado&&n&&(r='O parâmetro "destacado" não pode ser declarado em elementos da raiz do menu'):r='O parâmetro "destacado", se declarado, deve ser do tipo boolean'),r||-1==["undefined","boolean"].indexOf(typeof e.desativado)&&(r='O parâmetro "desativado", se declarado, deve ser do tipo boolean'),r||void 0!==e.atalho&&(e.atalho.constructor!==Array?r='O parâmetro "atalho", se declarado, deve ser um Array':void 0===e.funcao&&(o='Há um atalho que não aponta para função alguma.\nLocal: "'+a+'"')),r||void 0!==e.filhos&&l(e.filhos,!1)}))};void 0!==e?e.constructor===Array?l(t,!0):r="As informações foram declaradas incorretamente":r="As informações não foram declaradas",""!=r?(a&&(r+='.\nLocal: "'+a+'"'),console.error("A classe Menu não pôde ser construída devido a uma falha no parâmetro.\n"+r+".")):o&&console.warn(o),r||t.forEach((e=>{void 0===e.filhos&&(e.filhos=new Array),e.filhos&&void 0===e.funcao&&(e.funcao="")}));const s={menu:{border:"#99a",background:"linear-gradient(#e1e6f6, #d4dbee, #e1e6f6)"},menu_item:{color:"#000",hover:{border:"#99a",background:"linear-gradient(#d4dbee, #e1e6f6, #d4dbee)"},active:{border:"#99a",background:"linear-gradient(#999, #c8cddc, #d6d6ee)"}},submenu:{border:"#99a",background:"#eee"},submenu_item:{on:{color:"#000",hover:{border:"#99a",background:"linear-gradient(#d4dbee, #e1e6f6, #d4dbee)"}},off:{color:"#666",hover:{border:"#ccc",background:"linear-gradient(#eee, #ddd)"}}},shadow:"#888"},d={0:"Erro",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/break",20:"Caps Lock",32:"Espaço",33:"Page up",34:"Page down",35:"End",36:"Home",37:"←",38:"↑",39:"→",40:"↓",44:"Print Screen",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Windows Esquerdo",93:"Windows Direito",95:"sleep",96:"0 Numérico",97:"1 Numérico",98:"2 Numérico",99:"3 Numérico",100:"4 Numérico",101:"5 Numérico",102:"6 Numérico",103:"7 Numérico",104:"8 Numérico",105:"9 Numérico",106:"*",107:"+",108:".",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",124:"F13",125:"F14",126:"F15",127:"F16",128:"F17",129:"F18",130:"F19",131:"F20",132:"F21",133:"F22",134:"F23",135:"F24",136:"F25",137:"F26",138:"F27",139:"F28",140:"F29",141:"F30",142:"F31",143:"F32",144:"Num lock",145:"Scroll lock",173:"Mute/unmute",174:"Diminuir volume",175:"Aumentar volume",176:"Próximo",177:"Anterior",178:"Parar",179:"Tocar"},m=this;let c="",f=new Array,h=new Array,p=new Array,b=new Array,y=new Array,g=new Array,_=new Array,v=new Array,A=new Array,w=new Array,k=new Array,C=new Array,E=!1,O=!1,F=!0,j=!1,L=!1,B=!1,I=!0,M=0,H=0,T=0,N=0,W=-1;const P=function(){h=new Array,b=new Array,y=new Array,g=new Array,_=new Array,C=new Array,v=new Array,A=new Array,k=new Array;let e=document.getElementById("menuRes"),n=$(t,!1,0,1,[],[]);null===e?(document.body.innerHTML="<div id = 'menuDiv'>"+n+"</div><div id = 'menuCobrir'></div><div class = 'menuRes' id = 'menuRes'>"+c+"</div>",e=document.getElementById("menuRes")):document.getElementById("menuDiv").innerHTML=n,e.style.height=window.innerHeight-28+"px"},z=function(e,n){const t=n?"on":"off",o=document.getElementById(e).style,r=s.submenu_item[t].hover;o.borderColor=r.border,o.background=r.background},R=function(e,n,t){const o=document.getElementsByClassName("menu_item")[e];["menuC","menu_abrir"].forEach((e=>{o.id==e+n.join("_")?(z(o.id,-1==w.indexOf(n.join("_"))),t=o.id):""==t&&(o.style.borderColor="transparent",o.style.background="none")}));let r=n[0];for(let e=1;e<n.length-1;e++)r+="_"+n[e],z("menu_abrir"+r,!0)},D=function(e,n,o){m.open(e,!0,event.keyCode),setTimeout((function(){for(let n=0;n<t.length;n++){let t=document.getElementById("menu_m"+n).style;n==e?(t.borderColor=s.menu_item.active.border,t.background=s.menu_item.active.background):(t.borderColor="transparent",t.background="none")}}),1)},S=function(e,n){if(document.getElementById(e).style.display=n?"block":"none",e=e.substring(12),!n&&v.indexOf(e)>-1){let n=new Array;v.forEach((t=>{t!=e&&n.push(t)})),v=n}else n&&v.push(e)},U=function(e){Array.from(document.getElementsByClassName(e)).forEach((e=>{let n=e.style;n.removeProperty("border-color"),n.removeProperty("background")}))},q=function(){Array.from(document.getElementsByClassName("menu_submenu")).forEach((e=>{e.style.display="none"}))},G=function(){q(),v=new Array,U("menu_span"),J(),E=!1,O=!1,F=!0,j=!1,M=0,H=0,T=0,N=0,W=-1,document.getElementById("menu_delHover").innerHTML=""},J=function(){U("menu_item"),U("menu_item_des")},K=function(e){J();let n=e[0],o=t[e[0]];for(let t=1;t<e.length-1;t++)n+="_"+e[t],o=o.filhos[e[t]],z("menu_abrir"+n,!0);for(let e=0;e<o.filhos.length;e++)void 0!==o.filhos[e].filhos&&S("menu_submenu"+n+"_"+e,!1);if(o.filhos.length){if(void 0!==o.filhos[e[e.length-1]].filhos)if(-1==w.indexOf(e.join("_"))){O=!0,F=!1,B||S("menu_submenu"+e.join("_"),!0),Array.from(document.getElementsByClassName("menu_submenu")).forEach((n=>{n.id.substring(12).split("_").length>e.length&&S(n.id,!1)}));try{z("menu_abrir"+e.join("_"),!0)}catch(e){O=!1}}else z("menu_abrir"+e.join("_"),!1);else{F=!0;const n=-1==w.indexOf(e.join("_"));n&&(j=!0),O=!1,z("menuC"+e.join("_"),n)}N=e.join("_"),n=t[e[0]].filhos;for(let t=1;t<e.length-1;t++)n=n[e[t]].filhos;T=n.length-1,H=e.length-1}},Q=function(e){S("menu_submenu"+e.join("_"),!0),e.push(0),K(e)},V=function(e){M+=e,M<0?M=t.length-1:M>=t.length&&(M=0),D(M,0,event.keyCode)},X=function(e){e(),m.end()},Y=function(){void 0===h[M]?setTimeout((function(){m.end()}),150):X(h[M])},Z=function(){try{let e=document.getElementsByClassName("menuRes")[0].style;E?e.removeProperty("z-index"):el.zIndex=1}catch(e){}};let $=function(e,n,t,o,r,a){let i,u,l=0,d=0,m=0,c="";e.forEach((e=>{e.texto.length>d&&(d=e.texto.length)}));let p=d*(-.0631111*d+8.4333333);if(i=4,e.forEach((e=>{void 0!==e.filhos&&(i=2)})),d=i,e.forEach((e=>{void 0===e.atalho?l++:oe(e.atalho).length>d&&(d=oe(e.atalho).length)})),l==e.length&&(l=0,e.forEach((e=>{void 0===e.filhos&&l++}))),p+=d*(-.0631111*d+8.4333333),p*=64/65,(d>i||0==l)&&(p+=parseInt(30)),a.forEach((e=>{m+=ne(e)})),0!=t&&-1==A.indexOf(r[0]+"@"+o)&&m+ne(p)>window.innerWidth?t=-1*ne(p)-parseInt(5):r.length&&(A[A.length]=r[0]+"@"+o),n){if(t<0&&(t+=4),l>=e.length){d=0,e.forEach((e=>{e.texto.length>d&&(d=e.texto.length)}));const n=parseInt(1.0775194*(5.5813953*d+33.6744186)-12.0465116)+20;i=0==t?"menu_submenu' style = 'width:"+ne(n)+"px":"menu_submenu' style = 'left:"+ne(t)+"px;width:"+ne(p)+"px"}else i=0!=t?"menu_submenu' style = 'left:"+ne(t)+"px;width:"+ne(p)+"px":"menu_submenu' style = 'width:"+ne(p)+"px";i+=";z-index:"+(r.length+1),t<0&&(i+=";box-shadow:-2px 2px 2px 1px "+s.shadow),2==o&&(i+=";margin-top:2px")}else i="menu' id = 'menu";p-=parseInt(30),resultado="<ul class = '"+i+"'",n&&(c=r.join("_"),resultado+="id = 'menu_submenu"+c+"'"),resultado+=">";for(let i=0;i<e.length;i++){let l=new Array,s="menu_item",d=!0;1==o&&(void 0!==e[i].funcao&&""!=e[i].funcao?d=!1:""==e[i].funcao&&(d=!e[i].desativado)),e[i].desativado&&(s+="_des");let m="";"function"==typeof e[i].funcao&&(C.push(e[i].funcao),m="WLM.exec("+(C.length-1)+", false)");let y=e[i].desativado?"#":"javascript:WLM.end();"+m;for(let e=0;e<o-1;e++)l.push(r[e]);if(l.push(i),e[i].destacado&&(resultado+="<li class = 'menu_destaque'><table class = 'menu_tabela'><tr><td class = 'menu_margem' style = 'width:20px'>&nbsp;</td><td class = 'menu_texto' style = 'padding:0'><hr></td></tr></table></li>"),resultado+="<li",void 0!==e[i].filhos)if(n)t=p+parseInt(30),0==i&&a.push(t),r=l,e[i].desativado&&w.push(r.join("_")),resultado+="><a onmousemove = 'WLM.overSub(["+r.join(",")+"]);' id = 'menu_abrir"+r.join("_")+"' class = '"+s+"'><table class = 'menu_tabela'><tr><td class = 'menu_margem'>&nbsp;</td><td class = 'menu_texto'>"+ee(e[i],r.join("_"))+"</td><td class = 'menu_open'>&#9658;</td><td class = 'menu_margemFim1'>&nbsp;</td></tr></table></a>"+$(e[i].filhos,!0,t,o+1,r,a);else{if(d)b="WLM.open("+i+", true, -1)";else{var b="WLM.exec("+i+", true)";void 0!==e[i].desativado&&e[i].desativado||(h[i]=e[i].funcao,void 0!==e[i].atalho&&f.push([e[i].atalho,e[i].funcao]))}resultado+="><span class = 'menu_span' onmouseover = 'WLM.over("+i+");' onclick = '"+b+"' id = 'menu_m"+i+"'><a href = '#'>"+te(e[i].texto)+"</a></span>"+$(e[i].filhos,!0,0,2,[i],[])}else u=ee(e[i],c),e[i].desativado&&w.push(l.join("_")),resultado+="><a href = '"+y+"'class = '"+s+"'onmousemove = 'WLM.keepOpen(["+l.join(",")+"])'id = 'menuC"+l.join("_")+"'><table class = 'menu_tabela'><tr><td class = 'menu_margem'>&nbsp;</td><td class = 'menu_texto'>"+u+"</td>",void 0!==e[i].atalho&&(f.push([e[i].atalho,e[i].funcao]),resultado+="<td class = 'menu_atalho'>"+te(oe(e[i].atalho))+"</td><td class = 'menu_margemFim2'>&nbsp;</td>"),resultado+="</tr></table></a>";resultado+="</li>"}return resultado+="</ul>",resultado},ee=function(e,n){let t="<span>";const o=e.letraAlt;if(void 0===o||e.desativado)t+=te(e.texto);else{t=e.texto.substring(0,o);const r=e.texto.substring(o,o+1),a=r.toUpperCase();b.indexOf(a)>-1?(console.error('Ocorreu um erro ao instanciar os atalhos.\nHá repetições no parâmetro "letraAlt".\nLocais: "'+_[b.indexOf(a)]+'" e "'+e.texto+'".'),b=new Array,g=new Array,y=new Array,_=new Array,setTimeout((function(){Array.from(document.getElementsByClassName("menu_letraAtal")).forEach((e=>{e.style.textDecoration="none"}))}),0)):(b.push(a),g.push(n),y.push(e.funcao),_.push(e.texto)),t+="</span><span class = 'menu_letraAtal'>"+r+"</span><span>",t+=e.texto.substring(o+1)}return t+="</span>",t},ne=function(e){return e>0&&e<100&&(e=100),e},te=function(e){for(;e.indexOf(" ")>-1;)e=e.replace(" ","&nbsp");return e},oe=function(e){let n=new Array;return e.forEach((e=>{n.push(d[e]),void 0===d[e]&&(L=!0)})),n.join("+")};this.load=function(){r||(c=document.body.innerHTML,document.head.innerHTML+="<style type = 'text/css'>body {margin:0;overflow:hidden}.menuRes, .menu, .menu .menu_submenu, #menuCobrir {position:absolute;}.menu, .menu .menu_submenu, .menu .menu_tabela td {padding:0;margin:0}.menu, .menuRes, .menu .menu_tabela, #menuCobrir {width:100%}.menuRes {overflow-y:auto;overflow-x:hidden;z-index:-1;margin-top:27px}.menu {height:25px;padding-top:1px;border-bottom:1px solid "+s.menu.border+";background:"+s.menu.background+";font-family:Tahoma;font-size:12.5px;user-select:none}.menu li {display:inline-block;position:relative}.menu li a {display:block;text-decoration:none;color:"+s.submenu_item.on.color+";cursor:default}.menu li a.menu_item_des {color:"+s.submenu_item.off.color+"}.menu .menu_submenu, #menuCobrir {display:none}.menu .menu_submenu .menu_submenu {top:-2px}.menu .menu_submenu {top:24px;left:0px;padding:4px 0;border-color:"+s.submenu.border+";border-style:solid;border-width:0 1px 1px;box-shadow:1px 2px 2px 1px "+s.shadow+";background:"+s.submenu.background+";list-style-type:none;cursor:default}.menu .menu_submenu li {display:block;margin:-2px 0}.menu .menu_submenu .menu_destaque {margin:-5px 0 -6px}.menu span.menu_span, a.menu_item, a.menu_item_des {border:1px solid transparent;border-radius:3px}.menu span.menu_span {display:inline-block;padding:3px 8px;border-radius:5px}.menu span.menu_span:hover {border-color:"+s.menu_item.hover.border+";background:"+s.menu_item.hover.background+"}.menu span.menu_span:active {border-color:"+s.menu_item.active.border+";background:"+s.menu_item.active.background+"}.menu span.menu_span a {color:"+s.menu_item.color+"}.menu table.menu_tabela {border-spacing:0;color:inherit;font-size:inherit}.menu table.menu_tabela td {white-space:nowrap}.menu table.menu_tabela td.menu_margem {width:19px;border-right:1px solid "+s.menu.border+"}.menu table.menu_tabela td.menu_texto {padding:2px 0 2px 6px}.menu table.menu_tabela td.menu_margemFim1 {width:4px}.menu table.menu_tabela td.menu_margemFim2 {width:14px}.menu table.menu_tabela td.menu_open {font-size:10px}.menu table.menu_tabela td.menu_atalho, table.menu_tabela td.menu_open {text-align:right}#menuCobrir {height:30px}</style><style type = 'text/css' id = 'menu_delHover'></style><style type = 'text/css' id = 'menu_alt'></style>",P(),setTimeout((function(){L?console.error("Ocorreu um erro ao instanciar os atalhos.\nUm ou mais códigos de tecla não existem."):n=new CombinarTeclas(f)}),200))},this.resize=function(){r||(G(),P())},this.keydown=function(e){if(!r){let o=0;if(L||E||(o=n.keydown(e)),o<2){let n,o,r,a=!1,i=N.toString().split("_");if(""!=document.getElementById("menu_alt").innerHTML){for(let n=0;n<b.length;n++)if(d[e.keyCode]==b[n]&&!a)if(void 0===y[n]){i=g[n].split("_");let e=new Array;i.forEach((n=>{e.push(n)})),v.indexOf(e.join("_"))>-1&&(v.indexOf(g[n])>-1?S("menu_submenu"+i.join("_"),!1):Q(i),a=!0)}else v.indexOf(g[n])>-1&&(X(y[n]),a=!0);for(let n=0;n<p.length;n++)d[e.keyCode]!=p[n].toUpperCase()||a||(void 0!==h[n]?(a=!0,X(h[n])):-1==k.indexOf(n)?M!=n||!v.length&&t[n].filhos.length?(D(n),I=!0):m.end():M!=n?D(n):m.end())}if((a||[13,18,27,37,38,39,40].indexOf(e.keyCode)>-1)&&(e.preventDefault(),B=!0),a||-1!=k.indexOf(M)&&-1!=[13,38,40].indexOf(e.keyCode))k.indexOf(M)>-1&&13==e.keyCode&&Y();else if([38,40].indexOf(e.keyCode)>-1&&""!=N)if(I){for(let e=0;e<i.length;e++)i[e]=parseInt(i[e]);i[H]+=e.keyCode-39,i[H]<0?i[H]=T:i[H]>T&&(i[H]=0),W>-1&&(S("menu_submenu"+W,!0),i[H]=0,W=-1),K(i);for(let e=document.getElementsByClassName("menu_item").length-1;e>=0;e--)R(e,i,"");for(let e=document.getElementsByClassName("menu_item_des").length-1;e>=0;e--)R(e,i,"")}else 40==e.keyCode&&(D(parseInt(N.split("_")[0])),I=!0);else if(18==e.keyCode)if(I=!0,E)m.end();else{p=new Array;for(let e=0;e<t.length;e++){r=t[e];let o=r.letraAlt;void 0!==o?(n=r.texto.substring(0,o),p[e]=r.texto.substring(o,o+1),n+="<u>"+p[e]+"</u>",n+=r.texto.substring(o+1),document.getElementById("menu_m"+e).innerHTML=n):p[e]="-1"}document.getElementById("menu_alt").innerHTML="span.menu_letraAtal{text-decoration:underline}",D(0)}else if(27==e.keyCode)-1==W&&I&&v.length?(q(),v=new Array,W=M,j=!1,I=!1):m.end();else if(E)if(13==e.keyCode)if(I)if(j){o=t[i[0]];for(let e=1;e<i.length;e++)o=o.filhos[i[e]];void 0===o.funcao||o.desativado?O&&Q(i):X(o.funcao)}else O?Q(i):Y();else t[M].filhos.length?(V(0),I=!0):Y();else if(37==e.keyCode||39==e.keyCode)if(I)if(39==e.keyCode&&F)V(e.keyCode-38);else if(37==e.keyCode){o=new Array;for(let e=0;e<i.length-1;e++)o[e]=i[e];i=o,i.length>1?(K(i),S("menu_submenu"+i.join("_"),!1)):V(-1)}else{Q(i);try{S("menu_submenu"+i.join("_"),!1),o=new Array;for(let e=0;e<i.length-1;e++)o[e]=i[e];i=o,S("menu_submenu"+i.join("_"),!0)}catch(e){}}else V(e.keyCode-38),S("menu_submenu"+N.split("_")[0],!1)}}return E},this.keyup=function(e){if(!r)try{n.keyup(e)}catch(e){}return Z(),E},this.click=function(e){document.getElementById("menu").contains(e.target)||!E||r||m.end(),Z()},this.exec=function(e,n){n?h[e]():C[e]()},this.open=function(e,n,o){if(!E||o>-1){const n=document.getElementById("menu_delHover"),t="menu_submenu"+e,r=document.getElementsByClassName("menu_span");G();for(let n=0;n<r.length;n++)if(n==e){let e=r[n].style;e.borderColor=s.menu_item.active.border,e.background=s.menu_item.active.background}""!=document.getElementById(t).innerHTML&&S(t,!0),M=e,N=M+"_0",H=1,o>-1?(n.innerHTML="a.menu_item:hover{border-color:transparent;background:none}a.menu_item_des:hover{border-color:transparent;background:none}",setTimeout((function(){E=!0,K([e,0])}),50)):(E=!0,j=!1,n.innerHTML="")}else n&&e==M?m.end():menuOver(e);let r=!0;void 0!==t[e].funcao&&""!=t[e].funcao?r=!1:""==t[e].funcao&&(r=!t[e].desativado),r||(q(),v=new Array,W=M,j=!1,I=!1,-1==k.indexOf(M)&&(k[k.length]=M))},this.keepOpen=function(e){B?B=!1:function(e){q(),v=new Array,lista=new Array;for(let n=0;n<e.length;n++){let t=new Array;for(let o=0;o<=n;o++)t[o]=e[o];lista[n]=t.join("_")}for(let e=0;e<lista.length-1;e++)S("menu_submenu"+lista[e],!0);K(e)}(e)},this.over=function(e){E&&(E=!1,m.open(e,!1,-1))},this.overSub=function(e){B=!1,K(e)},this.end=function(){G(),B=!1;for(let e=0;e<t.length;e++)document.getElementById("menu_m"+e).innerHTML=t[e].texto;document.getElementById("menu_alt").innerHTML=""},this.ativar=function(e,n){if(!r){let o="";if("string"!=typeof e&&(o='O parâmetro "id" deve ser do tipo string'),o||"boolean"==typeof n||(o='O parâmetro "ativo" deve ser do tipo boolean'),!o)try{let o=!1;const r=e.split("_");if(r.length>1){let e=t[r[0]].filhos;for(let n=1;n<r.length-1;n++)e=e[r[n]].filhos;e=e[r[r.length-1]],e.desativado!=!n?e.desativado=!n:o=!0,w=new Array}else t[r[0]].desativado!=!n?t[r[0]].desativado=!n:o=!0,void 0===t[r[0]].funcao&&(t[r[0]].funcao="");o&&console.warn('O id "'+e+'" já estava '+(n?"":"in")+"ativo"),P()}catch(n){o=null===document.getElementById("menu_submenu"+e)?'O id "'+e+'" não foi encontrado':"Ocorreu um erro ao ativar o elemento "+e}o&&console.error(o+".")}}}

// Aqui termina o código PRINCIPAL