$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.10; /*movimiento de la barra scroll mas lento entre mas pequeño*/

		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});