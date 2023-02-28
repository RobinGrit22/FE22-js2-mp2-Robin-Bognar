class Tamagotchi{
    #hungerLevel;
    #happinessLevel;
    #isAlive
    constructor(name, type){
      this.name = name
      this.type = type
      this.#hungerLevel = 5
      this.#happinessLevel = 5
      this.#isAlive = true
      setInterval(() => {
        if (this.#hungerLevel > 0 && this.#happinessLevel > 0) {
          this.#hungerLevel--;
          if (this.#hungerLevel <= 0) {
            this.#isAlive = false;
            this.#hungerLevel = 0;
          }
        }
      }, 5000);
  
      setInterval(() => {
        if (this.#hungerLevel > 0 && this.#happinessLevel > 0) {
          this.#happinessLevel--;
          if (this.#happinessLevel <= 0) {
            this.#isAlive = false;
            this.#happinessLevel = 0;
          }
        }
      }, 7000);
    }
    
        get hungerLevel() {
          return this.#hungerLevel;
        }
      
        get happinessLevel() {
          return this.#happinessLevel;
        }
      
        isAlive() {
          return this.#isAlive;
        }
        feed(){
          if(this.#isAlive  && this.#hungerLevel < 10){
              this.#hungerLevel++
          }
  
        }
        play(){
          if(this.#isAlive && this.#happinessLevel < 10){
              this.#happinessLevel++
          }
  
        }
  }
  export{Tamagotchi}