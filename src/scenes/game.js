import { Scene } from "phaser"
import { Fireboy } from "../sprites/fireboy";
import { Enemy } from "../sprites/enemy"
class Game extends Scene {
    constructor () {
        super ({
            key:"game",
            physics: {
                default: "arcade",
                arcade:{
                    debug: false
            }
        }})
        this.background = null

    }


create() {
    this.background = this.add.image(0,0,"background1")
    this.background.setOrigin(0,0)
    this.background.setDisplaySize(700,500)
    this.spriteGroup = this.add.group()
    for (let i = 0; i < 10; i++) {
        this.spriteGroup.add(new Fireboy({
            scene: this,
            x:i*5,
            y: 500,
            texture: "Fireboy"
        }))


    }
    this.spriteGroup.add(new Enemy({
        scene: this,
        x: 300,
        y: 50,
        texture: "bat"
    }))
}

update(time) {
    let sprites = this.spriteGroup.children.entries
    for(let i=0; i < sprites.length ; i++)
        sprites[i].update(time)

}

}
export {Game}   

