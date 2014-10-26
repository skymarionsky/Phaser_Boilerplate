var App = {
    oriented : false
    // set global variable here
};
App.Boot = function(game) {};
App.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBg', 'assets/sprites/loading-bg.png');
        this.load.image('preloaderBar', 'assets/sprites/loading-bar.png');
    },
    create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //this.scale.setMinMax(320, 480, 640, 960);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
            this.scale.refresh();
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //this.scale.setMinMax(0, 0, 640, 960);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(false, true);//forceLandscape, forcePortrait
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
            this.scale.refresh();
        }


        this.game.state.start('Preloader');
    },

    gameResized: function(widht, height){
        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device or resizing the browser window.
        //  Note that this callback is only really useful if you use a ScaleMode of RESIZE and place it inside your main game state.
    },

    enterIncorrectOrientation: function () {

        App.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        App.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }
};