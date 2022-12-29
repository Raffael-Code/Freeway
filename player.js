xp=200
yp=359
col=false
let score=0;
let=textp="- SCORE";


function showPlayer(){
    image(playerImg,xp,yp,24,24)
}

function movePlayer(){
  if (keyIsDown(UP_ARROW)){
    yp -= 2;
  }
    if (keyIsDown(DOWN_ARROW)){
      if(canMove()){
    yp += 2;
      }
  }
}

function collision(){
    for(i=0; i < carImages.length; i++){
    col = collideRectCircle(xcar[i],ycar[i],scar[0],scar[1],xp,yp,10)
      if(col){
        playerHit.play()
        returnInitial();
          if (score > 0){
    score-=1
  }
      }
  }
}

function returnInitial(){
  yp=359  
}

function scoreboard(){
  textSize(20)
  text(score,width/7,18)
  text(textp,width/6,18)
  fill(color(255,0,0))
  
  if(yp<25){
    score+=1
    returnInitial()
    playerScore.play()
  }
}

function canMove(){
  return yp <359;
}