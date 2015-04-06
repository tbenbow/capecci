$( document ).ready(function() {
	$('[data-action="toggleNav"]').click(toggleNav);
    $('[data-action="scrollJump"]').click(scrollJump);
    $('[data-action="gifHover"]').hover(gifHoverIn,gifHoverOut);
	shyHeader('header');
	var bubblesBack = $('.bubbles .back');
	var bubblesNext = $('.bubbles .next');
	$('.bubbles').slick({
		adaptiveHeight: true,
		prevArrow: bubblesBack,
		nextArrow: bubblesNext
	});
	var portfolioBack = $('.portfolio .back');
	var portfolioNext = $('.portfolio .next');
	$('.portfolio').slick({
		prevArrow: portfolioBack,
		nextArrow: portfolioNext,
		dots: true
	});
});

function shyHeader(id) {
    var previousScroll = 0;
    var topLock = 0; // The amount of initial scroll allowed before scrollbar hides 
    var navbar = document.getElementById(id),
        navClasses = navbar.classList;

    $(window).scroll(function(){
		var currentScroll = $(window).scrollTop();
		var scrollingDown = currentScroll > previousScroll;
		var unlocked = currentScroll > topLock;

		if (unlocked) {
			navClasses.remove('is-transparent');
		} else {
			navClasses.add('is-transparent');
		}
		if (scrollingDown && unlocked){
			navClasses.add('is-shy');
		} else if ( !scrollingDown ){
			navClasses.remove('is-shy');
		}
		previousScroll = currentScroll;
    });
}

function gifHoverIn(e){
	var src = $(this).attr('src');
	src = src.replace(/\.[^/.]+$/, '.gif');
	$(this).attr('src', src);
}
function gifHoverOut(e){
	var src = $(this).attr('src');
	src = src.replace(/\.[^/.]+$/, '.svg');
	$(this).attr('src', src);
}

function scrollJump(e){
	var target = $(this).data('target');
	var headerHeight = parseInt($('body').css('padding-top'), 10);
	var scrollTo = $(target).offset().top - headerHeight + 'px';

	$('header').removeClass('is-opened');
	$('#navbar-main').removeClass('is-opened');
	// Not the greatest solution, Header and Nav should be one
	// or be decoupled.


	$('html, body').animate({
		scrollTop: scrollTo
	}, 500, 'swing');
}

function toggleNav(){
	var target = $(this).data('target');
	var target = $(target);
	
	if (target.hasClass('is-opened')) {
		target.removeClass('is-opened');
		$('header').removeClass('is-opened');
		if (window.scrollY == 0){
			$('header').addClass('is-transparent');
		}
	} else {
		target.addClass('is-opened');
		$('header').addClass('is-opened');
		$('header').removeClass('is-transparent');
		// Not the greatest solution, Header and Nav should be one
		// or be decoupled.
	}
}