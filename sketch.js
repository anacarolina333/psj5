let palavra;
  

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
  
}
function palavraAleatoria() {
  let palavras = ["Maktub", "Estava escrito", "Tinha que acontecer"];
  return random(palavras);
  
}


function InicializaCores() {
  background("white");
  fill("blue");
  textSize(40);
  textAlign(CENTER,CENTER);
  
}

function palavraParcial(minimo, maximo){
  let quantidade = map (mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}


function draw() {
  InicializaCores();
  
 
  let parcial2 = palavraParcial(0, width);
  text (parcial2, 200, 200);
 
}

