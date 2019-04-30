
/*==================================================== NAVIGATION BAR ======================================================== */




window.onload = function() {      /* Center menu infitite scroll */
var deg = 0;
var index = 0;

$('.navbar').on('mousewheel', function (e) {
  var move = -60;
  var nextIndex = nextIndex = (index + 1) % 6;
  if (e.originalEvent.wheelDelta / 120 <= 0) {
    // wheel up
    move = 60;
    nextIndex = index  -1 < 0 ? 5 : index - 1;
  }
  $('.scroll-list').css('transform', 'rotateX(' + (deg + move) + 'deg)');
  $('#' + index).css('opacity', '0.01');
  $('#' + nextIndex).css('opacity', '1');
  index = nextIndex;
  deg = deg + move;
  event.stopPropagation();
});









    $('.toggle-nav').on('click', function() {  /* mini nav on click letter change and animation */
      toggleNavigation($(this), $('.nav-pane'));
      changeLetters($(this));
    });

    function toggleNavigation(btn, nav) {
      btn.toggleClass('open');
      nav.toggleClass('open');
    }

    function changeLetters(btn) {
      var m = $('.toggle-nav span.m');
      var e = $('.toggle-nav span.e');
      var n = $('.toggle-nav span.n');
      var u = $('.toggle-nav span.u');

      e.toggleClass('btn-close');

      if(btn.hasClass('open'))
      {
        m.text("E");
        n.text("I");
        u.text("T");
      }
      else
      {
        m.text("M");
        n.text("N");
        u.text("U");
      }
    }

  /*show transition animation and hide on timer set */
   $('.one').click(function(){
        $('.wall').css('background-image', 'url(' + 'photos/test2.jpg' + ')');
        $('.scene').show(0).delay(5000).hide(0);
    });

    $(".two").click(function(){
        $('.wall').css('background-image', 'url(' + 'photos/test1.jpg' + ')');
        $('.scene').show(0).delay(5000).hide(0);
    });

    $(".three").click(function(){
        $('.wall').css('background-image', 'url(' + 'photos/test4.jpg' + ')');
        $('.scene').show(0).delay(5000).hide(0);
    });

    $(".four").click(function(){
        $('.wall').css('background-image', 'url(' + 'photos/test3.jpg' + ')');
        $('.scene').show(0).delay(5000).hide(0);
    });


$('a').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ...

    setTimeout(function(){
         window.location = goTo;
    },3000);
});





};
/*################# ./CODE TRANSLATED TO BABEL ############################*/
/*==================================================== ./NAVIGATION BAR ======================================================== */
