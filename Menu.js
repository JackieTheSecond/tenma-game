class Menu extends Phaser.Scene {
    constructor() {
      super({key: "Menu"});
    }
    
    create() {
      //start music
      //we can add a loading screen like we wanted
      //and then when the user presses start, the music will start to play :D
      this.bgmusic = this.sound.add("menu_music", {volume: 0.5, loop: true});
      this.click = this.sound.add("clickSound", {volume: 1, loop: false});

      if (!this.sound.locked) {
        // already unlocked so play
        this.bgmusic.play()

      } else {
        // wait for 'unlocked' to fire and then play
        this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
          this.bgmusic.play()
        })
      
      }
      
      //add background

      //add the flying tenmas
      this.a3_tenma = this.physics.add.image(config.width/2 - 50, config.height/2, 'a3_tenma');
      this.a3_tenma_trip = this.physics.add.image(config.width/2, config.height/2, 'a3_tenma_trip');
      this.a3_tenma_park = this.physics.add.image(config.width/2 + 50, config.height/2, 'a3_tenma_park');

      this.a3_tenma.setScale(0.5);
      this.a3_tenma_trip.setScale(0.5);
      this.a3_tenma_park.setScale(0.5);

      this.a3_tenma.setVelocity(150, 200);
      this.a3_tenma.setCollideWorldBounds(true);
      this.a3_tenma.setBounce(1, 1);

      this.a3_tenma_trip.setVelocity(200, 250);
      this.a3_tenma_trip.setCollideWorldBounds(true);
      this.a3_tenma_trip.setBounce(1, 1);

      this.a3_tenma_park.setVelocity(100, 150);
      this.a3_tenma_park.setCollideWorldBounds(true);
      this.a3_tenma_park.setBounce(1, 1);

      //add the sound images
      this.sOn = this.add.image(50, 50, 'soundOn');
      this.sOn.setScale(0.32);
      this.sOff = this.add.image(50, 50, 'soundOff').setAlpha(0);
      this.sOff.setScale(0.32);

      this.sOn.setInteractive()
        .on('pointerdown', () => this.changeSound("ON"))
        .on('pointerover', () => this.changeState("sOn"))
        .on('pointerout', () => this.resetState("sOn"));
      
      this.sOff.setInteractive()
        .on('pointerdown', () => this.changeSound("OFF"))
        .on('pointerover', () => this.changeState("sOff"))
        .on('pointerout', () => this.resetState("sOff"));

      //add the title (fancy)
      this.head = this.add.image(config.width/2, 400, 'tenma_head').setAlpha(0);
      this.head.setScale(0.32);

      this.title = this.add.image(config.width/2, 210, 'title').setAlpha(0);
      this.title.setScale(0.32);

      this.hands = this.add.image(config.width/2, 210, 'tenma_hands').setAlpha(0);
      this.hands.setScale(0.32);

      var clicked = 0;

      var titleTween = this.tweens.add({
        targets: this.title,
        alphaTopLeft: { value: 1, duration: 3000, ease: 'Power1' },
        alphaTopRight: { value: 1, duration: 3000, ease: 'Power1' },
        alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1' },
        alphaBottomLeft: { value: 1, duration: 3000, ease: 'Power1'},
        onComplete: this.onCompleteHandler,
        onCompleteParams: []
      })

      var headTween = this.tweens.add({
        targets: this.head,
        delay: 3300,
        alphaTopLeft: { value: 1, duration: 0, ease: 'Power1' },
        alphaTopRight: { value: 1, duration: 0, ease: 'Power1' },
        alphaBottomRight: { value: 1, duration: 0, ease: 'Power1' },
        alphaBottomLeft: { value: 1, duration: 0, ease: 'Power1'},
        onComplete: this.onCompleteHandler,
        onCompleteParams: []
      })

      var handsTween = this.tweens.add({
        targets: this.hands,
        delay: 3300,
        alphaTopLeft: { value: 1, duration: 100, ease: 'Power1' },
        alphaTopRight: { value: 1, duration: 100, ease: 'Power1' },
        alphaBottomRight: { value: 1, duration: 100, ease: 'Power1' },
        alphaBottomLeft: { value: 1, duration: 100, ease: 'Power1'},
        onComplete: this.onCompleteHandler,
        onCompleteParams: []
      })

      var riseTween = this.tweens.add({
        targets: this.head,
        y: 210,
        ease: 'Power1',
        duration: 1500,
        delay: 3300
      })

      //riseTween.complete(4800);

      var clickedRiseTween = this.tweens.add({
        targets: this.head,
        y: 210,
        ease: 'Power1',
        duration: 1500,
        delay: 0,
        paused: true
      })

      //add the buttons:
      this.easyB = this.add.image(config.width/2 - 120, 440, 'easyButt').setAlpha(0);
      this.easyB.setScale(0.32);
      this.hardB = this.add.image(config.width/2 + 120, 435, 'hardButt').setAlpha(0);
      this.hardB.setScale(0.32);
      this.h2pB = this.add.image(config.width/2, 500, 'howtoButt').setAlpha(0);
      this.h2pB.setScale(0.32);

      var buttonsTween = this.tweens.add({
        targets: [this.easyB, this.hardB, this.h2pB ],
        delay: 4500,
        alphaTopLeft: { value: 1, duration: 100, ease: 'Power1' },
        alphaTopRight: { value: 1, duration: 100, ease: 'Power1' },
        alphaBottomRight: { value: 1, duration: 100, ease: 'Power1' },
        alphaBottomLeft: { value: 1, duration: 100, ease: 'Power1'},
        onComplete: this.onCompleteHandler,
        onCompleteParams: []
      })

      this.easyB.setInteractive()
        .on('pointerdown', () => this.jumpGame("easy"))
        .on('pointerover', () => this.changeState("easy"))
        .on('pointerout', () => this.resetState("easy"));

      this.hardB.setInteractive()
        .on('pointerdown', () => this.jumpGame("hard"))
        .on('pointerover', () => this.changeState("hard"))
        .on('pointerout', () => this.resetState("hard"));

      this.h2pB.setInteractive()
        .on('pointerdown', () => this.jumpGame("h2p"))
        .on('pointerover', () => this.changeState("h2p"))
        .on('pointerout', () => this.resetState("h2p"));

        
      this.input.on('pointerdown', function () {
        if (clicked == 0) {
          if (titleTween.isPlaying()) {
            titleTween.seek(1);
            buttonsTween.seek(1);
            headTween.seek(1);
            handsTween.seek(1);
          }

          riseTween.stop();
          clickedRiseTween.resume();

          clicked = 1;
        }
  
      });

    }

    jumpGame(String) {
      this.click.play();
      if ("easy".localeCompare(String) == 0) {
        this.bgmusic.pause();
        this.scene.start("Scene_E");

      } else if ("hard".localeCompare(String) == 0) {
        this.bgmusic.pause();
        this.scene.start("Scene_H");

      } else if ("h2p".localeCompare(String) == 0) {
        this.bgmusic.pause();
        this.scene.start("Instructions");

      }
    }

    changeState(String) {
      if ("easy".localeCompare(String) == 0) {
        this.easyB.setScale(0.25);

      } else if ("hard".localeCompare(String) == 0) {
        this.hardB.setScale(0.25);

      } else if ("h2p".localeCompare(String) == 0) {
        this.h2pB.setScale(0.25);

      } else if ("sOn".localeCompare(String) == 0) {
        this.sOn.setScale(0.25);

      } else if ("sOff".localeCompare(String) == 0) {
        this.sOff.setScale(0.25);
        
      }
    }

    resetState(String) {
      if ("easy".localeCompare(String) == 0) {
        this.easyB.setScale(0.32);

      } else if ("hard".localeCompare(String) == 0) {
        this.hardB.setScale(0.32);
        
      } else if ("h2p".localeCompare(String) == 0) {
        this.h2pB.setScale(0.32);

      } else if ("sOn".localeCompare(String) == 0) {
        this.sOn.setScale(0.32);

      } else if ("sOff".localeCompare(String) == 0) {
        this.sOff.setScale(0.32);

      }
    }

    changeSound(String) {
      this.click.play();
      if ("ON".localeCompare(String) == 0) {
        //currently on, turn the sound off
        this.sOff.setAlpha(1);
        this.sOn.setAlpha(0);

        this.bgmusic.pause();

      } else if ("OFF".localeCompare(String) == 0) {
        //currently off, turn the sound on
        this.sOff.setAlpha(0);
        this.sOn.setAlpha(1);


        if (!this.sound.locked) {
          // already unlocked so play
          this.bgmusic.play()
  
        } else {
          // wait for 'unlocked' to fire and then play
          this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
            this.bgmusic.play()
          })
        
        }

      }

    }

    onCompleteHandler(tween, targets, click) {
      tween.stop();

    }


  }