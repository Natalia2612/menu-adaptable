$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};

/*$('h2').on('click',function(){
    $(this).next().slideToggle();
});*/
//Aplicar delegacion de eventos al padre y 
//luego delegar a los hijos.. Es decir pasamos el evento al padre y este se lo delega a los hijos