/*
* Created by Laercio Calheiros
* WebNity.com.br
* A copia total ou parcial desse arquivo é totalmente proibida.
*/

var Alerta = {
	Init: function(txt) {
		var Quant = ($('#area-alertas .alerta').length+1);
		var Incre = "'";
        var Unico = new Date();
            Unico = Unico.getHours()+ '-' +Unico.getMinutes()+ '-' +Unico.getSeconds()+ '-' +Quant;

		var Html = '<div class="alerta '+Unico+'">';
			Html+= '	<div class="titulo"><div class="icone"></div> Aviso Importante <div class="fechar" onclick="Alerta.Close(' + Incre + Unico + Incre + ')"></div></div>';
			Html+= '	<p>'+txt+'</p>';
			Html+= '</div>';

		$('#area-alertas').append(Html);

	},

	Notification: function(){
		$.ajax({
			url: 'lib/Alerta',
			type: 'POST',
			dataType: 'Json',
			data: {'tipo': 'notification'},
			success:function(data){
				if(data.length >= 1){
					$("#cont").remove();
					var Notify = '<div id="cont" class="'+data[0].new+'">';
					Notify += '<div id="notifica">';
					Notify += '<div class="texto">Notificações</div></div><div class="scroll">';
					for(i = 0; i < data.length; i++) {
							Notify += '<a href="'+data[i].link+'"><div class="cadaNot '+data[i].new+'" onmouseenter="Alerta.RemoveNotification('+data[i].id_n+')"><div class="icon" style="background-image:url(http://coldhabbo.com.br/media/img/icone/'+data[i].image+')"></div>';
							Notify += '<div class="notification tip" title="'+data[i].texto+'" data-tipped-options="position: \'right\'" >'+data[i].texto+'</div></div></a>';
														
					}

					Notify += '</div>';
					Notify += '<div class="clearfix"></div>';
					Notify += '</div>';	
					$('body').append(Notify);
					Tipped.create('.notification.tip');	
				}

			}
		});	
			
	},

	RemoveNotification: function(id){
			$.ajax({
			url: 'lib/Alerta',
			type: 'POST',
			dataType: 'Json',
			data: {'id': id, 'tipo': 'removeNotification'},
			success:function(data){
				$("#cont").removeClass('new');
			}
		});
	},

	Close: function(f) {
		$('.'+ f).animate({ opacity: 0 }, 250, function() {
		    $('.'+ f).animate({ 'margin-top' : '0px' }, 250).children().slideUp(250, function() {
		      	$('.'+ f).remove();
		  	});
		});
	},

	TempoReal:function(){
		$.ajax({
			url: 'lib/Alerta',
			type: 'POST',
			dataType: 'Json',
			data: {'tipo': 'ver'},
			success:function(data){
				//console.log(data);
				if(data.length >= 1){
					for(i = 0; i < data.length; i++) {
						var Quant = ($('#area-alertas .alerta').length+1+i);
						var Incre = "'";
				        var Unico = new Date();
				            Unico = Unico.getHours()+ '-' +Unico.getMinutes()+ '-' +Unico.getSeconds()+ '-' +Quant;

						var Html = '<div class="alerta '+Unico+'">';
							Html+= '	<div class="titulo"><div class="icone"></div> '+data[i].titulo+' <div class="fechar" onclick="Alerta.Close(' + Incre + Unico + Incre + ')"></div></div>';
							Html+= '	<p>'+data[i].texto+'</p>';
							Html+= '</div>';

						$('#area-alertas').append(Html);									
					}

				}

			}
		});	
	
	}
}

var Vip = {
	Comprar:function(tp){
		$.ajax({
			url: 'lib/Vip',
			type: 'POST',
			dataType: 'Json',
			data: {'tipo': 'Comprar', 'plano':tp},
			success:function(data){
				if(data['erro']){
					Alerta.Init(data['erro']);
				}else{
					Alerta.Init('Plano adquirido com sucesso! <br/>Você será redirecionado aguarde 3 segundos.');
					location.reload();

				}

			}
		});
		
	}
}

