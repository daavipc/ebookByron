<br>
<center>
<div id="rodape">
	<div class="conteudo-site">

		<div class="clearfix"></div>
		<div class="info-redes-sociais">
			<div class="img"></div>
			<div class="titulo">Nossas redes sociais e aplicativo</div>
			<div class="info">Nelas fazemos post's exclusivos, sorteios, analises em tempo real, entre outros. Segue lá! :)</div>
		</div>
		
		<div class="clearfix"></div>
		<div class="redes-sociais">
			<a href="#" target="_blank"><div class="facebook">Facebook</div></a>
			<a href="#" target="_blank"><div class="twitter">Twitter</div></a>
			<a href="#" target="_blank"><div class="app">Nosso aplicativo</div></a>
		</div>
		
<script type="text/javascript">
    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 15,
            time: 200
        });
    });
        
	$('#botao-logar, #botao-logar-coment').click(function(){
		$('.no-blurred').addClass('blurred'),
		$('#box-login').addClass('ativo');
	});
	
	$('#fechar-logar').click(function(){
		$('.no-blurred').removeClass('blurred'),
		$('#box-login').removeClass('ativo');
	});

</script>

</body>
</html>