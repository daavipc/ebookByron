<?php
// Tirar report de erro e utf8
header("Content-type:text/html; charset=utf8");
error_reporting(E_ALL ^ E_DEPRECATED)
?>

<?php /* Header */ include 'pagina/header.php'; ?>

<div style="position: relative;
	top: 0px;
	left: 0px;
	width: 1000px;
	height: 60px;"></div>

<br><br>
<div class="area-direita">
<div id="mascara-logo" class="logo linha"></div>
</div>
</div>
</div>
<div class="clearfix"></div>
<div class="conteudo-site">
<div class="conteudo-cinza">


<div class="clearfix"></div>
<div class="clearfix"></div>

<!-- AVISO -->
<div class="app_banner" style="
background: url(media/img/aviso.png);
height: 120px;
width: 968px;
overflow: hidden;
border-radius: 5px;
margin-bottom: 20px;
margin-top: 0px;
cursor: pointer;
position: relative;">
<div title="Fechar" class="close_app_banner" style="width: 20px;height: 20px;border-radius: 30px;top: 5px;
right: 5px;position: absolute;background-image: url(media/img/icone/fechar.png);box-shadow:
inset 0 1px rgba(255,255,255,0.9), 0 2px 2px rgba(0,0,0,0.38);cursor: pointer;
background-position: center;"></div></div></a> 

<script>
$('.close_app_banner').click(function(e) {
 e.preventDefault();
$('.app_banner').animate({'opacity':'0', 'height': '0'}, 500, function(){
 setTimeout(function(){
$('.app_banner').remove();
}, 0);
})
});
</script>
<!-- FIM AVISO -->

<div class="area-branco" style="position: relative;">
<div id="naofeito"></div>
<div class="conteudo-site">	
<div class="input" style="display: none;">
<div class="triangle" style="border-color: transparent transparent #c03838 transparent;"></div>
<div class="nLog"><b>OPSS!</b> Você precisa está <b>logado!</b></div>
		
</div>
<div class="clearfix"></div>
</div>
<div class="titulo-area noticias">
<i class="fa fa-newspaper-o"></i> 
<span>Atualizações</span>
<div class="desc">Analises, atualizações e outros que acontencem no mundo da leitura.</div>
</div>

<div class="info-noticias">		
<form class="procurar searchNews">
<input name="search" placeholder="Pesquise alguma analise" required=""></input>
<button type="submit"><i class="fa fa-search" aria-hidden="true"></i>
</button>
</form>

</div>
<div class="clearfix"></div>

<!-- ATUALIZAÇÕES -->
<div class="noticia-fixa" 
style="background-image: url(media/img/bienal.png)">
<div class="overlay">
<div class="categoria">
<i class="fa fa-star" aria-hidden="true"></i>
DESTAQUE </div>
<div class="clearfix"></div>
<div class="titulo"><a href="#">EBY na Bienal SP!</a></div>
<div class="desc">Não deixe de passar em nossa área especial!</div>
<div class="autor">
<div class="nome">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris.</div>

</div>
</div>
</div>

	
<div class="noticia-fixa hotel"
style="background-image: url(http://statics.livrariacultura.net.br/products/capas_lg/259/42290259.jpg)">
<div class="overlay">
<div class="clearfix"></div>
<div class="titulo"><a href="#">Maze Runner</a></div>
<div class="desc">Preparados para mais uma aventura?</div>

</div>
</div>

	
<div class="noticia-fixa externa" 
style="background-image: url(https://catarseparaevolucao.com/wp-content/uploads/2018/11/IMG_8997.jpg);">
<div class="overlay">
<div class="clearfix"></div>
<div class="titulo"><a href="#">Opinião: Mindsert</a></div>
<div class="desc">A nova psicologia do sucesso!</div>
</div>
</div>

	
<div class="noticia-fixa atualizacoes"
style="background-image: url(https://1.bp.blogspot.com/-BzpQ_fFGlvc/V38BsL99MMI/AAAAAAAABRA/fb0EOrv9DvgSDs7zOPee_xe3lTiKLCQ8gCLcB/s1600/filme%2Bcomo%2Beu%2Bera.png)">
<div class="overlay">
<div class="clearfix"></div>
<div class="titulo"><a href="#">Opinião: Como eu era antes de você</a></div>
<div class="desc">
Baseado no livro best-seller "Como eu era antes de você" da britânica Jojo Moyes.</div>
</div>
</div>

<!-- FIM ATUALIZAÇÕES -->
	

