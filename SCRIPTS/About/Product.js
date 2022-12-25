export class Product {
  constructor (nazwa, link, obraz, text, opis) {
    this.nazwa = nazwa
    this.link = link
    this.obraz = obraz
    this.text = text
    this.opis = opis
  }
  
}


console.log(window.innerWidth);



if(window.innerWidth > 700){

  new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    navigationTooltips:['Fav songs', 'nothing'],
    showActiveTooltip: true,
    scrollingSpeed: 1000
  })


}