var Forum = {
	Ranking: function() {
		$('.forum-ranking .item').click(function() {
			var Verifica = $(this).hasClass('ativo');
			var rel = $(this).attr('rel');
			if(!Verifica){
			$('.forum-ranking .item').removeClass('ativo');
			$(this).addClass('ativo');

			$.ajax({
				url: 'lib/Ranking',
				type: 'POST',
				dataType: 'JSON',
				data: {'rel': rel},
				beforeSend: function(){
					$('.conteudo-ranking-forum').prepend('<div id="loading"></div>');
				},success: function(data){
					setTimeout(function(){
						$('.conteudo-ranking-forum .box-rank:eq(4)').animate({'opacity':'0'}, function(){ $(this).remove()});
					}, 150)

					setTimeout(function(){
						$('.conteudo-ranking-forum .box-rank:eq(3)').animate({'opacity':'0'}, function(){ $(this).remove()});
					}, 250)

					setTimeout(function(){
						$('.conteudo-ranking-forum .box-rank:eq(2)').animate({'opacity':'0'}, function(){ $(this).remove()});
					}, 350)

					setTimeout(function(){
						$('.conteudo-ranking-forum .box-rank:eq(1)').animate({'opacity':'0'}, function(){ $(this).remove()});
					}, 450)

					setTimeout(function(){
						$('.conteudo-ranking-forum .box-rank:eq(0)').animate({'opacity':'0'}, function(){ $(this).remove()});
						$('.conteudo-ranking-forum').html('');
					}, 550);

					setTimeout(function(){
						for (var i = 0; i < data.length; i++) {
							var Html = '<div class="box-rank" style="opacity:0;">';
								Html+= '	<div class="user '+data[i].pos+'">';
								Html+= '		<div class="habbo" style="background-image: url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user='+data[i].autor+'&action=std&direction=3&head_direction=3&img_format=png&gesture=std&headonly=0&size=s);"></div>';
								Html+= '	</div>';
								Html+= '	<div class="lugar">'+(i+1)+'º</div>';
								Html+= '	<div class="nome">'+data[i].autor+'</div>';
								Html+= '	<div class="pontos"><b>'+data[i].pts+'</b> '+data[i].type+'</div>';
								Html+= '</div>';

								$('.conteudo-ranking-forum').append(Html);
								$('.conteudo-ranking-forum .box-rank:eq('+i+')').animate({'opacity':'1'}, (i+1)*100);

						}

					}, 800);

					setTimeout(function(){
						$('#loading').remove();
					}, 1100);



					
				}
			});

		}
			
		});
	},

	Denunciar: function(id){
		$.ajax({
			url: 'lib/Sistem',
			type: 'post',
			data: {'id': id, 'tipo':'DenunciarForum'},
			beforeSend: function() {
				$('.denuciar').animate({'opacity': '.5'});
			},
			success: function(data) {
				$('.denuciar').animate({'opacity': '1'});
				Alerta.Init(data);
			}
		});
	}
}


