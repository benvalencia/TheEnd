//Resizing
$(document).ready(function(){

	var videoHeight = $('#covideo').height();
	var salaHeight = $('#cosala-marker').outerHeight();
	var eventoTop = videoHeight + salaHeight;
  var eventoHeight = $('#evento').height();
  var menuTop = eventoTop + eventoHeight;
  var menuHeight = $('#menu').height();
  var reservaTop = menuTop + menuHeight;
  var reservaHeight = $('#reservas').height();
  var localizacionTop = reservaTop + reservaHeight;
  var localizacionHeight = $('#localizacion').height();
  var footerTop = localizacionTop + localizacionHeight;

  var coeventoImgHeight = $('#coeventoimg1').height();
  var coeventoImgWidth = $('#coeventoimg1').width();

  var cosalaImgHeight = $('.cosala').outerHeight();
  var cosalaImgWidth = $('.cosala').outerWidth();


    $("#sala").css('top', videoHeight +"px");
    $('#evento').css('top', eventoTop + "px");
    $('#menu').css('top', menuTop + "px");
    $('#reservas').css('top', reservaTop + "px");
    $('#localizacion').css('top', localizacionTop + "px");
    $('#finalfooter').css('top', footerTop + "px");


    $('.coevento-img-inn').css('height', coeventoImgHeight + "px");
    $('.coevento-img-inn').css('width', coeventoImgWidth + "px");

    $('.cosala-img').css('height', cosalaImgHeight + "px");
    $('.cosala-img').css('width', cosalaImgWidth + "px");



// audio icon

//  $('#facebookIcon-inn2').click(function(){
//
//
//    if ( $('#facebookIcon-inn2').height() == 29 ){
//        
//        $('#facebookIcon-inn2').css('background-image', "url(img/on.png)");
//
//        $('#facebookIcon-inn2').css('height', "28px");
//
//        $('#icon-audio').trigger('play');
//     
//    }
//    else{

        $('#facebookIcon-inn2').css('background-image', "url(img/off.png)");

        $('#facebookIcon-inn2').css('height', "29px");

        $('#icon-audio').trigger('pause');   
//
//      }
//  });

//final audio icon

// video mute


  $("#covideo").click( function (){
    if( $("#bgvid").prop('muted') )
    {
      $("#bgvid").prop('muted', false);
    }

    else {
      $("#bgvid").prop('muted', true);
    }

  });

//final video mute
});

 	




$(window).resize(function(){
	
	var videoHeight = $('#covideo').height();
  var salaHeight = $('#cosala-marker').outerHeight();
  var eventoTop = videoHeight + salaHeight;
  var eventoHeight = $('#evento').height();
  var menuTop = eventoTop + eventoHeight;
  var menuHeight = $('#menu').height();
  var reservaTop = menuTop + menuHeight;
  var reservaHeight = $('#reservas').height();
  var localizacionTop = reservaTop + reservaHeight;
  var localizacionHeight = $('#localizacion').height();
  var footerTop = localizacionTop + localizacionHeight;

  var coeventoImgHeight = $('#coeventoimg1').height();
  var coeventoImgWidth = $('#coeventoimg1').width();

  var cosalaImgHeight = $('.cosala').outerHeight();
  var cosalaImgWidth = $('.cosala').outerWidth();


    $("#sala").css('top', videoHeight +"px");
    $('#evento').css('top', eventoTop + "px");
    $('#menu').css('top', menuTop + "px");
    $('#reservas').css('top', reservaTop + "px");
    $('#localizacion').css('top', localizacionTop + "px");
    $('#finalfooter').css('top', footerTop + "px");


    $('.coevento-img-inn').css('height', coeventoImgHeight + "px");
    $('.coevento-img-inn').css('width', coeventoImgWidth + "px");

    $('.cosala-img').css('height', cosalaImgHeight + "px");
    $('.cosala-img').css('width', cosalaImgWidth + "px");


 	


});

//Resizing end

//Window scroll up

var $window = $(window);

$('section[data-type="background"]').each(function(){
    var $bgobj = $(this); 
    $(window).scroll(function() {
                       
        var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
        
        var coords = '50% '+ yPos + 'px';
        
        $bgobj.css({ backgroundPosition: coords });
        
    }); 
    
});

//window scroll up ends

// Slidshow 


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Slidshow ends

// Add Classes on scrolldown


$(window).scroll(function() {    



    var scroll = $(window).scrollTop();
    var videoHeight = $('#covideo').height();
    var salaHeight = $('#cosala-marker').outerHeight();
    var eventoTop = videoHeight + salaHeight;
    var eventoHeight = $('#evento').height();
    var menuTop = eventoTop + eventoHeight;
    var menuHeight = $('#menu').height();
    var reservaTop = menuTop + menuHeight;
    var reservaHeight = $('#reservas').height();
    var localizacionTop = reservaTop + reservaHeight;
    var localizacionHeight = $('#localizacion').height();
    var footerTop = localizacionTop + localizacionHeight;


    if (scroll >= 1) {

      $("#cosala-marker").addClass("cosalaok");
       
    }
    if(scroll >= videoHeight){

        $(".coevento-img").addClass("coevento-img-ok");

    }
    if(scroll >= menuTop){

        $(".coreservas").addClass("corservas-ok");

    }
});

