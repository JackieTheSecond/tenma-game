var config = {
    type:Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y : 0}
      }
    },
    backgroundColor: 0x000000,
    scene: [Load, Menu, Scene_E, Scene_H, Instructions]
  }
  
  var game = new Phaser.Game(config);