var Usuario = {
	Login: function() {
		$('input[name="username"]').keyup(function() {
			var username = $('input[name="username"]').val();

			if(username == ''){
				$('#avatarLogin').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Laerciocraq&action=std&direction=3&head_direction=3&img_format=png&gesture=std&headonly=0&size=l)');
			}else{
				$('#avatarLogin').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user='+username+'&action=std&direction=3&head_direction=3&img_format=png&gesture=std&headonly=0&size=l)');
			}
		});

		$('#formLogin').submit(function(e) {
			e.preventDefault();
			var usuario = $('input[name="username"]').val();
			var senha = $('input[name="password"]').val();
			var manter = $('input[type="checkbox"]').is(':checked');

			if (senha == '' || senha == '') {
				Alerta.Init('Os campos não podem ficar em branco.');
			}else {
				$.ajax({
					url: 'lib/Login',
					type: 'POST',
					dataType: 'Json',
					data: {'usuario': usuario,'senha': senha,'manter': manter,'tipo': 'Logar'},
					beforeSend: function() {
						$('#formLogin').animate({'opacity': '0.5'}, 100);
					},
					success: function(data) {
						$('#formLogin').animate({'opacity': '1'}, 100);

						if(data['erro']){
							Alerta.Init(data['erro']);
						}else{
							Alerta.Init('Usuário logado com succeso!');
							location.reload();
						}

						
					}
				});
			}
		})
	},

	Registro: function(){

		$('input[name="username"]').keyup(function() {
			var username = $('input[name="username"]').val();

			if(username == ''){
				$('.avatar_username').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user=Bromarks&action=std&direction=2&head_direction=3&img_format=png&gesture=std&headonly=0&size=b)');
			}else{
				$('.avatar_username').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user='+username+'&action=std&direction=2&head_direction=3&img_format=png&gesture=std&headonly=0&size=b)');
			}
		});

		$('.prox_1').click(function() {
			var username = $('input[name="username"]').val();
			var password = $('input[name="password"]').val();
			var password_r = $('input[name="password_r"]').val();
			var email = $('input[name="email"]').val();

			if(username == '' || username.trim().length < 2) {
				Alerta.Init('O campo de usuário não pode ficar em branco ao ser menor que 2 caracteres.');

			}else if(password == '' || password.trim().length < 6){
				Alerta.Init('Sua senha não pode ficar em branco ao ser menor que 6 caracteres.');

			}else if(password != password_r){
				Alerta.Init('As senhas digitas não coincidem.');

			}else if(!Email_Validation(email)){
				Alerta.Init('Digite um email valido.');

			}else{
				Alerta.Init('Verificando se esses dados já foram usados...');
				$.ajax({
					url: 'lib/VerificaDados',
					type: 'POST',
					dataType: 'json',
					data: {'tipo': 'Registro', 'nick': username, 'email': email},
					success: function(data){
						if(data['result'] == 'ok'){
						    Alerta.Init('Legal! É o seu primeiro cadastro, vamos lá!');
							$('.etapas .etapa:eq(0)').addClass('concluido').removeClass('atual').next().addClass('atual');
							$('.tela_1').animate({'margin-top':'+=10px'}, 400).animate({'margin-top':'-=220px'}, 250);
							$('.nao-necessario').animate({'opacity':'1'});
							$('.hotel, .pc').removeClass('inativo');

                            $('.prox_2').click(function() {
									$.ajax({
										url: 'lib/Login',
										type: 'POST',
										dataType: 'json',
										data: {
											'codigo': $('.codigo').html(),
											'usuario': username,
											'tipo': 'Registro',
											'senha': password,
											'email': email,
										},beforeSend: function(){
											$('.tela_2').append('<div id="loading" style="top: 0; left: 0; right: 0;"></div>');
										},success: function(data) {
											$('#loading').remove();

											if(data['erro']){
												Alerta.Init(data['erro']);
											}else{
												$('.etapas .etapa:eq(3)').addClass('concluido').removeClass('atual');

												setTimeout(function(){
													location.href="index.php";
												}, 2000);

												Alerta.Init(data['sucess']);
												Alerta.Init('Você será redirecionado, aguarde.');
											}
										}
									})

									
								});

						}else{
							Alerta.Init(data['result']);
							var Verifica = false;
						}
					}
				});

			}


		});

	},

	Logout:function(){
		$.ajax({
			url: 'lib/Login',
			type: 'POST',
			data: {'tipo': 'Logout'},
			success:function(data){
				location.reload();
				Alerta.Init(data);
			}
		})
		
	},

	Denunciar: function(id, tp){
		$.ajax({
			url: 'lib/Sistem',
			type: 'POST',
			dataType: 'json',
			data: {'id': id, 'Area':tp, 'tipo': 'Geral_c'},
			beforeSend: function(){
				$('.denunciaC[rel="'+id+'"]').animate({'opacity':'0.5'})
			},success: function(data){
				$('.denunciaC[rel="'+id+'"]').animate({'opacity':'1'})
				Alerta.Init(data['result']);
			}

		})
	},

	Pedidos: function(){
		$('#pedidos').submit(function(e) {
			e.preventDefault();
			var texto = $('textarea[name="texto_pedido"]').val();
			if(texto.length < 5){
				Alerta.Init('Seu pedido precisa ter pelo menos 5 caracteres');
			}else{

				$.ajax({
					url: 'lib/Sistem',
					type: 'POST',
					dataType: 'Json',
					data: {'texto': texto, 'tipo': 'Pedido'},
					beforeSend: function(){
						$('#pedidos').animate({'opacity':'0.5'})
					},success: function(data){
						//console.log(data);
						$('#pedidos').animate({'opacity':'1'});
						if(data['erro']){
							Alerta.Init(data['erro']);
						}else{
							Alerta.Init(data['result']);
						}

						if(data['result'] == 'Pedido enviado com sucesso!'){
							$('.no-blurred').removeClass('blurred'),
							$('#box-pedido').removeClass('ativo');
						}
					}

				})
			}
			
		});
	},

	Perfil: function() {
		$('#perfilSubmit').submit(function(e) {
			e.preventDefault();

			var recebe = $('.ftPerfil').attr('rel');
			var texto = $('textarea[name="texto_p"]').val();
			var privida = $('input[name="privada"]').is(":checked");

			if(texto.length < 5){
				Alerta.Init('O texto do comentário precisa ter no minimo 5 caracteres.');
			}else{
				$.ajax({
					url: 'lib/Comentar',
					type: 'POST',
					dataType: 'json',
					data: {'texto': texto, 'recebe': recebe, 'privada': privida, 'tipo':'perfil'},
					beforeSend: function(){
						$('#perfilSubmit').animate({'opacity':'0.5'});
					},success: function(data){
						$('#perfilSubmit').animate({'opacity':'1'});

						if(data['erro']){
							Alerta.Init(data['erro']);
						}else{
							RefreshPerfil(recebe);
						}
					}
				});
			}
		});
	}
}

