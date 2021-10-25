var database, position;
var gamestate = 0;
var playercount;
var player, form, game;

function setup(){
    createCanvas(400,400);

    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");

    drawSprites();
}