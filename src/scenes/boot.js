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
        this.load.image("bat","./src/assets/bat.png")
    }
    create() {
        this.scene.start("game")
    }
}


export { Boot } 