var Voto = {
	Comentario: function(id, tipo, voto, div) {
		$.ajax({
			url: 'lib/Votar_comentario',
			type: 'POST',
			dataType: 'json',
			data: {'id': id, 'tipo': tipo, 'voto': voto},
			beforeSend: function(){
				$('.btn[rel="'+div+'"]').animate({'opacity':'0.5'});
			},success: function(data){
				$('.btn[rel="'+div+'"]').animate({'opacity':'1'});
				if(!data['erro']){
					var Total = $('.btn[rel="'+div+'"]').html();
					$('.btn[rel="'+div+'"]').html((parseInt(Total)+1));
				}else{
					Alerta.Init(data['erro']);
				}
			}

		})
		
	},

	Geral: function(id, tipo, voto, div) {
		$.ajax({
			url: 'lib/Votar',
			type: 'POST',
			dataType: 'json',
			data: {'id': id, 'tipo': tipo, 'voto': voto},
			beforeSend: function(){
				$(div).animate({'opacity':'0.5'});
			},success: function(data){
				$(div).animate({'opacity':'1'});
				if(!data['erro']){
					var Total = $(div).html();
					$(div).html((parseInt(Total)+1));
				}else{
					Alerta.Init(data['erro']);
				}
			}

		})
	}

}

var Radio = {
	Start: function(i, tp) {
		$.ajax({
		    url: 'lib/Status',
		    type: 'GET',
		    dataType: 'Json',
		    data: {'op': 'View'},
		    beforeSend:function(){
		      if(tp != 'Avatar'){
		    	$(i+'[name="'+tp+'"]').html('...');
		      }else{
		        $('div[name="Avatar"]').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user=laerciocraq&action=std&direction=3&head_direction=3&gesture=spk&headonly=0&size=b)')
		      }
		    },success:function(data) {

		      if(!i && !tp){
		        $('div[name="Avatar"]').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user='+data['Locutor']+'&action=std&direction=3&head_direction=3&gesture=spk&headonly=0&size=b)')
		        $('i[name="OuvType"]').html(data['Type']);
		        $('span[name="Unicos"]').html(data['Unicos']);
		        $('i[name="Programa"]').html(data['Programa']);
		        $('div[name="Locutor"]').html(data['Locutor']);
		        $('span[name="UserOn"]').html(data['UserOn']);

		        if(data['Alerta'] > 0){
		        	//Alerta.TempoReal();
		        }
		      }else{
		        if(tp == 'Avatar'){
		          $('div[name="Avatar"]').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user='+data['Locutor']+'&action=std&direction=3&head_direction=3&gesture=spk&headonly=0&size=b)')
		      
		        }else{
		          $(i+'[name="'+tp+'"]').html(data[tp]);
		          $('i[name="OuvType"]').html(data['Type']);

		        }

		      }

		      $('div[name="PFT"]').css('background-image', 'url(https://www.habbo.com.br/habbo-imaging/avatarimage?&user='+data['horario'][0]['dj']+'&action=std&direction=2&head_direction=3&gesture=sml&headonly=0&size=b)')
		      $('div[name="PDJ"]').html(data['horario'][0]['dj']);
		      $('div[name="PPG"]').html('<span>com</span> '+ data['horario'][0]['pg']);
		      $('div[name="PHR"]').html(data['horario'][0]['duracao']);

		    }
		})  
	}

}

var Loja = {
	Paginacao: function(id) {
		$.ajax({
			url: 'lib/LojaPgt',
			type: 'POST',
			data: {'id': id},
			beforeSend: function(){
				$('.recebeLoja').animate({'opacity':'0.5'});
			},success: function(data) {
				$('.recebeLoja').animate({'opacity':'1'}).html(data);
				//console.log('tipped');
				Tipped.create('.tip');
			}
		})
		
	},

	Compra:function(id){
		$.ajax({
			url: 'lib/Loja',
			type: 'post',
			data: {'id': id},
			success:function(data){
				Alerta.Init(data);
			}
		});
	}
}

