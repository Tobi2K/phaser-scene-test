// create new scences via Classes
let SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function SceneA(){
        Phaser.Scene.call(this, {key: 'sceneA'}) //sets key to be called by
    },
    preload: function () {
        this.load.image('bg', 'assets/background.png'); //load image
    },
    create: function () {
        this.add.image(400, 300, 'bg'); //distinct change to first see difference
        this.input.once('pointerdown', function () { //function to change scene on click
            console.log('From Scene A to Scene B');
            this.scene.start('sceneB');
        }, this);
    }
});

let SceneB = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function SceneB(){
            Phaser.Scene.call(this, {key: 'sceneB'}) //sets key to be called by
        },
    preload: function () {
        this.load.image('sky', 'assets/sky.png'); // load other image
    },
    create: function () {
        this.add.image(400, 300, 'sky'); //distinct change to first see difference
        this.input.once('pointerdown', function () { //function to change scene on click
            console.log('From Scene B to Scene C');
            this.scene.start('sceneC');
        }, this);
    }
});

let SceneC = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function SceneC(){
            Phaser.Scene.call(this, {key: 'sceneC'}) //sets key to be called by
        },
    preload: function () {
        this.load.image('dude', 'assets/dude.png'); // load other image
    },
    create: function () {
        this.add.image(400, 300, 'dude'); //distinct change to first see difference
        this.input.once('pointerdown', function () { //function to change scene on click
            console.log('From Scene C to Scene A');
            this.scene.start('sceneA');
        }, this);
    }
});

// the game's configuration
let config = {
    type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
    width: 800, // game width
    height: 600, // game height
    //backgroundColor: #000111, //background color
    scene: [SceneA, SceneB, SceneC] // our newly created scene
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);