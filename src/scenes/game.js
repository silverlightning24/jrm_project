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
    this.cursors = this.input.keyboard.createCursorKeys() ; 
    this.background = this.add.image(0,0,"background")

    this.background.setOrigin(0,0)
    this.background.setDisplaySize(window.innerWidth,window.innerHeight)
    this.enemy = new Enemy({ scene : this, x : -10, y : 150, texture: "spriteAtlas", frame:"bunny1_walk1"})
//     this.background = this.add.image(0,0,"background1")
//     this.background.setOrigin(0,0)
//     this.background.setDisplaySize(700,500)


//     this.char = this.add.sprite(50,50,"rts","scifiUnit_01.png")
    
//     this.add.sprite(50,50,"rts","scifiUnit_01.png")
//     this.add.sprite(100,100,"rts","scifiUnit_13.png")
    
    
//     this.spriteGroup = this.add.group()
    
    
//     for (let i = 0; i < 10; i++) {
//         this.spriteGroup.add(new Fireboy({
//             scene: this,
//             x:i*5,
//             y: 500,
//             texture: "Fireboy"
//         }))


//     }
//     this.spriteGroup.add(new Enemy({
//         scene: this,
//         x: 300,
//         y: 50,
//         texture: "bat"
//     }))
}

update(time) {
//     if(this.cursors.left.isDown) {
//         this.char.x -= 5
//     }
//     if(this.cursors.right.isDown) {
//         this.char.x += 5
//     }
//     if(this.cursors.down.isDown) {
//         this.char.y -= 5
//     }
//     if(this.cursors.up.isDown) {
//         this.char.y += 5
//     }
    

    
    
    
    
    
    
    
    
//     let sprites = this.spriteGroup.children.entries
//     for(let i=0; i < sprites.length ; i++)
//         sprites[i].update(time)

    }

}
export {Game}   

