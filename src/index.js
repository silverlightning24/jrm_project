import Phaser from "phaser";
import logoImg from "./assets/gingerbreadman.jpg";
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
  this.load.image("tree","assets/kenney_holidaypack2016/PNG/RTS pack/Default size/RTSobject_03.png")
  this.load.image("gift","tree","assets/kenney_holidaypack2016/PNG/RTS pack/Default size/RTSobject_03.png")

function create() {
  const logo = this.add.image(400, 150, "logo");
  let tree = this.add.image(100,100,"tree")
  let gift = this.add.image(500,500,"gift")
  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