var Site = {
    CountTop: 0,
    CountLeft: 0,
    
    Nuvem: function(){
        $('.nuvens').css('background-position', this.CountTop + 'px ' + this.CountLeft + 'px');
        this.CountTop+=1;
        this.CountLeft-=1;
        
        setTimeout(function(){
            Site.Nuvem();
        }, 150)
    },
    
    ChuvaStatus: false,
    Chuva: function() {
        var chuvaSite = $('#chuva-tema');
        
        if(Site.ChuvaStatus){
            chuvaSite.animate({'opacity':'0'}, 1000);
        }else{
            chuvaSite.animate({'opacity':'1'}, 1000);
        }
        
        Site.ChuvaStatus = !Site.ChuvaStatus;
        setTimeout(function(){
            Site.Chuva();
        }, 30000); 
    },
    
    ThemeStatus: false,
    ThemeNameActive: null,
    
    Tema: function(tema=null){
        var fundoSite = $('#topo-site-back');
        var teatroSite = $('#teatro-tema');
        var data = new Date();
        var hora = data.getHours();  
        
        if(tema != null){
            var ThemeName = tema;
        }else{
            if(hora >= 6 && hora <= 17){
                var ThemeName = 'dia';
            }else{
                var ThemeName = 'noite';
            }
            
            
        }
        
        if(!this.ThemeStatus){
            if(ThemeName == 'dia'){
                fundoSite.css({'background-color: black;'});
                teatroSite.css({'background-image':'url(http://coldhabbo.com.br/media/img/tema-trovao/fogao-dia.png)'});
                this.ThemeNameActive = ThemeName;
            }else{
                fundoSite.css({'background-image':'url(https://i.imgur.com/DFuXCa9.gif)'});
                teatroSite.css({'background-image':'url(http://coldhabbo.com.br/media/img/tema-trovao/fogao-noite.png)'});
                this.ThemeNameActive = ThemeName;
            }
            
            this.ThemeStatus = true;
        }else{
            if(this.ThemeNameActive == 'dia' && ThemeName == 'noite'){
                fundoSite.css({'background-image':'url(https://i.imgur.com/DFuXCa9.gif)'});
                teatroSite.css({'background-image':'url(http://coldhabbo.com.br/media/img/tema-trovao/fogao-noite.png)'});
                
                this.ThemeNameActive = ThemeName;
            }else if(this.ThemeNameActive == 'noite' && ThemeName == 'dia'){
                fundoSite.css({'background-color: black;'});
                teatroSite.css({'background-image':'url(http://coldhabbo.com.br/media/img/tema-trovao/fogao-dia.png)'});
                
                this.ThemeNameActive = ThemeName;
            }
        }
        
        //console.log('check-tema: '+ ThemeName + ', agora são: ' + hora + 'horas ' + this.ThemeNameActive);

    }
}

var TL = {
	Renew: function(){
		$.ajax({
					url: 'lib/Tl',
					type: 'post',
					dataType: 'json',
					data: {'tipo':'renew'},
					beforeSend:function(){
						$('#removerTls').animate({'opacity':'0.5'}, 300);
					},success:function(data){
						if(data['erro']){
							console.log('faio');
						}else{
							$('#removerTls').html('');
							var html = '<div class="Tls">';
								html += data[0]['player'];
							for (i = (data.length-1); i >= 0 ; i--) {
								html += '<div class="cadaTl">';
								html +=' 	<div class="cabeca" style="background-image: url(\'http://www.habbo.com.br/habbo-imaging/avatarimage?&user='+data[i].user+'&action=std&direction=4&head_direction=3&img_format=png&gesture=std&headonly=1&size=b\');"></div>';
								html +='	<div class="triangle"></div>';
								html +='	<div class="texto"><b>'+data[i].user+' diz: </b>'+data[i].text+'</div>';
								html +='</div>';	
							}
							html += '<div class="cadaTl" style="width:2px"></div></div>';
							$('#removerTls').html(html);						
							$('#removerTls').delay(200).animate({'opacity':1}, 300, function(){
								$('#removerTls .Tls').simplyScroll({
									speed: 3,
									autoMode: 'loop',
									frameRate: 40
								});
							})
						}
					}
				})
	},
	Add: function(){
		$(".timeline .bnt-enviar > .active").on('click', function(){
			self = $(this);
			var str = $('input[name="timeline"]').val();
			if (str == '' || str.length < 5) {
				Alerta.Init("Comentário muito curto!");
			} else {
				$.ajax({
					url: 'lib/Tl',
					type: 'post',
					dataType: 'json',
					data: {'texto': str, 'tipo':'add'},
					beforeSend:function(){
						self.animate({'opacity':'0.5'});
					},success:function(data){
						$('input[name="timeline"]').val('');
						self.animate({'opacity':'1'});
							TL.Renew();

						if(data['erro']){
							Alerta.Init(data['erro']);
						}else{
						}
					}
				})
			}
		})
	}
}

