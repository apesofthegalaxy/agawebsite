$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600) {
      $('#phase1').fadeIn();
    } else {
      $('#phase1').fadeOut();
    }
  });


  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 970) {
      $('#phase2').fadeIn();
    } else {
      $('#phase2').fadeOut();
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1130) {
      $('#phase3').fadeIn();
    } else {
      $('#phase3').fadeOut();
    }
  });


  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1600) {
      $('#phase4').fadeIn();
    } else {
      $('#phase4').fadeOut();
    }
  });


 