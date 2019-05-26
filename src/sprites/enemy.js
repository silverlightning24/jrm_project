import { GameObjects } from "phaser" 
class Enemy extends GameObjects.Sprite {


    constructor(config){
        super(config.scene,config.x, config.y, config.texture, config.frame)
        config.scene.physics.world.enable(this)
        
        config.scene.add.existing(this)
        this.setOrigin(0,0)
        this.x = config.x
        this.y = config.y 
        this.displayWidth=100
        this.displayHeight=70
        this.xdirection = Math.random()*2-1
        if (this.xdirection > 0) {
            this.xdirection = Math.ceil(this.xdirection)
        } else {
            this.xdirection = Math.floor(this.xdirection)
        }
        this.xspeed = Math.floor(Math.random()*10)*this.xdirection
        this.active = false
        
    }
    update(time,delta) {
        if(this.active) {
            if(this.x > this.screen_width) {
                    this.x = 0
                    
                    

            }   else if ( this.x < 0)
                this.x = this.screen_width
                
        
            } 

            this.x += this.xspeed

        }

    }
//         this.move(time)



           
//     }
//     move(time){
//         this.x = Math.sin(time*0.005) * 100 + 100
//         this.y = Math.cos(time*0.005) * 100 + 100

//     }










// }
export{
    Enemy
}