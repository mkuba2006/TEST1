
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
  );
  
  $('#fa:last-child').hover(function () {
    $(this).toggleClass( "fa-active" );
    }
  );

  
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
  
  




class Prod{
  constructor(link, img, text){
    this.link = link;
    this.img = img;
    this.text = text
  }
}

class ProdLook{
  constructor(prod){
    this.prod = prod;
  }

  render(){
    const Ram = document.createElement('li');
    Ram.className = 'Ram-li';
    Ram.innerHTML= `
      <a href="${this.prod.link}"><i class="${this.prod.img}"></i></a>
      <button class="Ram-button">${this.prod.text}</button>
    `;
    return Ram
  }
}


class ProdList{
products =[
  new Prod(
  'https://discord.com/channels/@me',
  'ri-discord-fill',
  'Tap to Discord',
  ),
  new Prod(
  'https://www.instagram.com/jakub_myrta/',
  'ri-instagram-fill',
  'Tap to instagram',
  ),
  new Prod(
  'https://www.facebook.com/profile.php?id=100042699441638',
  'ri-facebook-circle-fill',
  'Tap to Facebook',
  ),
  new Prod(
  'https://twitter.com/JamesM60086044',
  'ri-twitter-fill',
  'Tap to twitter',
  ),  
  new Prod(
  'https://github.com/mkuba2006',
  'ri-github-fill',
  'Tap to GitHub',
  ),
  new Prod(
  'https://www.youtube.com/channel/UCyOQ92MN93d2f4ubJy9SMug',
  'ri-youtube-fill',
  'Tap to YouTube',
  ),

  new Prod(
  'https://open.spotify.com/user/dkjcdvsyjz6ciuzj2xfl5tp6c',
  'ri-spotify-fill',
  'Tap to Spotify',
  ),
  new Prod(
    'https://steamcommunity.com/profiles/76561198866310633/',
    'ri-steam-fill',
    'Tap to Steam',
    ),
];

render(){
    const List_prod = document.createElement('ul');
    List_prod.className = 'List_prod_ul';
    const opis = document.createElement('div');
    opis.setAttribute('id', 'opis');
    const opis_opis = document.createTextNode("My favourite songs");
    opis.setAttribute('id', 'opisa');
    opis.append(opis_opis);
    List_prod.prepend(opis);

    for(const prod of this.products){
      const productItem = new ProdLook(prod);
      const prodEl = productItem.render();
      List_prod.append(prodEl);
    }
    return List_prod;
  }
}

class Sum{
  render() {
    const renderH = document.getElementById('app');
    const productList = new ProdList();
    const prodListEl = productList.render();
    renderH.append(prodListEl);
  }
}


class App {
  static cart;
  static init() {
    const shop = new Sum();
    shop.render();
    this.cart = shop.cart;
  }
}

App.init();






