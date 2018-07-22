$(function(){
    $('#menu').load('/view/Homepage/menu1.html');
    $('#type1').load('/view/Homepage/type1.html');
    $('#type2').load('/view/Homepage/type2.html');
//捲動瀏覽器
    var navPos = $("nav").offset().top;

	$(window).scroll(function() {
		if ($(window).scrollTop() > navPos) {
			$("nav").css("position", 'fixed');
		}
		else{
			$("nav").css("positiion",'static');
			alert("Hello! I am an alert box!!");
		}
	});
//捲動瀏覽器

    });
    


