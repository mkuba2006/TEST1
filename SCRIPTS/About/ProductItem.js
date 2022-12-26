
export class ProductItem {
  constructor (product) {
    this.product = product
  }

  render () {
    const prodEl = document.createElement('li')
    prodEl.className = 'product-item'
    prodEl.innerHTML = `
          <div class="ab">
            <img src="${this.product.obraz}" alt="${this.product.nazwa}" class="imag">
          </div>
            <div class="product-item__content">
              <h2><a href="${this.product.link}"><button>${this.product.nazwa}</button></a></h2>
              <h3><a href="${this.product.opis}">${this.product.text}</a></h3>
            </div>
        `
        const imga = prodEl.getElementsByTagName('img');
        const ab = prodEl.getElementsByClassName('ab');
        const content = prodEl.getElementsByClassName('product-item__content');
        

        if(window.innerWidth < 500){
          for(const e of imga){      
            e.style.width = '50%';
            e.style.clear = 'both';
          }

          for(const e of ab){      
            e.style.width = '100%';
            e.style.backgroundColor = '#220a35';
            e.style.justifyContent = 'center';
            e.style.display = 'flex';
            e.style.padding = '5px 0 5px 0';


          }

          for(const e of content){      
            e.style.padding = 'auto';
            e.style.display = 'flex';
            e.style.width = '300px';
            e.style.height = '100px';
            e.style.justifyContent = 'space-around';
            e.style.alignItems = 'center';
            
          }


      }

    return prodEl
  }
}

