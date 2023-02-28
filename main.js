import { Tamagotchi } from "./modules/tamagotchi.js";
import { Mametchi } from "./modules/mametchi.js";
import { Lovelin } from "./modules/lovelin.js";
import { Chamametchi } from "./modules/chamametchi.js";
import { Kuchipatchi } from "./modules/kuchipatchi.js";


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name-input');
    let name = nameInput.value;
   

    let type = document.querySelector('input[name="character"]:checked').value;
    

    if(type == 'lovelin'){
        const lovelinTamagotchi = new Lovelin(name, type)
    }
    if(type == 'mametchi'){
        const mametchiTamagotchi = new Mametchi(name, type)
    }
    if(type == 'chamametchi'){
        const chamametchiTamagotchi = new Chamametchi(name, type)
    }
    if(type == 'kuchipatchi'){
        const kuchipatchiTamagotchi = new Kuchipatchi(name, type)
    }
})


