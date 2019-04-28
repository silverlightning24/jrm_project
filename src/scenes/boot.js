import { Scene } from 'phaser'

class Boot extends Scene {

    constructor() {
        super ({
            key:"boot"
        })
    }



    preload () {
        console.log("loading!")
        this.load.image("background1", "./src/assets/background.png")
        this.load.image("fireboy", "./src/assets/fireboy.png")
    }
    create() {
        this.scene.start("game")
    }
}


export { Boot } 

