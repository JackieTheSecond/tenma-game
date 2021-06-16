class Scene_E extends Phaser.Scene{

    constructor(){
      super({key: "Scene_E"});
    }

    create(){
      //sounds
      this.gameMusic = this.sound.add("info_music", {volume: 0.5, loop: true});
      this.click = this.sound.add("clickSound", {volume: 1, loop: false});

      //spawn a random Tenma in a random location
      //pick the random tenma and put him in the side
      var number_tenma = Phaser.Math.Between(1, 3);

      this.toFindTenma;

      if (number_tenma == 1) {
        this.toFindTenma = this.add.image(Phaser.Math.Between(150, 300), Phaser.Math.Between(100, 500), 'a3_tenma').setScale(0.32);

      } else if (number_tenma == 2) {
        this.toFindTenma = this.add.image(Phaser.Math.Between(150, 300), Phaser.Math.Between(100, 500), 'a3_tenma_trip').setScale(0.32);

      } else if (number_tenma == 3) {
        this.toFindTenma = this.add.image(Phaser.Math.Between(150, 300), Phaser.Math.Between(100, 500), 'a3_tenma_park').setScale(0.32);

      } else {
        this.toFindTenma = this.add.image(Phaser.Math.Between(150, 300), Phaser.Math.Between(100, 500), 'a3_tenma').setScale(0.32);
        console.log("it seems the rng didn't work :thonk:");

      }

      this.toFindTenma.setInteractive()
        .on('pointerdown', () => this.winGame());


      //ALL THE FUCKING IMAGES:
      //in an array
      var clutterArray = [];
      
      clutterArray.push(this.n1 = this.add.image(Phaser.Math.Between(150, 300), Phaser.Math.Between(100, 500), 'a3onefear').setName("a3onefear").setScale(0.03).setInteractive());
      clutterArray.push(this.n2 = this.add.image(Phaser.Math.Between(150, 300), Phaser.Math.Between(100, 500), 'ssr_wreath').setName("ssr_wreath").setScale(0.3).setInteractive());
      clutterArray.push(this.n28 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'orange').setName("orange").setScale(0.03).setInteractive());
      clutterArray.push(this.n3 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'gamersHighSSR').setName("gamersHighSSR").setScale(0.1).setInteractive());
      clutterArray.push(this.n4 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'MASEMASEMASE').setName("MASEMASEMASE").setScale(0.3).setInteractive());
      clutterArray.push(this.n5 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'cheese').setName("cheese").setScale(0.2).setInteractive());
      clutterArray.push(this.n6 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'hatma').setName("hatma").setScale(0.32).setInteractive());
      clutterArray.push(this.n7 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'entrydenied').setName("entrydenied").setScale(0.5).setInteractive());
      clutterArray.push(this.n8 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'madonuts').setName("madonuts").setScale(0.4).setInteractive());
      clutterArray.push(this.n9 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), '10pull').setName("10pull").setScale(0.32).setInteractive());
      clutterArray.push(this.n10 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'blushy').setName("blushy").setScale(0.9).setInteractive());
      clutterArray.push(this.n27 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'yuki').setName("yuki").setScale(0.5).setInteractive());
      clutterArray.push(this.n11 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'demonita').setName("demonita").setScale(0.5).setInteractive());
      clutterArray.push(this.n12 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'fallmuku').setName("fallmuku").setScale(0.5).setInteractive());
      clutterArray.push(this.n13 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'itacat').setName("itacat").setScale(0.32).setInteractive());
      clutterArray.push(this.n14 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'juza_sloth').setName("juza_sloth").setScale(0.4).setInteractive());
      clutterArray.push(this.n15 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'kazukichi').setName("kazukichi").setScale(1).setInteractive());
      clutterArray.push(this.n16 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'kazulaugh').setName("kazulaugh").setScale(0.5).setInteractive());
      clutterArray.push(this.n17 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'marryme_sankakus').setName("marryme_sankakus").setScale(0.7).setInteractive());
      clutterArray.push(this.n18 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'money').setName("money").setScale(0.2).setInteractive());
      clutterArray.push(this.n19 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'monster').setName("monster").setScale(0.1).setInteractive());
      clutterArray.push(this.n20 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'mukucat').setName("mukucat").setScale(0.4).setInteractive());
      clutterArray.push(this.n21 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'sankagun').setName("sankagun").setScale(0.1).setInteractive());
      clutterArray.push(this.n22 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'smirk').setName("smirk").setScale(0.1).setInteractive());
      clutterArray.push(this.n29 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'tencookie').setName("tencookie").setScale(1).setInteractive());
      clutterArray.push(this.n23 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'ssr').setName("ssr").setScale(0.5).setInteractive());
      clutterArray.push(this.n24 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'tsuzucookie').setName("tsuzucookie").setScale(1).setInteractive());
      clutterArray.push(this.n25 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'tsuzupeek').setName("tsuzupeek").setScale(0.2).setInteractive());
      clutterArray.push(this.n26 = this.add.image(Phaser.Math.Between(150, 500), Phaser.Math.Between(100, 500), 'feet').setName("feet").setScale(0.6).setInteractive());

      if (!this.sound.locked) {
        // already unlocked so play
        this.gameMusic.play()

      } else {
        // wait for 'unlocked' to fire and then play
        this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
            this.gameMusic.play()
        })
  
      }

      //this.add.text(20, 20, "Playing easy game", {font: "25px Arial", fill: "yellow"});
      
      this.banner = this.add.image(config.width/2, config.height/2, 'banner');
      this.menuB = this.add.image(700, 560, 'menuButt')
        this.menuB.setScale(0.32);

        this.menuB.setInteractive()
        .on('pointerdown', () => this.jumpGame("MENU"))
        .on('pointerover', () => this.changeState("MENU"))
        .on('pointerout', () => this.resetState("MENU"));


      //add the tenma on the sidebar:
      if (number_tenma == 1) {
        this.tenma = this.add.image(700, 150, 'a3_tenma').setScale(0.7);

      } else if (number_tenma == 2) {
        this.tenma = this.add.image(700, 150, 'a3_tenma_trip').setScale(0.7);

      } else if (number_tenma == 3) {
        this.tenma = this.add.image(700, 150, 'a3_tenma_park').setScale(0.7);

      } else {
        this.tenma = this.add.image(700, 150, 'a3_tenma').setScale(0.7);
        console.log("it seems the rng didn't work :thonk:");

      }

      //add the timer label on the sidebar:
      this.timerTotal = 0;
      this.won = 0;
      this.timerLabel = this.add.text(653, 290, '0.000', { fontSize: 30, fontStyle: 'bold'});

      //add desc images on the sidebar:
      var descArray = [];

      descArray.push(this.n1D = this.add.image(701, 430, 'a3onefear_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n2D = this.add.image(701, 430, 'ssr_wreath_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n28D = this.add.image(701, 430, 'orange_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n3D = this.add.image(701, 430, 'gamersHighSSR_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n4D = this.add.image(701, 430, 'MASEMASEMASE_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n5D = this.add.image(701, 430, 'cheese_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n6D = this.add.image(701, 430, 'hatma_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n7D = this.add.image(701, 430, 'entrydenied_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n8D = this.add.image(701, 430, 'madonuts_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n9D = this.add.image(701, 430, '10pull_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n10D = this.add.image(701, 430, 'blushy_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n27D = this.add.image(701, 430, 'yuki_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n11D = this.add.image(701, 430, 'demonita_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n12D = this.add.image(701, 430, 'fallmuku_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n13D = this.add.image(701, 430, 'itacat_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n14D = this.add.image(701, 430, 'juza_sloth_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n15D = this.add.image(701, 430, 'kazukichi_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n16D = this.add.image(701, 430, 'kazulaugh_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n17D = this.add.image(701, 430, 'marryme_sankakus_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n18D = this.add.image(701, 430, 'money_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n19D = this.add.image(701, 430, 'monster_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n20D = this.add.image(701, 430, 'mukucat_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n21D = this.add.image(701, 430, 'sankagun_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n22D = this.add.image(701, 430, 'smirk_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n29D = this.add.image(701, 430, 'tencookie_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n23D = this.add.image(701, 430, 'ssr_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n24D = this.add.image(701, 430, 'tsuzucookie_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n25D = this.add.image(701, 430, 'tsuzupeek_D').setScale(0.6).setAlpha(0));
      descArray.push(this.n26D = this.add.image(701, 430, 'feet_D').setScale(0.6).setAlpha(0));
      


      //run through array and make all the images draggable:
      for (var i = 0; i < clutterArray.length; i++) {
        this.input.setDraggable(clutterArray[i]);
      }
      
      var indexOfPrev = -1;

      this.input.on('dragstart', function (pointer, gameObject) {
        //IMAGE DESCRIPTIONS HERE:
        //hide the previous desc
        if (indexOfPrev != -1) {
          console.log(clutterArray[indexOfPrev].name);
          descArray[indexOfPrev].setAlpha(0);
        }
        
        //change the previous var
        for (var i = 0; i < clutterArray.length; i++) {
          if (clutterArray[i].name.localeCompare(gameObject.name) == 0) {
            indexOfPrev = i;
          }
        }

        //show description (new indexOfPrev is current index)
        console.log(gameObject.name);
        descArray[indexOfPrev].setAlpha(1);

      }, this);
      

      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;

      });


      //how it works popup:
      this.grayscreen = this.add.rectangle(config.width/2, config.height/2, 800, 600, 0x000000).setAlpha(0.7);
      this.hiw = this.add.image(config.width/2, config.height/2, 'howitworks').setScale(0.9);
      this.startB = this.add.image(550, 525, 'startButt').setScale(0.32);

      this.startB.setInteractive()
        .on('pointerdown', () => this.startGame())
        .on('pointerover', () => this.changeState("START"))
        .on('pointerout', () => this.resetState("START"));

      //winning screen:
      this.winS = this.add.image(config.width/2, config.height/2, 'winningScreen').setScale(0.6).setAlpha(0);

      //menu BUtton for win screen:
      this.winMB = this.add.image(250, 505, 'menuButt');
      this.winMB.setScale(0.25).setAlpha(0);

        this.winMB.setInteractive()
          .on('pointerdown', () => this.jumpGame("WINM"))
          .on('pointerover', () => this.changeState("WINM"))
          .on('pointerout', () => this.resetState("WINM"));
      
      //reply button
      this.replayB = this.add.image(250, 555, 'againButt').setScale(0.35).setAlpha(0);
      this.replayB.setInteractive()
        .on('pointerdown', () => this.checkReplay())
        .on('pointerover', () => this.changeState("AGAIN"))
        .on('pointerout', () => this.resetState("AGAIN"));

      //time after found:
      this.foundTime = this.add.text(442, 485, '0.000', { fontSize: 40, fontStyle: 'bold'}).setAlpha(0);

      //mute music buttons:
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

      //add you sure you wanna leave message:
      this.ays = this.add.image(config.width/2, config.height/2, 'areYouSure').setScale(0.9).setAlpha(0);
      this.nB = this.add.image(555, 460, 'noButt').setScale(0.5).setAlpha(0);
      this.nB.setInteractive()
        .on('pointerdown', () => this.backToGame("L"))
        .on('pointerover', () => this.changeState("NO"))
        .on('pointerout', () => this.resetState("NO"));

      this.yB = this.add.image(250, 460, 'yesButt').setScale(0.5).setAlpha(0);
      this.yB.setInteractive()
        .on('pointerdown', () => this.actuallyJump())
        .on('pointerover', () => this.changeState("YES"))
        .on('pointerout', () => this.resetState("YES"));

      //you sure you wanna play again message:
      this.replayQ = this.add.image(config.width/2, config.height/2, 'play_again').setScale(0.9).setAlpha(0);
      this.nRB = this.add.image(555, 460, 'noButt').setScale(0.5).setAlpha(0);
      this.nRB.setInteractive()
        .on('pointerdown', () => this.backToGame("R"))
        .on('pointerover', () => this.changeState("NOR"))
        .on('pointerout', () => this.resetState("NOR"));

      this.yRB = this.add.image(250, 460, 'yesButt').setScale(0.5).setAlpha(0);
      this.yRB.setInteractive()
        .on('pointerdown', () => this.replayGame())
        .on('pointerover', () => this.changeState("YESR"))
        .on('pointerout', () => this.resetState("YESR"));

    }

    jumpGame(String) {
      //"leave game? progress wont be saved" THING:
      if ("MENU".localeCompare(String) == 0) {
        this.timer.paused = !this.timer.paused;
      }
      this.ays.setAlpha(1);
      this.yB.setAlpha(1);
      this.nB.setAlpha(1);

      this.click.play();
    }

    checkReplay() {
      //make sure they're gonna replay
      this.replayQ.setAlpha(1);
      this.yRB.setAlpha(1);
      this.nRB.setAlpha(1);

      this.click.play();
    }

    actuallyJump() {
      this.gameMusic.pause();
      this.click.play();
      this.scene.start("Menu");
    }

    backToGame(String) {
      if (this.won == 0) {
        this.timer.paused = !this.timer.paused;
      }
      this.click.play();

      if ("L".localeCompare(String) == 0) {
        this.ays.setAlpha(0);
        this.yB.setAlpha(0);
        this.nB.setAlpha(0);

      } else if ("R".localeCompare(String) == 0) {
        this.replayQ.setAlpha(0);
        this.yRB.setAlpha(0);
        this.nRB.setAlpha(0);

      }

    }

    startGame() {
      this.grayscreen.setAlpha(0);
      this.hiw.setAlpha(0);
      this.startB.setAlpha(0);
      this.click.play();

      this.timer = this.time.addEvent({
        delay: 1,
        callback: this.onEvent,
        callbackScope: this,
        loop: true
      });

    }

    onEvent () {
      this.timerTotal = this.timerTotal + this.timer.getElapsed();
      this.timerLabel.setText(this.timerTotal/1000);
    }
    
    changeState(String) {
      if ("MENU".localeCompare(String) == 0) {
        this.menuB.setScale(0.25);

      } else if ("START".localeCompare(String) == 0) {
        this.startB.setScale(0.25);

      } else if ("WINM".localeCompare(String) == 0) {
        this.winMB.setScale(0.20);

      } else if ("sOn".localeCompare(String) == 0) {
        this.sOn.setScale(0.25);

      } else if ("sOff".localeCompare(String) == 0) {
        this.sOff.setScale(0.25);
        
      } else if ("NO".localeCompare(String) == 0) {
        this.nB.setScale(0.35);

      } else if ("YES".localeCompare(String) == 0) {
        this.yB.setScale(0.35);

      } else if ("AGAIN".localeCompare(String) == 0) {
        this.replayB.setScale(0.30);

      }else if ("NOR".localeCompare(String) == 0) {
        this.nRB.setScale(0.35);

      } else if ("YESR".localeCompare(String) == 0) {
        this.yRB.setScale(0.35);

      }
    }

    resetState(String) {
      if ("MENU".localeCompare(String) == 0) {
        this.menuB.setScale(0.32);

      } else if ("START".localeCompare(String) == 0) {
        this.startB.setScale(0.32);
        
      } else if ("WINM".localeCompare(String) == 0) {
        this.winMB.setScale(0.25);

      } else if ("sOn".localeCompare(String) == 0) {
        this.sOn.setScale(0.32);

      } else if ("sOff".localeCompare(String) == 0) {
        this.sOff.setScale(0.32);

      } else if ("NO".localeCompare(String) == 0) {
        this.nB.setScale(0.5);

      } else if ("YES".localeCompare(String) == 0) {
        this.yB.setScale(0.5);

      } else if ("AGAIN".localeCompare(String) == 0) {
        this.replayB.setScale(0.35);

      } else if ("NOR".localeCompare(String) == 0) {
        this.nRB.setScale(0.5);

      } else if ("YESR".localeCompare(String) == 0) {
        this.yRB.setScale(0.5);

      }
    }

    changeSound(String) {
      this.click.play();
      if ("ON".localeCompare(String) == 0) {
        //currently on, turn the sound off
        this.sOff.setAlpha(1);
        this.sOn.setAlpha(0);

        this.gameMusic.pause();

      } else if ("OFF".localeCompare(String) == 0) {
        //currently off, turn the sound on
        this.sOff.setAlpha(0);
        this.sOn.setAlpha(1);


        if (!this.sound.locked) {
          // already unlocked so play
          this.gameMusic.play()
  
        } else {
          // wait for 'unlocked' to fire and then play
          this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
            this.gameMusic.play()
          })
        
        }

      }

    }

    winGame() {
      this.timer.paused = !this.timer.paused;
      this.won = 1;

      this.grayscreen.setAlpha(0.75);
      this.winS.setAlpha(1);
      this.winMB.setAlpha(1);
      this.replayB.setAlpha(1);
      this.foundTime.setText(this.timerTotal/1000 + "\nseconds").setAlpha(1);

    }

    replayGame() {
      this.gameMusic.pause();
      this.click.play();
      this.scene.start("Scene_E");
    }

}