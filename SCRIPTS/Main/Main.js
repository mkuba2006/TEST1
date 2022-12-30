$('nav a').on('click', function(e){
  e.preventDefault();
  var url = this.href;
  $('nav a.active').toggleClass( "active" )
  $(this).toggleClass( "active" )
  setTimeout(`location.href = '${url}';`,500);
  })


$('#fa:last-child').hover(function () {
  $(this).toggleClass( "fa-active" );
  }
), true;



  const dzis = new Date();
  var rok = dzis.getFullYear();
  var est = new Date('Sep 10, 2021 15:00:00');
  var roznica = dzis.getTime() - est.getTime();
  roznica = Math.ceil(roznica / 31556900000);
  
  var msg = document.getElementById('clock');
  if(Math.floor(roznica)>1){
  msg.textContent = textContent = Math.floor(roznica) + ' year/s';
  } else{
    msg.textContent = textContent = Math.floor(roznica) + ' year';
  }





 const nav = document.querySelector('nav');
 const nav_links = document.querySelectorAll('nav a');
 const burger = document.querySelector('#burger');
 
 burger.addEventListener('click', () => {
     burger.classList.toggle('toggle');
     nav.classList.toggle('nav_active');
     nav_links.forEach((link, index) => {
         link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;
     })
 })





const text = document.querySelectorAll('#text');

text.forEach(text => {
  text.addEventListener('mouseover', ()=>{
    text.classList.add('color_new');
  })
}); 

text.forEach(text => {
  text.addEventListener('mouseout', ()=>{
    text.classList.remove('color_new');
  })
}); 


