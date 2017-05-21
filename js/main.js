$(function(){
	
	var okno = $(window);
	var menu = $('#main-nav');
	var link = $('a');
	
	if(okno.scrollTop() >= 100) {
		menu.addClass('scroll');
	}
	
	
	okno.scroll(function(){
		
		if(okno.scrollTop() >= 100) {
			menu.addClass('scroll');
		} else {
			menu.removeClass('scroll');
		}
	});
	
	//smooth scrolling, po kliknięciu na link przenosi nas do danej sekcji:
	
	
	$(document).on('click', 'a[href^="#"]', function(event){
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') //dla tego atrybutu pobierz wartość href //
			).offset().top - 91}, 500);
		})
	});
	
	
	
	