var Bbc = {
	Ver: function(){
		$.ajax({
			url: 'lib/bbb',
			type: 'post',
			dataType: 'json',
			data: {'tipo':'ver'},
			beforeSend:function(){
				$(".conteudo-bbb").animate({'opacity':'0'});
			},success:function(data){
				var habbos = data['sql1']['habbos'].split(/\s+/);
				var habbos2 = data['sql2']['habbos'].split(/\s+/);
				var Html = '<div class="logo-bbb"></div>';
					Html += '<div class="base-votoP"><div class="tempofalta a'+data['sql1']['data']+'"></div>';
				for (var i = habbos.length - 1; i >= 0; i--) {
					if (i == 3) {
						Html += '<h1>CASAIS HC</h1>';
					}
					if (data['votar'] == 'sim') {
						var vota = 'title="Votar" onclick="Bbc.Votar(\''+habbos[i]+'\', '+data['sql1']['id']+')"';
					} else {
						var vota = 'title="'+data['sql1']['conta'][i]+' Votos"';

					}
					Html += '<div class="cadaBBC a'+i+'" '+vota+'>';
					Html += '<div class="t2">'+habbos[i]+'</div>';
					Html += '</div>';
				}
				for (var i2 = habbos2.length - 1; i2 >= 0; i2--) {
					if (i2 == 3) {
						Html += '<h1>CASAIS NÃO-HC</h1>';
					}
					if (data['votar'] == 'sim') {
						var vota = 'title="Votar" onclick="Bbc.Votar(\''+habbos2[i2]+'\', '+data['sql2']['id']+')"';
					} else {
						var vota = 'title="'+data['sql2']['conta'][i2]+' Votos"';

					}
					Html += '<div class="cadaBBC a'+i+'" '+vota+'>';
					Html += '<div class="t2">'+habbos2[i2]+'</div>';
					Html += '</div>';
				}
					Html += '</div><div class="clearfix"></div>';
				$('.conteudo-bbb').html(Html);
				$(".conteudo-bbb").animate({'opacity':'1'});
				Tipped.create('.conteudo-bbb .cadaBBC');
				setInterval(function(){
					Bbc.TempoFalta(data['sql1']['data']);
				}, 1000);
				if(data['erro']){
					Alerta.Init(data['erro']);
				}else{
				}
			}
		})
	},
	TempoFalta: function(data){
		var dat = parseInt(data)+300;
		var now = parseInt(new Date().getTime() / 1000)-10;
		var result = parseInt((dat-now) / 60);
		var resto = (dat-now)%60;
		if (result == 0 && resto == 0) {
			Bbc.Ver();
		}
		if (result <= 0 && resto <= 0) {
			$('.tempofalta.a'+data).html('VOTAÇÃO ENCERRADA');
		} else {
			if (resto < 10) {
				resto = '0'+resto;
			}
			$('.tempofalta.a'+data).html('ENCERRA EM '+result+':'+resto+' MINUTOS');					
		}
	},
	Votar: function(user, id){
		$.ajax({
			url: 'lib/bbb',
			type: 'post',
			dataType: 'json',
			data: {'user':user, 'id':id, 'tipo':'Votar'},
			beforeSend:function(){
			},success:function(data){
				if(data['erro']){
					Alerta.Init(data['erro']);
				}else{
					Alerta.Init(data['sucesso']);
				}
			}
		})
	}
}

