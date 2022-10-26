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
  
  $('nav a.active').toggleClass( "active" )
  $(this).toggleClass( "active" )
  $('#content').fadeOut(1000);
  $('#content').load(url + '#content').hide().fadeIn(500);
  })

/*
  const burger = document.getElementById('#burger');
  burger.on('click', () =>{

    burger.


  })
  */

  var dzis = new Date();
  var rok = dzis.getFullYear();
  var est = new Date('Sep 10, 2021 15:00:00');
  var roznica = dzis.getTime() - est.getTime();
  roznica = (roznica / 31556900000);

  var msg = document.getElementById('clock');
  msg.textContent = textContent = Math.floor(roznica) + ' year/s';