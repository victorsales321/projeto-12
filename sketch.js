var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg=loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png")
}

function setup(){
  
  createCanvas(700,700);
 //crie um sprite para a pista 
 path=createSprite(300,300,40,40)
//adicione uma imagem para a pista
path.addImage("path",pathImg)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY=-5
path.scale=0.8;

//crie um sprite de menino
boy=createSprite(200,500,20,20)
  
//adicione uma animação de corrida para ele
boy.addAnimation("boy",boyImg)
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
//defina visibilidade como falsa para o limite à direita
edges= createEdgeSprites();
}

function draw() {
  background(5);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = mouseX
 
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
