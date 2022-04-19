class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);   // add to existing, displayList, updateList
      this.points = pointValue;      //track rocket's firing status
      this.moveSpeed = 3;         //pixels per frame
    }

    update() {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this. x = game.config.width;
        }
    }
}