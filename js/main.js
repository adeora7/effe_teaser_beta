$(document).ready(function(){
  if(screen.width < 900)
  {
    $(window).scrollTop($(window).height());
    $("#quote").hide();
    $("#logo").css('top', '23vh');
    $("#banner").css('top', '45vh');
    $("#banner").css('font-size', '10vw');
    $("#date").css('top', '58vh');
    $("#date").css('font-size', '5vw');
  }

});
var allow = 1;
$("#date").hide();
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
  this.direction = parseInt(this.el.attr('data-scroll-direction'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  //0 for up 1 for down
  if(allow == 1){
    if(this.direction == 0)
    {  
     this.el.css('transform', 'translateY(' + -pos + '%)');
    }
    else
    {
     this.el.css('transform', 'translateY(' + pos + '%)');
    }
  }
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});

window.addEventListener('scroll', function() {
   if(allow==1){
   if($(window).height() - $(window).scrollTop() == window.innerHeight) {
       //alert("bottom!");
       $(".image").hide();
       $("#logo").show();
       $(".red-light").hide();
       $(".blue-light").hide();
       $("#banner").html("");
       $("#date").hide();
       setTimeout(write, 500, "EFFERVESCENCE", 0);
       setTimeout(staggerlinks, 2700);
       allow = 0;
   }

 }
});


function staggerlinks(){
  TweenMax.staggerTo("#links", 0.5, {
          bottom: "0px",
        opacity: 1,
        ease: Power2.easeOut
      },0.2);
}


function write(s, n)
{
  if(n==s.length)
  {
    $("#date").fadeIn(1500);
    return;
  }
  else
  {
    $("#banner").append(s[n]);
    setTimeout(write, 80, s, n+1);
  }
}