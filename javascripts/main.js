var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function ulOpen()
{	cancelTimer();
	close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function timer()
{	closetimer = window.setTimeout(close, timeout);}

function cancelTimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

$(document).ready(function() {
	$('ul.head > li').bind('mouseover', ulOpen);
	$('ul.head > li').bind('mouseout',  timer);

	$('#slides').slides({
		preload: true,
		preloadImage: 'images/slide/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true,
		animationStart: function(current){
			$('.caption').animate({
				bottom:-35
			},100);
			if (window.console && console.log) {
				// example return of current slide number
				console.log('animationStart on slide: ', current);
			};
		},
		animationComplete: function(current){
			$('.caption').animate({
				bottom:0
			},200);
			if (window.console && console.log) {
				// example return of current slide number
				console.log('animationComplete on slide: ', current);
			};
		},
		slidesLoaded: function() {
			$('.caption').animate({
				bottom:0
			},200);
		}
	});
});

