$(function() {
    document.body.addEventListener('touchmove',function(e){
        e.preventDefault();
    });

    var game = new Phaser.Game(640, 960, Phaser.CANVAS, 'game');
    game.state.add('Boot', App.Boot);
    game.state.add('Preloader', App.Preloader);
    game.state.add('MainMenu', App.MainMenu);
    game.state.start('Boot');
});