<!-- RECENTES LIVROS -->
<div class="area-noticias" style="overflow: hidden; width: 984px;">
<div style="width: 9999999999999999999px; float: left;">
<div class="area-noticia-move">
<div style="float: left; width: 984px;">

<div class="caixa-noticia">
<div class="img" 
style="background-image: url(media/img/livros/vantagem.png); width: 220px; height: 125px;">
<div class="overlay">
<div class="comentarios">36 <br/><span>comentários</span></div>
</div>
<div class="infos">
<div class="gostei counter">170</div>
</div>
</div>
<div class="titulo"><a href="#">Os e-books e o futuro da leitura</a></div>
<div class="desc">“Não troco o cheiro do livro por nada.”</div>
<div class="info">
<div class="continue-lendo"><a href="#">Continue lendo</a>
<div class="icone"></div>
</div>
</div>
</div>

<div class="caixa-noticia">
<div class="img" 
style="background-image: url(media/img/livros/harry.png); width: 220px; height: 125px;">
<div class="overlay">
<div class="comentarios">84 <br/><span>comentários</span></div>
</div>
<div class="infos">
<div class="gostei counter">421</div>
</div>
</div>
<div class="titulo"><a href="#">Harry Potter</a></div>
<div class="desc">Novidades na saga?</div>
<div class="info">
<div class="continue-lendo"><a href="#">Continue lendo</a>
<div class="icone"></div>
</div>
</div>
</div>

<div class="caixa-noticia">
<div class="img" 
style="background-image: url(media/img/livros/enem.png); width: 220px; height: 125px;">
<div class="overlay">
<div class="comentarios">563 <br/><span>comentários</span></div>
</div>
<div class="infos">
<div class="gostei counter">1953</div>
</div>
</div>
<div class="titulo"><a href="#">Dicas: ENEM</a></div>
<div class="desc">As melhores táticas para estudar para a prova que acontece em Novembro.</div>
<div class="info">
<div class="continue-lendo"><a href="#">Continue lendo</a>
<div class="icone"></div>
</div>
</div>
</div>

<div class="caixa-noticia">
<div class="img" 
style="background-image: url(media/img/livros/1hora.png); width: 220px; height: 125px;">
<div class="overlay">
<div class="comentarios">12 <br/><span>comentários</span></div>
</div>
<div class="infos">
<div class="gostei counter">76</div>
</div>
</div>
<div class="titulo"><a href="#">Livros para se ler em um dia</a></div>
<div class="desc">Sem tempo para ler livros extensos? </div>
<div class="info">
<div class="continue-lendo"><a href="#">Continue lendo</a>
<div class="icone"></div>
</div>
</div>
</div>

</div>
</div>
</div>

</div>
</div>

<!-- FIM RECENTES LIVROS -->

<div class="clearfix"></div>
</div>
</div>

<!-- INÍCIO ÁREA EXTRA TALVEZ TROCAS -->
<br>
<div class="area-branco-cinza" style="position: relative;">
<div class="conteudo-site">
<div class="titulo-area extra">
<div class="titulo"><i class="fa fa-exchange"></i> Área de trocas</div>
<div class="desc">Troque, empreste e venda seus livros virtualmente!</div>
</div>
	
<div class="area-esquerda">
<div class="stand-loja">
<div class="barra"><i class="fa fa-lock"></i> Transações seguras e rápidas!</span></div>
<div class="tenda"></div>
<div class="plataforma">
<div class="recebeLoja">
<div class="seta" style="opacity: 0.4"></div>
				                
<div class="item tip" title="O Pequeno Príncipe">
<div class="mobi tip" style="background-image: url(media/img/livros/pequeno.png);">
</div>
<div class="tag"><span class="tip" title="Preço"> EB$</span> 90 
<div class="comprar tip" title="Comprar"></div>
</div>
</div>
				
<div class="item tip" title="Os Miseráveis">
<div class="mobi tip" style="background-image: url(media/img/livros/miseravel.png);">
</div>
<div class="tag"><span class="tip" title="Preço"> EB$</span> 50 
<div class="comprar tip" title="Comprar"></div>
</div>
</div>

<div class="item tip" title="Dom Casmurro">
<div class="mobi tip" style="background-image: url(media/img/livros/casmurro.png);">
</div>
<div class="tag"><span class="tip" title="Preço">C</span> 70 
<div class="comprar tip" title="Comprar"></div>
</div>
</div>
									
<div class="seta proxima"></div>
</div>
</div>
</div>
</div>

