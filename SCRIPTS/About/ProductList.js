import { ProductItem } from './ProductItem.js';
import { Product } from './Product.js';

export class ProductList {
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