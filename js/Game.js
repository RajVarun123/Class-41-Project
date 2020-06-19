class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    cars = [car1];
  }

  play() {
    
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("#c68767");
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      //index of the array
      var index = 0;

      //x and y position of the car
      
      var x;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        //use data form the database to display the cars in y direction
        
        x = displayWidth - allPlayers[plr].distanceH;
        y = displayHeight - allPlayers[plr].distance;

        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

      player.distance += 40;
      player.update();
  
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distanceH -= 10;
        player.update();
      }

      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distanceH += 10;
        player.update();
      }
    }

    if(player.distance > 4000) {
      gameState = 2;
    }

    drawSprites();
  }

  end() {
    form.endTitle.show();
  }

  ende() {
    form.endeTitle.show();
  }
}
