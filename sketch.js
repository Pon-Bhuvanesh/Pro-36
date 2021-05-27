var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(580,350);

  foodObj = new Food();
  
  dog=createSprite(350,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.30;

  //create feed the dog button here

  addFood=createButton("Add Food");
  addFood.position(450,100);
  addFood.mousePressed(addFoods);

}

function draw() {
  background("white");
  foodObj.display();
  fill("Blue")
  textSize(40);
  text("bow!🐕‍🦺bow!",180,100);
  textSize(15);
  text("This project done by S.Pon Bhuvanesh ",30,320);

  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
