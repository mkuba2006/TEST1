
import { ProdList } from "./ProdList.js";
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



const buttons = document.querySelectorAll('.Ram-button');
console.log(buttons);

buttons.forEach(text => {
  text.addEventListener('mouseover', ()=>{
    text.classList.add('color_new2');
})
}); 

buttons.forEach(text => {
  text.addEventListener('mouseout', ()=>{
  text.classList.remove('color_new2');
})
}); 