$(document).ready(function(){
    Site.Tema();
	Forum.Ranking();
	Usuario.Registro();
	Usuario.Login();
	Radio.Start();
	Usuario.Pedidos();
	Usuario.Perfil();
    //Site.Nuvem();
    Site.Chuva();
	Alerta.TempoReal();
	verPerfil();
	Alerta.Notification();
	TL.Add();
	TL.Renew();

	setInterval(function(){
    	Radio.Start();
    	Site.Tema();
		Alerta.TempoReal();
	}, 10000);

	setInterval(function(){
		Alerta.Notification();		
	}, 60000);

	setInterval(function(){
		TL.Renew();		
	}, 120000);

	$('div[name="Avatar"]').click(function() {
		Radio.Start('div', 'Avatar');
	});

	$('span[name="Unicos"]').click(function() {
	  Radio.Start('span', 'Unicos');
	});

	$('span[name="UserOn"]').click(function() {
	  Radio.Start('span', 'UserOn');
	});

	$('i[name="Programa"]').click(function() {
	  Radio.Start('i', 'Programa');
	});

	$('div[name="Locutor"]').click(function() {
	  Radio.Start('div', 'Locutor');
	});

	$("#user-scroll").simplyScroll();
	$('#removerTls .Tls').simplyScroll({
		speed: 12
	});

	$(".fancybox").fancybox({
		maxHeight	: 500,
		fitToView	: false,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$('.box-membro').click(function() {
		$('.box-membro').removeClass('e-ativo');
		$(this).addClass('e-ativo');
		Equipe($(this).attr('icone'), $(this).attr('nome'), $(this).attr('rel'));

	});

	$('.ver__mais__').click(function() {
		if(!$(this).hasClass('ativo')){
			$('.ver__mais__').removeClass('ativo');
			$('.ver__mais__').next().css({'overflow':'hidden','height':'0px'});
			$(this).addClass('ativo');
			$(this).next().removeAttr('style');
		}else{
			$(this).removeClass('ativo');
			$(this).next().css({'overflow':'hidden','height':'0px'});
		}
		
	});

	$('.btnApagarP').click(function() {
		var self = $(this);
		var id = self.attr('rel');

		$.ajax({
			url: 'lib/Sistem',
			type: 'post',
			dataType: 'json',
			data: {'id': id, 'tipo':'apagar'},
			beforeSend:function(){
				self.animate({'opacity':'0.5'});
			},success:function(data){
				self.animate({'opacity':'1'});

				if(data['erro']){
					Alerta.init(data['erro'])
				}else{
					self.parent().parent().remove();
				}
			}
		})
		
	});


})


/*
* Plugin de paginacao ColdHabbo
* Created by Laercio Calheiros
* Uso por 3º não autorizado
*/

$.fn.paginacao = function(options) {
    var defaults = {
        'url'       : null,
        'type'      : null,
        'dataType'  : null,
        'tipo'      : null,
        'direcao'   : null,
        'proximo'   : null,
        'anterior'  : null,
        'box_princ' : null,
        'total'     : null,
        'movimento' : null,
        'result'    : null,
        'init'      : null,
        'refresh'	: null,
        'pg_atual'  : 1,
        'pg_aberta' : 1,
        'cadastros' : 0,
    };
 
    var config = $.extend({}, defaults, options);
    config.init = 'A páginação para "' + this.selector + '" foi iniciada.';
    var pg_total = Number(config.cadastros/config.total);
    var element = this.selector;
    config.box_princ = element;
    //console.log(config.init);

    $(config.refresh).click(function() {
    	$(config.box_princ).animate({'opacity':'0.5'});
    	config.pg_atual = 1;
    	config.pg_aberta = 0;
    	$(config.box_princ).animate({'margin-left':'0'});
    	$(config.box_princ).animate({'margin-top':'0'});

    	$.ajax({
            url: 'lib/Refresh',
            type: config.type,
            data: {'tipo': config.tipo},
            success:function(data){
            	$(config.box_princ).animate({'opacity':'1'}).html(data);
            }
        });

	});

	if(config.tipo == 'noticia'){
		$('.icone-categoria-noticia').click(function() {
			var id = $(this).data('id');
			if(!$(this).hasClass('ativo')){
				$('.icone-categoria-noticia').removeClass('ativo');
				$(this).addClass('ativo');

				$.ajax({
		            url: 'lib/Noticia',
		            type: config.type,
		            data: {'id':id},
		            beforeSend:function(){
		            	$(config.box_princ).animate({'opacity':'0.5'});
		            },success:function(data){
		            	config.pg_atual = 1;
				    	config.pg_aberta = 0;
				    	$(config.box_princ).animate({'margin-left':'0'});
				    	$(config.box_princ).animate({'margin-top':'0'});
		            	$(config.box_princ).animate({'opacity':'1'}).html(data);
		            }
		        });
			}
		});

		$('.searchNews').submit(function(e) {
			e.preventDefault();
			var val = $('input[name="search"]').val();

			$.ajax({
		            url: 'lib/Noticia',
		            type: config.type,
		            data: {'search':val},
		            beforeSend:function(){
		            	$(config.box_princ).animate({'opacity':'0.5'});
		            },success:function(data){
		            	config.pg_atual = 1;
				    	config.pg_aberta = 0;
				    	$(config.box_princ).animate({'margin-left':'0'});
				    	$(config.box_princ).animate({'margin-top':'0'});
		            	$(config.box_princ).animate({'opacity':'1'}).html(data);
		            }
		        });


		});
	}


    $(config.proximo).click(function() {
        if(config.pg_atual < pg_total){
            pagination.next();
        }else{
            $(config.proximo).animate({'opacity':'0.5'}, 0);
            $(config.proximo).css('cursor','default');
        }

        if(config.pg_atual < 1) {
            $(config.anterior).animate({'opacity':'0.5'}, 0);
            $(config.anterior).css('cursor','default');
        }else{
            $(config.anterior).animate({'opacity':'1'}, 0);
            $(config.anterior).css('cursor','pointer');
        }
    });

        $(config.anterior).click(function() {
            pagination.prev();
            var pg_total = Number(config.cadastros/config.total);
            if(config.pg_aberta >= pg_total){
                $(config.proximo).animate({'opacity':'1'}, 0);
                $(config.proximo).css('cursor','pointer');
            }
        });

        var pagination = {
            next:function(){
                if(config.pg_atual >= config.pg_aberta){
                    $.ajax({
                        url: config.url,
                        type: config.type,
                        dataType: config.dataType,
                        data: {'tipo': config.tipo, 'pg':config.pg_atual+1},
                        beforeSend:function(){
                            $(config.box_princ).animate({'opacity':'0.5'});
                        },success:function(data){
                            config.result(data, element);
                            if(config.direcao == 'left'){
                                $(config.box_princ).animate({'opacity':'1'});
                                $(config.box_princ).animate({'margin-left':'+=30px'}, 600);
                                $(config.box_princ).animate({'margin-left':'-='+config.movimento+'px'}, 300);
                            }else{
                                $(config.box_princ).animate({'opacity':'1'});
                                $(config.box_princ).animate({'margin-top':'+=30px'}, 600);
                                $(config.box_princ).animate({'margin-top':'-='+config.movimento+'px'}, 300);
                            }
                            config.pg_atual++;
                            config.pg_aberta++;

                            if(config.pg_atual < pg_total){
					            $(config.proximo).animate({'opacity':'1'}, 0);
					            $(config.proximo).css('cursor','pointer');
					        }else{
					            $(config.proximo).animate({'opacity':'0.5'}, 0);
					            $(config.proximo).css('cursor','default');
					        }

                        }
                    })
                    
                }else{
                    if(config.direcao == 'left'){
                        $(config.box_princ).animate({'margin-left':'+=30px'}, 600);
                        $(config.box_princ).animate({'margin-left':'-='+config.movimento+'px'}, 300);
                    }else{
                        $(config.box_princ).animate({'margin-top':'+=30px'}, 600);
                        $(config.box_princ).animate({'margin-top':'-='+config.movimento+'px'}, 300);
                    }
                    config.pg_atual++;

                }
            },

            prev:function(){
                if(config.pg_atual > 1){
                    $(config.box_princ).animate({'opacity':'1'});

                    if(config.direcao == 'left'){
                        $(config.box_princ).animate({'margin-left' : '-=30px'}, 400);
                        $(config.box_princ).animate({'margin-left' : '+='+config.movimento+'px'}, 400);
                    }else{
                        $(config.box_princ).animate({'margin-top' : '-=30px'}, 400);
                        $(config.box_princ).animate({'margin-top' : '+='+config.movimento+'px'}, 400);

                    }
                    config.pg_atual--;
                    if(config.pg_atual <= 1) {
			            $(config.anterior).animate({'opacity':'0.5'}, 0);
			            $(config.anterior).css('cursor','default');
			        }else{
			            $(config.anterior).animate({'opacity':'1'}, 0);
			            $(config.anterior).css('cursor','pointer');
			        }
                }else{
                    $(config.anterior).animate({'opacity':'0.5'}, 0);
                    $(config.anterior).css('cursor','default');
                }

            }

        }
}


function Email_Validation(mail){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	return regex.test(mail);
}

function Equipe(icone, nome, id){
	$('.add_equipe .icone').css('background-image', 'url('+icone+')');
	$('.add_equipe span').html(nome);
	$.ajax({
		url: 'lib/Equipe',
		type: 'POST',
		dataType: 'HTML',
		data: {'id': id},
		beforeSend: function(){
			$('.add_membros').animate({'opacity':'0.5'});
		},success: function(data){
			$('.add_membros').animate({'opacity':'1'}).html(data);
		}
	})
	
}

function RefreshPerfil(user){
	$.ajax({
		url: 'lib/RefreshPerfil',
		type: 'POST',
		data: {'user': user},
		beforeSend: function(){
			$('.perfilComentarios').animate({'opacity':'0.5'});
		},success:function(data){
			$('.perfilComentarios').html(data).animate({'opacity':'1'});
		}
	})
	
}

function setBBCode(elementID, openTag, closeTag) {
    var textArea = $('#' + elementID);
    var len = textArea.val().length;
    var start = textArea[0].selectionStart;
    var end = textArea[0].selectionEnd;
    var selectedText = textArea.val().substring(start, end);
    var replacement = openTag + selectedText + closeTag;
    textArea.val(textArea.val().substring(0, start) + replacement + textArea.val().substring(end, len)).focus();
}

function verPerfil(){
	$("[data-perfil]").css('cursor', 'pointer');
	$("[data-perfil]").on('click', function(){
		var n = $(this).attr('data-perfil');
		location.href="perfil/"+n;

	})
}

$(document).ready(function () {
	// PLAY/PAUSE BY Iago Santana
	var audio = $('#framePlayer', window.parent.document).contents().find('#stream')[0];
	$('.player .voto.positivo').click(function(){
		audio.volume = 1;
	});
	$('.player .voto.negativo').click(function(){
		audio.volume = 0;
	})

	// TIMELINE BY Iago Santana
	$('.timeline .bnt-enviar > .input > input').keyup(function(){
		var char = $('.timeline .bnt-enviar > .input > .lChar');
		var a = $(this).val().length;
		var b = 35;
		var r = b - a > 0 ? b - a : 0;
		if (r <= 0) {
			char.css('background','#c03838');
		} else {
			char.css('background','#4db402');
		}
		$('.timeline .bnt-enviar > .input > .lChar').html(r);
	});

	$('.timeline .bnt-enviar').hover(function(){
		$(this).find('.input').stop().fadeIn(500);
	}, function(){
		$(this).find('.input').stop().fadeOut(500);
	});
 	$('#topo-site > #menu > li.altern').click(function(){
    	window.open('http://coldhabbo.com.br/ouvir.php');
	});
});




