$(document).ready(function() {

	
	var width = $('html,body').width();
	
	$('.name h1').each(function(index, el) {
		
		el.style.animation = `transX 1.5s ease forwards ${index/5 + 0.5}s`;

	});

	$('.sub h5').each(function(index, el) {
		// el.style.animationDelay = '1000';
		el.style.animation = `transX 1.5s ease forwards ${index/5+1}s `
	});

	$('.burger').click(function(event) {
		// console.log('test');
		$('.nav').toggleClass('nav-active');
		$('.header').toggleClass('change-bg-nav');
		$('.burger').toggleClass('x');
		
		$('.nav li').each(function(index, links) {
			
			if(links.style.animation){
				links.style.animation = ''; /*Nếu đã tồn tại animation do đã click menu 1 lần thì xóa bỏ*/
			}else {
				links.style.animation = `transX 1s ease forwards ${index/9}s`;
				// nếu chưa tồn tại animation hoặc đã xóa bỏ thì thêm animation menu vào.
			}
		});

	});

	if(width<=768){

		$('.nav li a').click(function(event) {
			console.log('test');
			$('.nav').removeClass('.nav-active');
			$('.nav li').each(function(index, links) {
				

				
			});
		});
	}
	
	

	$(window).scroll(function(event) {
		var html = $('html,body').scrollTop();
		var width = $('html,body').width();

		var detail = $('#detail').offset().top;
		var height =$('.first').height();
		if( html >= height-200){
			
			$('.detail').addClass('detail-active');
		}


		var profes = $('.professional').offset().top;
		// var percent = new Array();
		var Span = $('.progress span');
		
		if(html >= (profes-100)){

			$('.percent').each(function () {
			  	var value = $(this).attr('value');
			  	$(this).animate({
			  		width:value+'%',
			  	},{
			  		easing:'swing',
			  		duration:2000 
			  	})	
			});

			$('.progress span').each(function() {
				var value = $(this).attr('value');
				// console.log(value);
				$(this).prop('value',0).animate({
			        Counter: value 
			    	}, {
			        duration: 2000,
			        easing: 'swing',
			        step: function (now) {
			            $(this).text(Math.ceil(now)+"%");
			        }
			    });	
			});
		}
		
		
		
		$('.process').each(function(index, el) {
			var exp = $('.process').offset().top;
			if(html >= exp){
				el.style.animation = `opac 2s ease forwards ${index/2+1}s`;
			}
			
		});
		
		
		var contact = $('#contact').offset().top;
		// console.log(contact);
		// console.log(html);
		
		if(html >= contact-500){
			$('.contact').animate({opacity: '1'}, 2500);
			
			if (width>=1024) {
				$('.contact').css({transform: 'translate(-50%,-50%)',transition:'transform 2s ease'});
				
				$('.links').animate({opacity:'1'}, 2500);
				$('.links').css('transform', 'translateY(0%)').css({transition:'transform 2s ease'});	
			}else {
				$('.contact').css({transform: 'translateY(0%)',transition:'transform 2s ease'});

				var social = $('.social').offset().top;
				if (html>=social-400) {
					$('.links').animate({opacity:'1'}, 2500);
					$('.links').css('transform', 'translateY(0%)').css({transition:'transform 2s ease'});
				}	
			}
			
		}
	});	

});
