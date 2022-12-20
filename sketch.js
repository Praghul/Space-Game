var space, spaceImg
var rocket, rocketImg
var star, starImg
var asteroid1, asteroid1Img
var asteroid2, asteroid2Img
var asteroid3, asteroid3Img
var gameState = "play"



function preload(){
spaceImg = loadImage("Sprite_background_effects_0112.png")
rocketImg = loadImage("OIP-removebg-preview.png")
starImg = loadImage("R-removebg-preview.png")
asteroid1Img = loadImage("OIP__1_-removebg-preview.png")
asteroid2Img = loadImage("R__1_-removebg-preview.png")
asteroid3Img = loadImage("R__2_-removebg-preview.png")
}

function setup() {
createCanvas(850,500)
//creating space
space = createSprite(400,350,200,000)
space.addImage("space", spaceImg)
space.velocitX = -1

//creating Rocket
rocket = createSprite(150,360,50,50)
rocket.addImage("rocket", rocketImg)
rocket.velocitX = 1
rocket.scale=0.2







}

function draw() {
 background(255)
 






















 drawSprites();
}