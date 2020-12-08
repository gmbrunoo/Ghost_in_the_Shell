// 1 – Identificar quando o usuário utiliza o scroll
// 2 – Calcular a distância entre o topo da página e o scroll
// 3 – Calcular a distância entre o topo da página e o elemento que deseja animar
// 4 – Comparar as duas distâncias anteriores
// 5 – Adicionar uma classe com css animation ou transition ao elemento animado

/**
 * DEBOUNCE para limitar a função do scroll na função fade content
 */
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

/**
 * Função de animação de conteudo
 */
(function () {
var $target = $('.leftEntrance');
var $target2 = $('.rightEntrance');
var $target3 = $('.fadeEntrance');
var $target4 = $('.fadeEntranceSlow');
var $target42 = $('.fadeEntranceSlow2');
var $target5 = $('.bottomEntrance');
var $offset = $(window).height() * 3/4;

function animatedScroll() {
  var documentTop = $(document).scrollTop();

  $target.each(function () {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - $offset) {
      $(this).addClass('leftEntrance-start');
    } else {
      $(this).removeClass('leftEntrance-start');
    }
	})
	
	$target2.each(function () {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - $offset) {
      $(this).addClass('rightEntrance-start');
    } else {
      $(this).removeClass('rightEntrance-start');
    }
	})
	
	$target3.each(function () {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - $offset) {
      $(this).addClass('fadeEntrance-start');
    } else {
      $(this).removeClass('fadeEntrance-start');
    }
	})
	
	$target4.each(function () {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - $offset) {
      $(this).addClass('fadeEntranceSlow-start');
    } else {
      $(this).removeClass('fadeEntranceSlow-start');
    }
	})

	$target42.each(function () {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - $offset) {
      $(this).addClass('fadeEntranceSlow2-start');
    } else {
      $(this).removeClass('fadeEntranceSlow2-start');
    }
	})
	
	$target5.each(function () {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - $offset) {
      $(this).addClass('bottomEntrance-start');
    } else {
      $(this).removeClass('bottomEntrance-start');
    }
  })
}

animatedScroll();

$(document).scroll(debounce(function(){
  animatedScroll();
}, 200));
}());

/**
 * Função de animação do header
 */
(function () {
	window.addEventListener('scroll', function() {
		var header = document.querySelector('header');
		header.classList.toggle('sticky', window.scrollY > 0);
	});
}());

/**
 * Função que adiciona ACTIVE no menu de acordo com o scroll 
 */
(function () {
$(window).scroll(function() {
	var windscroll = $(window).scrollTop();
	
		$('section').each(function(i) {
			if ($(this).position().top <= windscroll + 50) {
				$('header ul li a.active').removeClass('active');
				$('header ul li a').eq(i).addClass('active');
			}
		});

}).scroll();
}());

/**
 * Função que adiciona ACTIVE ao clicar em algum botao do menu
 */
(function () {
	var btnActive = document.querySelectorAll('.menuBar');
	btnActive.forEach(button => {
			button.addEventListener('click', function() {
					btnActive.forEach(btn => btn.classList.remove('active'));
					this.classList.add('active');
			});
	});
}());

/**
 * Função que adiciona ACTIVE para ativar o menu lateral
 */
function toggleActive() {
	var menuToggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active')
	menu.classList.toggle('active')
}

/**
 * Função que adiciona ACTIVE para chamar o video
 */
function video(){
	var trailer = document.querySelector('.play');
	var video = document.querySelector('video');
	trailer.classList.toggle('active');
	video.currentTime = 0;
	video.pause();
}