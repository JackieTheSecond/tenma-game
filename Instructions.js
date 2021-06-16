class Instructions extends Phaser.Scene{
    constructor(){
      super({key: "Instructions"});
    }

    create(){
        this.infoMusic = this.sound.add("info_music", {volume: 0.5, loop: true});
        this.click = this.sound.add("clickSound", {volume: 1, loop: false});

        if (!this.sound.locked) {
            // already unlocked so play
            this.infoMusic.play()

        } else {
            // wait for 'unlocked' to fire and then play
            this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
                this.infoMusic.play()
            })
      
        }

        this.h2p = this.add.image(355, 300, 'rules').setScale(0.65);
        this.backB = this.add.image(700, 550, 'backButt')
        this.backB.setScale(0.32);

        this.backB.setInteractive()
          .on('pointerdown', () => this.jumpGame())
          .on('pointerover', () => this.changeState("BACK"))
          .on('pointerout', () => this.resetState("BACK"));


        //sound images:
        this.sOn = this.add.image(config.width - 50, 50, 'soundOn');
        this.sOn.setScale(0.32);
        this.sOff = this.add.image(config.width - 50, 50, 'soundOff').setAlpha(0);
        this.sOff.setScale(0.32);

        this.sOn.setInteractive()
            .on('pointerdown', () => this.changeSound("ON"))
            .on('pointerover', () => this.changeState("sOn"))
            .on('pointerout', () => this.resetState("sOn"));
      
        this.sOff.setInteractive()
            .on('pointerdown', () => this.changeSound("OFF"))
            .on('pointerover', () => this.changeState("sOff"))
            .on('pointerout', () => this.resetState("sOff"));

    }

    jumpGame() {
        this.infoMusic.pause();
        this.click.play();
        this.scene.start("Menu");
    }
  
    changeState(String) {
        if ("BACK".localeCompare(String) == 0) {
            this.backB.setScale(0.25);

        } else if ("sOn".localeCompare(String) == 0) {
            this.sOn.setScale(0.25);

        } else if ("sOff".localeCompare(String) == 0) {
            this.sOff.setScale(0.25);

        }
    }
  
    resetState(String) {
        if ("BACK".localeCompare(String) == 0) {
            this.backB.setScale(0.32);

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
  
          this.infoMusic.pause();
  
        } else if ("OFF".localeCompare(String) == 0) {
          //currently off, turn the sound on
          this.sOff.setAlpha(0);
          this.sOn.setAlpha(1);
  
  
          if (!this.sound.locked) {
            // already unlocked so play
            this.infoMusic.play()
    
          } else {
            // wait for 'unlocked' to fire and then play
            this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
              this.infoMusic.play()
            })
          
          }
  
        }
  
    }

  }