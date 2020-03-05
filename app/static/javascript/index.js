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
    var education = $("#Education-Section").offset().top;
    var skills = $("#Skills-Section").offset().top;
    var employment = $("#Employment-Section").offset().top;
    var projects = $("#Projects-Section").offset().top;
    var contact = $("#Contact-Section").offset().top;
    var window_height = $(window).height();

    if($(".menu-link[href='#Homepage']:hover").length != 0){
      underline_position = "#Homepage";
    } else if($(".menu-link[href='#Education']:hover").length != 0){
        underline_position = "#Education";
    } else if($(".menu-link[href='#Skills']:hover").length != 0){
          underline_position = "#Skills";
    }else if($(".menu-link[href='#Employment']:hover").length != 0){
      underline_position = "#Employment";
    }else if($(".menu-link[href='#Projects']:hover").length != 0){
      underline_position = "#Projects";
    }else if($(".menu-link[href='#Contact']:hover").length != 0){
      underline_position = "#Contact";
    }
    else if (top_of_screen > contact-window_height){
      underline_position = "#Contact";
    }else if (top_of_screen > projects-menu_height){
      underline_position = "#Projects";
    }else if (top_of_screen > employment-menu_height){
      underline_position = "#Employment";
    }else if (top_of_screen > skills-menu_height){
      underline_position = "#Skills";
    }else if (top_of_screen > education-menu_height){
      underline_position = "#Education";
    }else{
      underline_position = "#Homepage";
    }
  }
  function position_underline(position){
    var top_of_screen = $(window).scrollTop();
    $("#menu-underline").css('top', $(".menu-link[href='"+position+"']").offset().top-top_of_screen+$(".menu-link[href='"+position+"']").outerHeight());
    $("#menu-underline").css('margin-left', $(".menu-link[href='"+position+"']").offset().left-3);
    $("#menu-underline").css('width', $(".menu-link[href='"+position+"']").css('width'));
  }
  function menu_background() {
    var top_of_screen = $(window).scrollTop();
    var homepage_bottom = $("#Homepage-Section").offset().top + $("#Homepage-Section").outerHeight();

    if (top_of_screen < homepage_bottom){
      $('#menu-bar').css('background',"rgba(256,256,256,0)");
    } else {
      $('#menu-bar').css('background',"rgba(256,256,256,.9)");
    }
  }
  function open_accordion(accordion){
    var current_panel = $(accordion).next(".panel");

    $(".accordion, .panel").not(current_panel).not(accordion).removeClass("expanded");

    $(".panel").css("max-height", '0px');

    $(accordion).toggleClass("expanded");
    $(current_panel).toggleClass("expanded");
    if ($(current_panel).css("max-height") == '0px'){
      $(current_panel).css("max-height", $(current_panel)[0].scrollHeight);
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

  function increment_slides(element, positive) {
    var max = parseInt($(element).nextAll("div").attr("max_index"))-1;
    if(! $(element).hasClass("disabled")){
      var slide_index = $(element).nextAll("div").attr("index");
      if (positive){
        $(element).siblings(".left").removeClass("disabled");
        slide_index = parseInt(slide_index)+1;
        if(slide_index>=max){
          $(element).addClass("disabled");
        }
      }
      else {
        $(element).siblings(".right").removeClass("disabled");
        slide_index = parseInt(slide_index)-1;
        if(slide_index<=0){
          $(element).addClass("disabled");
        }
      }
      $(element).nextAll("div").attr("index", slide_index);
      $(element).nextAll("div").css("margin-left", slide_index*(-100)+"%");
    }
  }

  $(".left").on("click", function(){
    increment_slides(this, false);
  });
  $(".right").on("click", function(){
    increment_slides(this, true);
  });

  $(".accordion").on("click", function(){
    open_accordion(this);
  });
});
