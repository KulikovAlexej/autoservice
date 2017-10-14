$(document).ready(function(){
	tabs();
	function tabs(){
		var icon = $('.wrap_icons .icon');
		var tabs = $('.tabs');
		var triangle = $('.icon_more .interactive_triangle');
		var arrow_down = $('.icon_more .arrow_down');
		var icon_more = $('.icon .icon_more');

		tabs.eq(0).css('display','block');
		triangle.eq(0).css('display','block');

		icon.mouseenter(function(){
			var index = $(icon).index(this);
			tabs.css('display','none');
			triangle.css('display','none');
			arrow_down.css('background-position','0 -11px');
			tabs.eq(index).css({
				display: 'block',
				opacity: 0
			})
			.animate({
				opacity: 1
			},300);
			triangle.eq(index).css({
				display: 'block',
				opacity: 0
			})
			.animate({
				opacity: 1
			},300);
			arrow_down.eq(index).css('background-position','0 -127px');  
		});

		icon_more.click(function(){
			var index = $(icon_more).index(this);
			var visible = tabs.eq(index).css('display');
			if(visible == 'block'){
				tabs.eq(index).css('display','none');
				triangle.eq(index).css('display','none');
				arrow_down.eq(index).css('background-position','0 -11px');
			}
			if(visible == 'none'){
				tabs.eq(index).css('display','block');
				triangle.eq(index).css('display','block');
				arrow_down.eq(index).css('background-position','0 -127px');
			}
		})
	}
	show_nav();
	function show_nav(){
		var arrow = $('.show_hide').eq(0);
		arrow.click(function(){
			var nav = $('footer nav ul');
			attr = nav.attr('data-visible');
			if(attr == 'visible'){
				nav.slideUp();
				arrow.css({
					borderBottom: "10px solid transparent",
					borderTop: '10px solid white'
				})
				new_attr = nav.attr('data-visible','hidden');
			}
			if(attr == 'hidden'){
				nav.slideDown();
				arrow.css({
					borderBottom: "10px solid white",
					borderTop: '10px solid transparent'
				})
				new_attr = nav.attr('data-visible','visible');
			}
		})
	}
	
});


