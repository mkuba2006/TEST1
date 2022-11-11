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
  constructor(nazwa, link, obraz, text){
    this.nazwa = nazwa;
    this.link = link;
    this.obraz = obraz;
    this.text = text;
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
        <div>
          <img src="${this.product.obraz}" alt="${this.product.nazwa}" >
          <div class="product-item__content">
            <h2><a href="${this.product.link}">${this.product.nazwa}</a></h2>
            <h3>${this.product.text}</h3>
          </div>
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
      ),
      new Product(
        'Karma Police',
        'https://www.youtube.com/watch?v=1uYWYWPc9HU',
        'https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856',
        'by Radiohead',
      ),
      new Product(
        'Wet hands',
        'https://www.youtube.com/watch?v=MSepOYJxB64',
        'https://f4.bcbits.com/img/a3390257927_10.jpg',
        'by C418',
      ),
      new Product(
        'The Boys Are Back In Town',
        'https://www.youtube.com/watch?v=56b4TTT609c',
        'https://i.scdn.co/image/ab67616d0000b273e8f69ab903901064b1f19249',
        'by Thin Lizzy',
      ),
      new Product(
        'Under My Thumb',
        'https://www.youtube.com/watch?v=UHcR648Cg3I',
        'https://m.media-amazon.com/images/I/41+iACy1IhL._SY580_.jpg',
        'by The Rolling Stones',
      ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}







class Shop {
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
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
}

App.init();
