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
        // this.load.image("funnywalk","./src/assets/Walking Sheet.png","./src/assets")
        this.load.atlasXML("rts","src/assets/kenney_rtssci-fi 2/Spritesheet/scifiRTS_spritesheet.png","src/assets/kenney_rtssci-fi 2/Spritesheet/scifiRTS_spritesheet.xml")
    }
    create() {
        this.scene.start("game")
    }
}


export { Boot } 

