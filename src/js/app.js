$(function(){
  if($(window).width() < 960) {
    $('.header').css('display','none');
    $('.sidenav-trigger').css('display','block');

  } else {
    // change functionality for larger screens
  }
});

$('.owl-carousel.chronology').owlCarousel({
    loop:true,
    autoplayTimeout:5000,
    autoplay:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.owl-carousel.index-slide,.owl-carousel.slider-widget').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText : ["назад","Вперед"],
    /*navText : ["<i class='material-icons small'>arrow_back</i>","<i class='material-icons small'>arrow_forward</i>"],*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(document).ready(function(){
  $('.collapsible').collapsible();
		$('.sidenav').sidenav();
		$('.tabs').tabs();
		$('.modal').modal({
			inDuration: 500,
			startingTop: '50%',
			endingTop: '0%'
		});
	});

$(function(){
  var a = $("i.nvi_i");
  var b = $("i.exit_click");

  $(".nvi_i").click(function(){
    $(".nvi_list").toggleClass("active");
    $(".nvi").toggleClass("no-ww ww");
    $(".nvi_i").toggleClass("active no-active");
    $(".exit_click").toggleClass("no-active active");
  });
  $(".exit_click").click(function(){
    $(".nvi_list").toggleClass("active");
    $(".nvi").toggleClass("no-ww ww");
    $(".exit_click").toggleClass("active no-active");
    $(".nvi_i").toggleClass("no-active active ");
  });
});
//Выпадающее меню
$(function(){
  $(".text img").addClass("animImg")
  var timer = setInterval(function(){
    $(".animImg").addClass("slideInUp").addClass('anim_opacity')
  },1000)
  setTimeout(function() {
    clearInterval(timer);
  },3000);
});

//Выпадающее меню
$(function(){
  $(".click").click(function(){
    $('.ele').addClass("anim");
    $('.v8_block').addClass("anim");
  });
});

(function($) {
$(function(){
  $('ul.nvi_list').on('click', 'li:not(.active)', function(){
    $(this).addClass('active').siblings().removeClass('active')
    .closest('div.price_list').find('div.price_box').removeClass('active').eq($(this).index()).addClass('active');
  });
});
})(jQuery);
$(document).ready(function(){
  var resuiltC = function(){
    var varOn = $('input:checked');
    var summ = 0;
    $(varOn).each(function(){
      summ += parseint($(this).val(),10);
    });
    $('.calc').text(varOn);
  };
  resuiltC();
  var sest = $('input[type=checkbox]').on('click',resuiltC);
  console.log(sest);
});
