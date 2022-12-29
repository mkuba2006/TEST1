export class ProdLook{
    constructor(prod){
      this.prod = prod;
    }
  
    render(){
      const Ram = document.createElement('tr');
      Ram.className = 'Ram-li';
      const button = document.createElement('div');
      button.className = 'Ram-button';
      button.innerHTML= `
        <a href="${this.prod.link}">
          <i class="${this.prod.img}">
            ${this.prod.text}
          </i>
        </a>
    `;


    button.style.cssText =`
      border-radius: 5px;
      color: white;
    `



      Ram.append(button);
      return Ram


    }

  }