class Load extends Phaser.Scene {
    constructor() {
      super({key: "Load"});
    }

    preload() {
        //images
        //tenmas
        this.load.image('a3_tenma', 'assets/TenmaA3_chib.png');
        this.load.image('a3_tenma_trip', 'assets/A3_TripTenma.png');
        this.load.image('a3_tenma_park', 'assets/A3_ParkTenma.png');

        //game images:
        this.load.image('10pull', 'assets/game_assets/10pull.png');
        this.load.image('a3onefear', 'assets/game_assets/a3onefear.png');
        this.load.image('blushy', 'assets/game_assets/blushy.png');
        this.load.image('cheese', 'assets/game_assets/cheese.png');
        this.load.image('demonita', 'assets/game_assets/demonita_chibi.png');
        this.load.image('entrydenied', 'assets/game_assets/entrydenied.png');
        this.load.image('fallmuku', 'assets/game_assets/fallmuku_chibi.png');
        this.load.image('feet', 'assets/game_assets/feet.png');
        this.load.image('gamersHighSSR', 'assets/game_assets/gamershighssr.png');
        this.load.image('hatma', 'assets/game_assets/hatma.png');
        this.load.image('itacat', 'assets/game_assets/itacat.png');
        this.load.image('juza_sloth', 'assets/game_assets/juza_sloth.png');
        this.load.image('kazukichi', 'assets/game_assets/kazukichi.png');
        this.load.image('kazulaugh', 'assets/game_assets/kazulaugh.png');
        this.load.image('madonuts', 'assets/game_assets/madonuts.png');
        this.load.image('marryme_sankakus', 'assets/game_assets/marrymesankakus.png');
        this.load.image('MASEMASEMASE', 'assets/game_assets/MASEMASEMASE.png');
        this.load.image('money', 'assets/game_assets/money.png');
        this.load.image('monster', 'assets/game_assets/monster.png');
        this.load.image('mukucat', 'assets/game_assets/mukucat.png');
        this.load.image('sankagun', 'assets/game_assets/sankagun.png');
        this.load.image('smirk', 'assets/game_assets/smirk.png');
        this.load.image('ssr', 'assets/game_assets/ssr.png');
        this.load.image('ssr_wreath', 'assets/game_assets/ssrwreath.png');
        this.load.image('tsuzucookie', 'assets/game_assets/tsuzucookie.png');
        this.load.image('tsuzupeek', 'assets/game_assets/tsuzupeek.png');
        this.load.image('yuki', 'assets/game_assets/yuki_chibi.png');
        this.load.image('orange', 'assets/game_assets/orange.png');
        this.load.image('tencookie', 'assets/game_assets/tencookie.png');
        this.load.image('kazuwink', 'assets/game_assets/kazuwink.png');
        this.load.image('zanri', 'assets/game_assets/zanri.png');
        this.load.image('hisoka', 'assets/game_assets/hisoka.png');
        this.load.image('madoka', 'assets/game_assets/madoka.png');
        this.load.image('socks', 'assets/game_assets/socks.png');
        this.load.image('sakura', 'assets/game_assets/sakura.png');
        this.load.image('thumbsup', 'assets/game_assets/thumbsup.png');
        this.load.image('homate', 'assets/game_assets/homate.png');
        this.load.image('spacekumon', 'assets/game_assets/spacekumon.png');
        this.load.image('kamebun', 'assets/game_assets/kamebun.png');
        this.load.image('kamebox', 'assets/game_assets/kamebox.png');
        this.load.image('gem', 'assets/game_assets/gem.png');
        this.load.image('bento', 'assets/game_assets/bento.png');
        this.load.image('tasucookie', 'assets/game_assets/tasucookie.png');
        this.load.image('blobcat', 'assets/game_assets/blobcat.png');
        this.load.image('honk', 'assets/game_assets/honk.png');
        this.load.image('naruhodo', 'assets/game_assets/naruhodo.png');
        this.load.image('tenno', 'assets/game_assets/tenno.png');
        this.load.image('tsuzuno', 'assets/game_assets/tsuzuno.png');
        this.load.image('masuno', 'assets/game_assets/masuno.png');
        this.load.image('shookuya', 'assets/game_assets/shookuya.png');
        
        //game image descriptions
        this.load.image('10pull_D', 'assets/descriptions/DESC_10pull.png');
        this.load.image('a3onefear_D', 'assets/descriptions/DESC_a3onefear.png');
        this.load.image('blushy_D', 'assets/descriptions/DESC_blushy.png');
        this.load.image('cheese_D', 'assets/descriptions/DESC_cheese.png');
        this.load.image('demonita_D', 'assets/descriptions/DESC_demonita.png');
        this.load.image('entrydenied_D', 'assets/descriptions/DESC_entrydenied.png');
        this.load.image('fallmuku_D', 'assets/descriptions/DESC_fallmuku.png');
        this.load.image('feet_D', 'assets/descriptions/DESC_feet.png');
        this.load.image('gamersHighSSR_D', 'assets/descriptions/DESC_gamershighssr.png');
        this.load.image('hatma_D', 'assets/descriptions/DESC_hatma.png');
        this.load.image('itacat_D', 'assets/descriptions/DESC_itacat.png');
        this.load.image('juza_sloth_D', 'assets/descriptions/DESC_juzasloth.png');
        this.load.image('kazukichi_D', 'assets/descriptions/DESC_kazukichi.png');
        this.load.image('kazulaugh_D', 'assets/descriptions/DESC_kazulaugh.png');
        this.load.image('madonuts_D', 'assets/descriptions/DESC_madonuts.png');
        this.load.image('marryme_sankakus_D', 'assets/descriptions/DESC_marrymesankakus.png');
        this.load.image('MASEMASEMASE_D', 'assets/descriptions/DESC_MASEMASEMASE.png');
        this.load.image('money_D', 'assets/descriptions/DESC_money.png');
        this.load.image('monster_D', 'assets/descriptions/DESC_monster.png');
        this.load.image('mukucat_D', 'assets/descriptions/DESC_mukucat.png');
        this.load.image('sankagun_D', 'assets/descriptions/DESC_sankagun.png');
        this.load.image('smirk_D', 'assets/descriptions/DESC_smirk.png');
        this.load.image('ssr_D', 'assets/descriptions/DESC_ssr.png');
        this.load.image('ssr_wreath_D', 'assets/descriptions/DESC_ssrwreath.png');
        this.load.image('tsuzucookie_D', 'assets/descriptions/DESC_tsuzucookie.png');
        this.load.image('tsuzupeek_D', 'assets/descriptions/DESC_tsuzupeek.png');
        this.load.image('yuki_D', 'assets/descriptions/DESC_yuki.png');
        this.load.image('orange_D', 'assets/descriptions/DESC_orange.png');
        this.load.image('tencookie_D', 'assets/descriptions/DESC_tencookie.png');
        this.load.image('kazuwink_D', 'assets/descriptions/DESC_kazuwink.png');
        this.load.image('zanri_D', 'assets/descriptions/DESC_zanri.png');
        this.load.image('hisoka_D', 'assets/descriptions/DESC_hisoka.png');
        this.load.image('madoka_D', 'assets/descriptions/DESC_madoka.png');
        this.load.image('socks_D', 'assets/descriptions/DESC_socks.png');
        this.load.image('sakura_D', 'assets/descriptions/DESC_sakura.png');
        this.load.image('thumbsup_D', 'assets/descriptions/DESC_thumbsup.png');
        this.load.image('a3_tenma_D', 'assets/descriptions/DESC_a3tenma.png');
        this.load.image('a3_tenma_trip_D', 'assets/descriptions/DESC_tenma_trip.png');
        this.load.image('a3_tenma_park_D', 'assets/descriptions/DESC_tenma_park.png');
        this.load.image('homate_D', 'assets/descriptions/DESC_homate.png');
        this.load.image('spacekumon_D', 'assets/descriptions/DESC_spacekumon.png');
        this.load.image('kamebun_D', 'assets/descriptions/DESC_kamebun.png');
        this.load.image('kamebox_D', 'assets/descriptions/DESC_kamebox.png');
        this.load.image('gem_D', 'assets/descriptions/DESC_gem.png');
        this.load.image('bento_D', 'assets/descriptions/DESC_bento.png');
        this.load.image('tasucookie_D', 'assets/descriptions/DESC_tasucookie.png');
        this.load.image('blobcat_D', 'assets/descriptions/DESC_blobcat.png');
        this.load.image('honk_D', 'assets/descriptions/DESC_honk.png');
        this.load.image('naruhodo_D', 'assets/descriptions/DESC_naruhodo.png');
        this.load.image('tenno_D', 'assets/descriptions/DESC_tenno.png');
        this.load.image('tsuzuno_D', 'assets/descriptions/DESC_tsuzuno.png');
        this.load.image('masuno_D', 'assets/descriptions/DESC_masuno.png');
        this.load.image('shookuya_D', 'assets/descriptions/DESC_shookuya.png');

        //game ui:
        this.load.image('banner', 'assets/Banner.png');
        this.load.image('gameBG', 'assets/finding_bg.png');
        this.load.image('howitworks', 'assets/howitworks.png');
        this.load.image('winningScreen', 'assets/WinScreen.png');
        this.load.image('areYouSure', 'assets/AreYouSure.png');
        this.load.image('play_again', 'assets/playagain.png');
        this.load.image('winningScreenHard', 'assets/WinScreenHard.png')

        //title
        this.load.image('title', 'assets/Title.png');
        this.load.image('tenma_hands', 'assets/Tenma_hands.png');
        this.load.image('tenma_head', 'assets/Tenma_head.png');

        //buttons
        this.load.image('easyButt', 'assets/EasyButton.png');
        this.load.image('hardButt', 'assets/HardButton.png');
        this.load.image('howtoButt', 'assets/HowToPlayButton.png');
        this.load.image('backButt', 'assets/BackButton.png');
        this.load.image('menuButt', 'assets/MenuButton.png');
        this.load.image('startButt', 'assets/StartButton.png');
        this.load.image('soundOn', 'assets/SoundOn.png');
        this.load.image('soundOff', 'assets/SoundOff.png');
        this.load.image('noButt', 'assets/NoButton.png');
        this.load.image('yesButt', 'assets/YesButton.png');
        this.load.image('againButt', 'assets/AgainButton.png');

        //rules
        this.load.image('rules', 'assets/Instructions.png');

        //sounds
        this.load.audio("menu_music", ["assets/where_i_belong(A3ost).mp3"]);
        this.load.audio("info_music", ["assets/ready_guys(A3ost).mp3"]);
        this.load.audio("clickSound", ["assets/click.mp3"]);

        //create loading bar:
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        /*
        Loader Events:
            progress - loader number progress in decimal
        */
        this.load.on("progress", (percent)=> {
            loadingBar.fillRect(0, config.height / 2, config.width * percent, 10);
        })

    }

    create() {
        this.click = this.sound.add("clickSound", {volume: 1, loop: false});
        this.startB = this.add.image(config.width/2, config.height/2 + 100, 'startButt');
        this.startB.setScale(0.5);

        this.startB.setInteractive()
            .on('pointerdown', () => this.startMenu())
            .on('pointerover', () => this.changeState())
            .on('pointerout', () => this.resetState());

    }

    startMenu() {
        this.click.play();
        this.scene.start("Menu");
    }

    changeState() {
        this.startB.setScale(0.35);
    }

    resetState() {
        this.startB.setScale(0.5);
    }




}