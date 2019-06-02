import { Scene } from 'phaser'

class Boot extends Scene {

    constructor() {
        super ({
            key:"boot"
        })
    }



    preload () {
        // console.log("loading!")
        this.load.image("background", "./src/assets/bg.png")
        
        
        // this.load.image("funnywalk","./src/assets/Walking Sheet.png","./src/assets")
        this.load.atlasXML("spriteAtlas","./src/assets/jumperpack_kenney/Spritesheets/spritesheet_jumper.png","./src/assets/jumperpack_kenney/Spritesheets/spritesheet_jumper.xml")
        this.load.tilemapTiledJSON("tiles,./src/assets/platforMap. json.json")
    }   
    create() {
        this.scene.start("game")
    }
}


export { Boot } 

