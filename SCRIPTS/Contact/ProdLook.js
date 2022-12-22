export class ProdLook{
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