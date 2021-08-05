var jardim,coelho;
var imagemdojardim,imagemdocoelho;
var maca,laranja,folha;
var imagemdamaca,imagemdalaranja,imagemFolha;

function preload(){
  imagemdojardim = loadImage("garden.png");
  imagemdocoelho = loadImage("rabbit.png");
  imagemdamaca = loadImage("apple.png");
  imagemdalaranja = loadImage("orangeLeaf.png");
  imagemFolha = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Fundo em movimento
  jardim=createSprite(200,200);
  jardim.addImage(imagemdojardim);

  // Criando o menino corredor
  coelho = createSprite(180,340,30,30);
  coelho.scale =0.09;
  coelho.addImage(imagemdocoelho);
  
    maca = createSprite(random(50,350));
    maca.addImage(imagemdamaca);
    maca.scale = 0.1;
    maca.velocityY = 5;
  
    laranja = createSprite(random(50,350));
    laranja.addImage(imagemdalaranja);
    laranja.scale = 0.1;
    laranja.velocityY = 5;
  
    folha = createSprite(random(50,350));
    folha.addImage(imagemFolha);
    folha.scale = 0.1;
    folha.velocityY = 5;

}



function draw() {
  background(0);
  
  //move o coelho com o mouse
  coelho.x = World.mouseX;
  
  bordas= createEdgeSprites();
  coelho.collide(bordas);
  
  macas();
  
  laranjas();
  
  folhas();
  
  if(coelho.isTouching(maca)){
    maca.x = 795;
  
  }
  
  if(coelho.isTouching(laranja)){
    laranja.x = 795;
  }
  
  if(coelho.isTouching(folha)){
    folha.x = 795;
  }

  drawSprites();
}




function macas(){
  
  if(frameCount % 80 === 0){
    
    maca = createSprite(random(50,350));
    maca.addImage(imagemdamaca);
    maca.scale = 0.1;
    maca.velocityY = 5;

  }
}

function laranjas(){
  
  if(frameCount % 60 === 0){
    laranja = createSprite(random(50,350));
    laranja.addImage(imagemdalaranja);
    laranja.scale = 0.1;
    laranja.velocityY = 5;

  }
}
function folhas(){
  if(frameCount % 40 === 0){
    folha = createSprite(random(50,350));
    folha.addImage(imagemFolha);
    folha.scale = 0.1;
    folha.velocityY = 5;
  }
}
 
  


  

  

  