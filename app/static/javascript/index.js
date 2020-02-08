$(document).ready(function(){
  var underline_position = '#Homepage';

  $('html').hide();
  $('html').fadeIn(1000);
  $.localScroll({
     target:'body',
     duration: 900
  });

  function adjust_for_window_size() {
    var menu_height = $("#menu-bar").height();//based on height of elements in menu bar, adjust scroll characteristics
    $(".anchor").css("top",-menu_height-10);
  };
  function menu_scroll_underline() {
    var top_of_screen = $(window).scrollTop();
    var menu_height = 2*$("#menu-bar").height();
    var homepage = $("#Homepage-Section").offset().top;
    var employment = $("#Employment-Section").offset().top;
    var projects = $("#Projects-Section").offset().top;
    var education = $("#Education-Section").offset().top;
    var resume = $("#Resume-Section").offset().top;


    if($(".menu-link[href='#Homepage']:hover").length != 0){
      underline_position = "#Homepage";
    }else if($(".menu-link[href='#Employment']:hover").length != 0){
      underline_position = "#Employment";
    }else if($(".menu-link[href='#Projects']:hover").length != 0){
      underline_position = "#Projects";
    }else if($(".menu-link[href='#Education']:hover").length != 0){
      underline_position = "#Education";
    }else if($(".menu-link[href='#Resume']:hover").length != 0){
      underline_position = "#Resume";
    }else if($(".menu-link[href='#Contact']:hover").length != 0){
      underline_position = "#Contact";
    }
    else if($("#contact-popup").css("max-width") != '0px'){
      underline_position = "#Contact";
    }else if (top_of_screen > resume-menu_height){
      underline_position = "#Resume";
    }else if (top_of_screen > education-menu_height){
      underline_position = "#Education";
    }else if (top_of_screen > projects-menu_height){
      underline_position = "#Projects";
    }else if (top_of_screen > employment-menu_height){
      underline_position = "#Employment";
    }else{
      underline_position = "#Homepage";
    }
  }
  function position_underline(position){
    var top_of_screen = $(window).scrollTop();
    $("#menu-underline").css('top', $(".menu-link[href='"+position+"']").offset().top-top_of_screen+$(".menu-link[href='"+position+"']").outerHeight());
    $("#menu-underline").css('margin-left', $(".menu-link[href='"+position+"']").offset().left);
    $("#menu-underline").css('width', $(".menu-link[href='"+position+"']").css('width'));
  }
  function menu_background() {
    var top_of_screen = $(window).scrollTop();
    var homepage_bottom = $("#Homepage-Section").offset().top + $("#Homepage-Section").outerHeight();

    if (top_of_screen < homepage_bottom){
      $('#menu-bar').css('background',"rgba(256,256,256,0.0)");
    } else {
      $('#menu-bar').css('background',"rgba(256,256,256,1)");
    }
  }
  function all_actions() {
    menu_background();
    menu_scroll_underline();
    position_underline(underline_position);
    adjust_for_window_size();
  }
  all_actions();

  $(window).on('mousemove scroll resize', all_actions);

  $("#contact-button").on( "click", function(){//if contact us button pressed, open popup
    $("#contact-popup").css("max-width","400");
    $("#grey").css("visibility","visible");
    $("#grey").css("opacity","0.6");
  });
  $(".popup-closer").on( "click", function(){//if grey box clicked while popup open, close popup
    $("#contact-popup").css("max-width","0");
    $("#grey").css("visibility","collapse");
    $("#grey").css("opacity","0");

    all_actions();
    console.log(underline_position);
  });
});
