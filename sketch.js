function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("blue");      
  textSize(50);
  textAlign(CENTER,CENTER);
  textFont('georgia');
  
  
  
  
  let maximo = width;
  let minimo =0;
  
  console.log("Prosopopeia".length);
  let palavra= "Prosopopeia";
 let quantidade= map(mouseX, 0, width,1, palavra.length)
 // console.log(quantidade);
  let parcial=palavra.substring (0,quantidade);
  text(parcial,200,200)
  
  
//   if(mouseX < 50){
//     let palavra= "P"
//     text(palavra, 200,200);}
//    else if(mouseX < 100){
//     let palavra= "Pro"
//     text(palavra, 200,200);
//   }  
//   else{
//     let palavra= "Prosopopeia"
//     text(palavra, 200,200);}
  
  

}
      
  
  
