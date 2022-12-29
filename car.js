//car
xcar=[550,550,550,550,550,550,550,550,550]
ycar=[203,106,299,40,139,234,75,266,170]
vcar=[2.9,5.3,3.2,4.2,7,6,2.5,3.5,4.5]
scar=[40,25]

function showCar(){
    for(i=0; i < carImages.length; i++){
    image(carImages[i],xcar[i],ycar[i],scar[0],scar[1]);
    }
}

function moveCar(){
  for(i=0; i < xcar.length; i++){
    xcar[i] -= vcar[i]
  }
}

function returnCar(){
  for(i=0; i < xcar.length; i++){
    if(verify(xcar[i])){
      xcar[i]=620
    }
  }
}

function verify(){
  return xcar[i]<-60
}