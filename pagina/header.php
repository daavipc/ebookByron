<?php
// Tirar report de erro e utf8
header("Content-type:text/html; charset=utf8");
error_reporting(E_ALL ^ E_DEPRECATED);

//if(isset($_SESSION['logado'])){ header("Location:inicio"); exit(); }

include 'config.php';
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="UTF-8">
	<title>EBOOK Byron - O clube da leitura!</title>
	<link rel="shortcut icon" type="image/png" href="favicon.png">
	<link rel="stylesheet" href="<?= $config['Link'] ?>media/css/style0e99.css?1556817011" type="text/css">
	<link rel="stylesheet" href="<?= $config['Link'] ?>media/fancys/jquery.fancybox.css" type="text/css">
	<link rel="stylesheet" href="<?= $config['Link'] ?>media/css/animate.css" type="text/css">
	<link rel="stylesheet" href="<?= $config['Link'] ?>media/css/tipped.css" type="text/css">
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/jquery-1.9.0.min.js"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/fancys/jquery.fancybox.pack.js"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/tippedc4ca.js?1"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/slider.js"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/jquery.countdown.min.js"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/waypoints.min.js"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/jquery.counterup.min.js"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/jquery.simplyscroll.min.js"></script>
	<script type="text/javascript" src="<?= $config['Link'] ?>media/js/main3ef8.js?1552102346"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
	<!-- Inicio Login -->
<div class="blur-fundo-azul" id="box-login">
<div class="fechar" id="fechar-logar"></div>

<div class="conteudo-login">
<div class="msg">Seja bem-vindo, usuário(a)! <br> 
<span>Insira todos os seus dados corretamente e aproveite.</span></div>

<form id="formLogin" class="area-login">
	<button type="submit">Ir!</button>
<input autocomplete="off" id="loginUsername" type="text" name="username" placeholder="Usuário ou e-mail">
<input autocomplete="off" type="password" name="password" placeholder="Senha">

<div class="clearfix"></div>
<input id="lembrar-senha" type="checkbox" name="">
<label for="lembrar-senha">Manter-me conectado</label>
<div class="esqueci"><a href="pagina/recuperar.html"><i class="fa fa-key"></i> Esqueci a a minha senha</a></div>
<div class="botoes">
<a href="registro/index.html"><div class="btn mais">Registrar</div></a>
</div>
</form>
</div>
</div>


<div class="no-blurred ">
<div class="conteudo-site">

<!-- IMAGEM TOPO -->
<div style="background-image: url(<?= $config['Link']?>media/img/topo<?= $config['Topo'] ?>.png);" id="topo-site-back">
	<!-- ^ colocação da mudança de temas / topo2 / topo3 / topo4 -->
<div class="cinza"></div>
</div>

<div id="topo-site">

<!-- MENU -->
<div  id="menu">
<a href="<?= $config['Link'] ?>"><li class="inicio men" typeicon="teste">
<i class="fa fa-home"></i> Página Inicial</li></a>
<li class="sobre men"><i class="fa fa-cube"></i> Sobre nós
<ul>
<a href="pagina/proposito.php"><li>Proposta</li></a>
<!--<a href="#"><li>Menu</li></a>
<a href="#"><li>Menu</li></a>-->
</ul>
</li>
</li>
			
<li class="categorias men">
<i class="fa fa-list"></i> Categorias
<ul>
<a href="pagina/categoriapolitica.php"><li>Política</li></a>
<a href="pagina/categoriaentretenimento.php"><li>Entrenimento</li></a>
<a href="pagina/categoriaterror.php"><li>Terror</li></a>
<a href="pagina/categoriaaventura.php"><li>Aventura</li></a>
<a href="pagina/categoriaromance.php"><li>Românce</li></a>
</ul>
</li>

<a href="pagina/trocas.php">
<li class="trocas men">
<i class="fa fa-globe"></i> Trocas
</li></a>

<a href="pagina/suporte.php"><li class="suporte men"><i class="fa fa-users"></i> Suporte</li></a>


<li class="cadastre men" id="botao-logar"><i class="fa fa-users"></i> Faça parte do clube!</li>

</div> 
