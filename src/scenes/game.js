import { Scene } from "phaser"
import { Fireboy } from "../sprites/fireboy";
class Game extends Scene {
    constructor () {
        super ({
            key:"game",
            physics: {
                default: "arcade"
            }
        })
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
}

update() {

}

}
export {Game}   

