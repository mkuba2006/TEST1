
$('nav a').on('click', function(e){

  e.preventDefault();
  
  var url = this.href;
  
  $('nav a.active').toggleClass( "active" )
  $(this).toggleClass( "active" )
  setTimeout(`location.href = '${url}';`,500);
  })



  var dzis = new Date();
  var rok = dzis.getFullYear();
  var est = new Date('Sep 10, 2021 15:00:00');
  var roznica = dzis.getTime() - est.getTime();
  roznica = (roznica / 31556900000);

  var msg = document.getElementById('clock');
  msg.textContent = textContent = Math.floor(roznica) + ' year/s';


  const nav = document.querySelector('nav');
  const nav_links = document.querySelectorAll('nav a');
  const burger = document.querySelector('#burger');

  burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  nav.classList.toggle('nav_active');

  nav_links.forEach((link , index) => {
    link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;

  })
  })
  
