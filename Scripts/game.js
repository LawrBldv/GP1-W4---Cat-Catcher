var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {  },
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

//Game initialization
var game = new Phaser.Game(config);

//Variable initialization
let player, sword, cursors, textScore, score;

var platforms;

//load game assets before game starts
function preload ()
{
    this.load.image('background','./assets/images/Background.png');
    this.load.image('sword','./assets/images/Weapon.png');
    this.load.image('player','./assets/images/Player.png');
}

function create ()
{
    this.add.image(960, 540, 'background');

    player = this.physics.add.sprite(250, 470, 'player');
    player.setScale(0.5);
    player.setCollideWorldBounds(true);

    sword = this.physics.add.sprite(1500, 450, 'sword');
    sword.setScale(0.4);

    // Enable collisions between player and sword
    this.physics.add.collider(player, sword, winGame, null, this);

    score = 0;
    let style = {font: "50px", fill:"#FFFB03"};
    textScore = this.add.text(50, 50, "Score: " + score.toString(), style );

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{

    if(cursors.left.isDown){
        player.x -= 5;
        player.flipX = true;
    }

    if(cursors.right.isDown){
        player.x += 5;
        player.flipX = false;
    }
}

function winGame(){
    score += 100;
    textScore.setText("Score: " + score);
    sword.disableBody(true, true);
    alert("PAMILY IS LAB");
}