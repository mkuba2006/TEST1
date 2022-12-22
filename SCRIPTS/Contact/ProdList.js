import { Prod } from "./Prod.js";
import { ProdLook } from "./ProdLook.js";

export class ProdList{
    products =[
      new Prod(
      'https://discord.com/channels/@me',
      'ri-discord-fill',
      'Tap to Discord',
      ),
      new Prod(
      'https://www.instagram.com/jakub_myrta/',
      'ri-instagram-fill',
      'Tap to instagram',
      ),
      new Prod(
      'https://www.facebook.com/profile.php?id=100042699441638',
      'ri-facebook-circle-fill',
      'Tap to Facebook',
      ),
      new Prod(
      'https://twitter.com/JamesM60086044',
      'ri-twitter-fill',
      'Tap to twitter',
      ),  
      new Prod(
      'https://github.com/mkuba2006',
      'ri-github-fill',
      'Tap to GitHub',
      ),
      new Prod(
      'https://www.youtube.com/channel/UCyOQ92MN93d2f4ubJy9SMug',
      'ri-youtube-fill',
      'Tap to YouTube',
      ),
    
      new Prod(
      'https://open.spotify.com/user/dkjcdvsyjz6ciuzj2xfl5tp6c',
      'ri-spotify-fill',
      'Tap to Spotify',
      ),
      new Prod(
        'https://steamcommunity.com/profiles/76561198866310633/',
        'ri-steam-fill',
        'Tap to Steam',
        ),
    ];
    
    render(){
        const List_prod = document.createElement('ul');
        List_prod.className = 'List_prod_ul';
        const opis = document.createElement('div');
        opis.setAttribute('id', 'opis');
        const opis_opis = document.createTextNode("My favourite songs");
        opis.setAttribute('id', 'opisa');
        opis.append(opis_opis);
        List_prod.prepend(opis);
    
        for(const prod of this.products){
          const productItem = new ProdLook(prod);
          const prodEl = productItem.render();
          List_prod.append(prodEl);
        }
        return List_prod;
      }
    }