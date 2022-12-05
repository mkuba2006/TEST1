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










  


class Product {
  constructor(nazwa, link, obraz, text, opis){
    this.nazwa = nazwa;
    this.link = link;
    this.obraz = obraz;
    this.text = text;
    this.opis = opis;
  }
}


class ProductItem {
  constructor(product) {
    this.product = product;
  }


  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
          <img src="${this.product.obraz}" alt="${this.product.nazwa}" >
          <div class="product-item__content">
            <h2><a href="${this.product.link}"><button>${this.product.nazwa}</button></a></h2>
            <h3><a href="${this.product.opis}">${this.product.text}</a></h3>
          </div>
      `;
    return prodEl;
  }
}


class ProductList {
  products = [
    new Product(
      'Light my fire',
      'https://www.youtube.com/watch?v=cq8k-ZbsXDI',
      'https://images.squarespace-cdn.com/content/v1/583863c1e6f2e1216884123c/1494090226795-ULW11342F9EEBL5GVWYD/image-asset.jpeg',
      'by The Doors',
      'https://pl.wikipedia.org/wiki/The_Doors',
      ),
      new Product(
        'Karma Police',
        'https://www.youtube.com/watch?v=1uYWYWPc9HU',
        'https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856',
        'by Radiohead',
        'https://pl.wikipedia.org/wiki/Radiohead',
      ),
      new Product(
        'Wet hands',
        'https://www.youtube.com/watch?v=MSepOYJxB64',
        'https://f4.bcbits.com/img/a3390257927_10.jpg',
        'by C418',
        'https://www.wikidata.org/wiki/Q1847436',
      ),
      new Product(
        'Jailbreak',
        'https://www.google.com/search?q=yt+jailbreak+lizzy&oq=yt+jailbreak+lizzy&aqs=chrome..69i57j0i22i30.3538j0j4&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:9320bd58,vid:zAvhmmpwLbg',
        'https://i.scdn.co/image/ab67616d0000b273e8f69ab903901064b1f19249',
        'by Thin Lizzy',
        'https://pl.wikipedia.org/wiki/Thin_Lizzy',
      ),
      new Product(
        'Under My Thumb',
        'https://www.youtube.com/watch?v=UHcR648Cg3I',
        'https://m.media-amazon.com/images/I/41+iACy1IhL._SY580_.jpg',
        'by The Rolling Stones',
        'https://pl.wikipedia.org/wiki/The_Rolling_Stones',
      ),
      
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    const opis = document.createElement('div');
    opis.setAttribute('id', 'opis');
    const opis_opis = document.createTextNode("My favourite songs");
    opis.setAttribute('id', 'opisa');
    opis.append(opis_opis);

    prodList.prepend(opis);
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}







class end {
  render() {
    const renderHook = document.getElementById('app');
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;
  static init() {
    const shop = new end();
    shop.render();
    this.cart = shop.cart;
  }
}

App.init();



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



let items = document.querySelectorAll('.product-item');
for(let i = 0; i <= items.length; i++){

  if(window.screen.width > 930){

    if(i%2 == 0){
    console.log(i + ' tak');
    items[i].style.float = 'left';
    items[i].style.marginRight = '20px';
    } 
    
    else {
    console.log(i + ' nie');
    items[i+2].style.marginTop = '65px';
    }

  } 
  
  else{
    items[i].style.clear = 'both';
    items[i].style.width = '220%';
    items[i].classList.add('testa');
  }





}









