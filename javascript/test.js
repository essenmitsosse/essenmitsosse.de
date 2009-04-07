$(document).ready(function () {

$("ul.navigation a:first").addClass('selected');

var $panels = $('#slider .scrollContainer > div');
var $container = $('#slider .scrollContainer');
var $scroll = $('#slider .scroll');

$scroll
	.before('<p class="scrollButtons left">&laquo;</p>')
	.before('<p class="scrollButtons right">&raquo</p>');

$("p.left").hide();

function selectNav() {
	$(this).parents('ul:first').find('a').removeClass('selected')
	.end().end()
	.addClass('selected');
}

/* $('#slider .navigation a').hover(selectNav); */

function trigger(data) {
$("p.left").show();
$("p.right").show();

	if (data.id  == "postone")
		{var el = $('a#linkone');
		$("p.left").hide();}
		
	if (data.id  == "posttwo")
		{var el = $('a#linktwo');}
		
	if (data.id  == "postthree")
		{var el = $('a#linkthree');}
		
	if (data.id  == "postfour")
		{var el = $('a#linkfour');}
		
	if (data.id  == "postfive")
		{var el = $('a#linkfive');}
		
	if (data.id  == "postsix")
		{var el = $('a#linksix');
		$("p.right").hide();}
		

	selectNav.call(el);
}

var scrollOptions = {
	target: $scroll,
	items: $panels,
	navigation: '.navigation a',
	prev: 'p.left', 
	next: 'p.right',
	axis: 'xy',
	onAfter: trigger,
	duration: 250,
	easing: 'linear'
};

$('#slider').serialScroll(scrollOptions);

$.localScroll(scrollOptions);

var config1 = {sensitivity: 7, interval: 50, timeout: 0, over: scrollin1, out: scrollout  
};

var config2 = {sensitivity: 7, interval: 50, timeout: 0, over: scrollin2, out: scrollout  
};

var config3 = {sensitivity: 7, interval: 50, timeout: 0, over: scrollin3, out: scrollout  
};

var config4 = {sensitivity: 7, interval: 50, timeout: 0, over: scrollin4, out: scrollout  
};

var config5 = {sensitivity: 7, interval: 50, timeout: 0, over: scrollin5, out: scrollout  
};

var config6 = {sensitivity: 7, interval: 50, timeout: 0, over: scrollin6, out: scrollout  
};

$("a#linkone").hoverIntent(config1);
$("a#linktwo").hoverIntent(config2);
$("a#linkthree").hoverIntent(config3);
$("a#linkfour").hoverIntent(config4);
$("a#linkfive").hoverIntent(config5);
$("a#linksix").hoverIntent(config6);

function scrollin1(){
		$(".scroll").stop().trigger( 'goto', [ 0 ] );
		selectNav.call($(this));
}

function scrollin2(){
		$(".scroll").stop().trigger( 'goto', [ 1 ] );
		selectNav.call($(this));
}

function scrollin3(){
		$(".scroll").stop().trigger( 'goto', [ 2 ] );
		selectNav.call($(this));
}
function scrollin4(){
		$(".scroll").stop().trigger( 'goto', [ 3 ] );
		selectNav.call($(this));
}

function scrollin5(){
		$(".scroll").stop().trigger( 'goto', [ 4 ] );
		selectNav.call($(this));
}
function scrollin6(){
		$(".scroll").stop().trigger( 'goto', [ 5 ] );
		selectNav.call($(this));
}

function scrollout(){}


});