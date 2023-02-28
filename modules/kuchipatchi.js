import { Tamagotchi } from "./tamagotchi.js";
export {Kuchipatchi}

class Kuchipatchi extends Tamagotchi{
    constructor(name, type){
       super(name, type)
       this.#createKuchipatchi()
    }
    #createKuchipatchi(){
       const tamagotchiContainer = document.getElementById('tamagotchiContainer')

       const nameAndType = document.createElement('p')
       tamagotchiContainer.append(nameAndType)
       nameAndType.innerText = `Hi ${this.name}, you chose ${this.type}`

       const happyLvl = document.createElement('p')
       tamagotchiContainer.append(happyLvl)
       happyLvl.innerText = `Happiness Level: ${this.happinessLevel}`

       const hungryLvl = document.createElement('p')
       tamagotchiContainer.append(hungryLvl)
       hungryLvl.innerText = `Hungriness Level: ${this.hungerLevel}`

       const playBtn = document.createElement('button')
       tamagotchiContainer.append(playBtn)
       playBtn.innerText = 'Play'
       playBtn.addEventListener('click', (event) =>{
        event.preventDefault()
        super.play()
       })

       const feedBtn = document.createElement('button')
       tamagotchiContainer.append(feedBtn)
       feedBtn.innerText = 'Feed'
       feedBtn.addEventListener('click', (event) => {
        event.preventDefault();
        super.feed()
    })

       const lala = setInterval(()=>{
        if (this.happinessLevel >= 0 && this.hungerLevel >= 0){
                hungryLvl.innerHTML = `Hungriness Level: ${this.hungerLevel}`
                happyLvl.innerHTML = `Happiness Level: ${this.happinessLevel}`
                if(super.isAlive() == false){
                    nameAndType.style.color = 'red'
                    clearInterval(lala)
                   }
            }
          },500)

       
    }

}