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
      form = new Form();
      form.display();
    }
    player1=new Character(400,500,20,20);
    player1.display();
    player2=new Character(800,500,20,20);
    player2.display();
    players=[player1,player2]
  }

  play(){
    form.hide();
    background(battleFieldBg);
  
    Player.getPlayerInfo();
    form.titleHide();

    var ground=new Ground(displayWidth/2-25,displayHeight/2+50,displayWidth-25,40);
    ground.display();   

    var index = 0;

    var x =0;
    var y =0;

    if(allPlayers !== undefined){
      var display_position = 70;
      for(var plr in allPlayers){
        for(var plr in allPlayers){
                    
                    
          index = index+1;
        
          

          players[index -1].x = x;
          players[index - 1].y = y;
            
          if(index === player.index){
              
             fill("black");
             textSize(25);
             text(allPlayers[plr].name ,x-25,y+25);

          }   
          
        if (plr === "player" + player.index){
          fill("blue");
          playerIndicate="player";
        }else{
          fill("red");
          playerIndicate="opponent";
        }
        display_position+=30;
        textSize(35);
        text(playerIndicate+":"+allPlayers[plr].name ,70,display_position)
      }
   
      

    }
  }
  
  
  
    }}
