
import { ProductList } from './About/ProductList.js';

globalThis.DEFAULT_VALUE = 'MAX';

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





  