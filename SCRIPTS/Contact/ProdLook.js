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
      display: flex;
      width: 180px;
      height: 30px;
      justify-content: flex-start;
      align-items: center;
      margin-top: 1vh;
    `



      Ram.append(button);
      return Ram


    }

  }