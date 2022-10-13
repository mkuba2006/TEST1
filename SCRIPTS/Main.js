/*
const nav = document.querySelector('nav');
const nav_el = nav.querySelectorAll('a');
*/




$('nav a').on('click', function(e){

  e.preventDefault();
  
  var url = this.href;
  
  $('nav a.active').removeClass('active');
  $(this).addClass('active')
  
  $('#container').remove();
  $('#content').load(url + '#content').hide().fadeIn('200');
  
  
  })
