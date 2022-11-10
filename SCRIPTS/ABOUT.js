
$('nav a').on('click', function(e){

    e.preventDefault();
    
    var url = this.href;
    
    $('nav a.active').toggleClass( "active" )
    $(this).toggleClass( "active" )
    setTimeout(`location.href = '${url}';`,500);
    })


    
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
  