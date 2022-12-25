export class Product {
  constructor (nazwa, link, obraz, text, opis) {
    this.nazwa = nazwa
    this.link = link
    this.obraz = obraz
    this.text = text
    this.opis = opis
  }
}


new fullpage('#fullPage', {
  autoScrolling: true
})