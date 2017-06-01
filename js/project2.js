$(function(){
	
	var okno = $(window);
	var menu = $('#main-menu');
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
	
	//91 - to jest wysokość naszego menu
	
	$(document).on('click', 'a[href^="#"]', function(event){
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') //dla tego atrybutu pobierz wartość href //
			).offset().top - 91}, 500);
		})
	
	
	// opcja bez definiowana wysokosci menu na sztywno, automatycznie bedzie sprawdzana wysokosc menu i ustawiony zostanie odpowiedni offset:
	
//	$(document).on('click', 'a[href^="#"]', function(event){
	//	event.preventDefault();
	//	var menuHeight = $('#main-menu').height();
		
	//	$('html, body').animate({
	//		scrollTop: $( $.attr(this, 'href') ).offset().top - menuHeight}, 500);
	//	})
	});
	
	

	
	
	
	

   