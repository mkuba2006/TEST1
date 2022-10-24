/*
const nav = document.querySelector('nav');
const nav_el = nav.querySelectorAll('a');

const contact = document.getElementById('content');
const container = document.getElementById('container');
const nav_a = document.querySelectorAll('nav a');
const nav_a_active = document.querySelectorAll('nav a.active');


nav_a.on().on('click', function(e){  

  e.preventDefault();

  var url = this.href;

  nav_a_active.removeClass('active')
  $(this).addClass('active')

  container.remove();
  $('#content').fadeOut('50000').hide();
  $('#content').load(url + '#content').hide().fadeIn('500');

})

*/

$('nav a').on('click', function(e){

  e.preventDefault();
  
  var url = this.href;
  
  $('nav a.active').removeClass('active');
  $(this).addClass('active')
  
  $('#container').remove();
  $('#content').fadeOut('50000').show();
  $('#content').load(url + '#content').hide().fadeIn('500');
  })

/*
  const burger = document.getElementById('#burger');
  burger.on('click', () =>{

    burger.


  })
  */