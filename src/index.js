import Phaser from "phaser";

import { Boot } from "./scenes/boot"
import { Game } from "./scenes/game"


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [
    Boot,
    Game
  ]
  
};



const game = new Phaser.Game(config);

// function preload() {
  
// }
// function create() {
// this.add.text(0,0, "My Adventure In 'Hidden'ville:An amzing experience",{font: "50px impact,bold",fill: "aquamarine", wordWrap: {width: 700,usedAdvancedWrap : true}})
 
// gameState["circle"]= this.add.circle(400,400, 90, 0xA75CEE  )
// gameState["square"] = this.add.rectangle(100,105,30,100, 0x0870FE     )
// gameState["circle"].setInteractive()
// gameState["circle"].on("pointerup", function(event){
//   if (this.fillColor === 0xED6769  ){
//     this.fillColor = 0xF0823B
//   } else{
//     this.fillColor = 0x1C98FF
//   }
//   })

// gameState["square"].setInteractive

// gameState["keyboard"] = this.input.keyboard.createCursorKeys()





// }



// function update() {
//   if (gameState["keyboard"].left.isDown) {
//     gameState["square"].x -= 10
  
//   }
//   if (gameState["keyboard"].right.isDown) {
//     gameState["square"].x += 10
//   }
//   if (gameState["keyboard"].down.isDown) {
//     gameState["square"].y += 10
  
//   }
//   if (gameState["keyboard"].up.isDown) {
//     gameState["square"].y -= 10

// }}



