App.Preloader = function(game) {};
App.Preloader.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '#16181a';
        this.preloadBg = this.add.sprite(this.game.width/2-150, this.game.height/2-20, 'preloaderBg');
        this.preloadBar = this.add.sprite(this.game.width/2-150, this.game.height/2-20, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        // load all assets here
        this.load.image('test', 'assets/sprites/test.png');
        // this.load.spritesheet('sample', 'assets/sprites/sample.png', 16, 16);
        // this.load.audio('beep', ['assets/audio/beep.ogg','assets/audio/beep.mp3'], false);
        // this.load.audio('sample_song', ['assets/audio/test.mp3']);
    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};