<!-- PRÓXIMOS EVENTOS -->
<div class="area-direita">
<div class="caixa caixa-rosa">
<div class="titulo loja">Próximos eventos</div>
			
<div class="caixa-emblema">
<div class="info-emblema">
<a href="#" target="_blank"><i class="fa fa-arrow-right"></i> Bienal dos Livros SP</a><br>
<span><i class="fa fa-calendar-o"></i> 31/02/2020</span>
</div>
</div>
			
<div class="caixa-emblema">
<div class="info-emblema">
<a href="#" target="_blank"><i class="fa fa-arrow-right"></i> Encontro dos Leitores</a><br>
<span><i class="fa fa-calendar-o"></i> 15/12/2020</span>
</div>
</div>
							
</div>
</div>

<!-- FIM PRÓXIMOS EVENTOS -->

<!-- FIM ÁREA EXTRA TALVEZ TROCAS -->

<div class="clearfix"></div>
</div>
</div>

<!-- ÁREA DE VIDEOS -->
<br>
<div class="area-preta" style="position: relative;">
<div id="naofeito" style="z-index: 2 !important"></div>
<div class="conteudo-site">
<div class="titulo-area forum videos">
<div class="titulo">
<i style="margin-left: 10px;" class="fa fa-play"></i> Área de Vídeos</div>
<div class="desc">Os videos que os usuários mais gostaram</div>
	</div>
<div class="clearfix"></div>
<div class="area-videos" style="overflow: hidden; ">
<div class="move-videos" style="width: 100000000000000000px; float: left;">
		<div style="width: 985px; float: left">

<div class="video">
<div class="thumb" 
style="background-image: url(https://i.ytimg.com/an_webp/v6rjjpbeNBk/mqdefault_6s.webp?du=3000&sqp=CPyZ_-wF&rs=AOn4CLA0B_uwlqyaFPCoxvAocrRqwpm4Xw);">
<div class="overlay">
<a href="#" class="fancybox fancybox.iframe"><div class="play"></div></a>
</div>
</div>
<div class="titulo">
<a href="#">Resenha: O CORTIÇO - resumo e explicação</a></div>
<div class="info">
<div class="por"><i class="fa fa-heart"></i> amado <b>49</b> vezes</div>
</div>
</div>
					
<div class="video">
<div class="thumb" style="background-image: url(https://i.ytimg.com/an_webp/KwO_ihyq580/mqdefault_6s.webp?du=3000&sqp=CKuF_-wF&rs=AOn4CLDYNWu8fI7K2y6QPLdjFfpVjcErLg);">
<div class="overlay">
<a href="#" class="fancybox fancybox.iframe"><div class="play"></div></a>
</div>
</div>
<div class="titulo"><a href="#">A Metamorfose (Franz Kafka)

</a></div>
<div class="info">
<div class="por"><i class="fa fa-heart"></i> amado <b>53</b> vezes</div>
</div>
</div>
					
<div class="video">
<div class="thumb" style="background-image: url(https://i.ytimg.com/an_webp/-QJHo7u1NYw/mqdefault_6s.webp?du=3000&sqp=CJSb_-wF&rs=AOn4CLDkxt64zG5rSI3SEzxUvynwlDTk3g);">
<div class="overlay">
<a href="#" class="fancybox fancybox.iframe"><div class="play"></div></a>
</div>
</div>
<div class="titulo"><a href="#">Resenha de Livro: Extraordinário</a></div>
<div class="info">
<div class="por"><i class="fa fa-heart"></i> amado <b>78</b> vezes</div>
</div>
</div>
					
<div class="video">
<div class="thumb" style="background-image: url(https://i.ytimg.com/an_webp/psCco-P28E4/mqdefault_6s.webp?du=3000&sqp=COCP_-wF&rs=AOn4CLDAD8I12rbVd1s8Vzif72T2lhQDrA);">
<div class="overlay">
<a href="#" class="fancybox fancybox.iframe"><div class="play"></div></a>
</div>
</div>
<div class="titulo"><a href="#">Resenha do livro O PRÍNCIPE | Nicolau Maquiavel| SejaUmaPessoaMelhor

</a></div>
<div class="info">
<div class="por"><i class="fa fa-heart"></i> amado <b>126</b> vezes</div>
</div>
</div>
		
</div>
</div>

		
<!-- divisão com footer -->
<div class="clearfix"></div>
</div>
<div class="clearfix"></div>
</div>
</div>

<?php include 'pagina/footer.php'; ?>
