export class ProductItem {
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