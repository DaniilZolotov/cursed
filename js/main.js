var btn = document.querySelector('.btn')
btn.onclick= function (){
alert('Ну как Вам моя вёрстка?')
}
$(function () {

	$(window).scroll(function() {
	    $('.future').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.icon1').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.icon2').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.icon3').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('form').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('h2').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
})
