function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function disegnaFiore(x, y, size) {

  // il mio obiettivo è creare dei fiori a sei petali che poi posizionerò intorno all'estremità alta dello stelo
  let lunghezza =  random(size / 7, size / 3.5)

  //i colori possibili
  //mettendo questa parte qui, anzichè appena sopra "fill", i petali di uno stesso punto assumono la stessa colorazione
  let redBase = 200;
  let blueBase = 250;
  let green = (random (0, 200));
  let black = 110
  let colorePetalo = color(redBase, green, blueBase, black);
  
 push();

  translate(x, y);
  for (let i = 0; i < 6; i++) {
    push();
    rotate(TWO_PI / 6 * i); 
    noStroke();
    fill (colorePetalo);
    ellipse(lunghezza/4, lunghezza/3, lunghezza, lunghezza/1.5); 
    pop();
  }
  pop();
}

function disegnaStelo(x, y, size) {
  //per ottenere uno stelo di dimensioni adeguate, stabilisco i confini entro cui può generarsi ogni punto
  //il punto intorno cui ci sono i petali deve stare più in alto
  let bordo = size / 4;
  let altroBordo = size / 3;

  //stabilisco i limiti entro cui può generarsi lo stelo
  let x1 = random(x, x + size);
  let y1 = random(y, y + 2 * bordo);

  let x2 = random(x + bordo, x + 2 * bordo);
  let y2 = random(y + altroBordo, y + 2 * bordo);

  let x3 = random(x + bordo, x + 2 * bordo);
  let y3 = random(y + 2 * bordo, y + size);

  let x4 = random(x, x + size);
  let y4 = random(y + 2 * bordo, y + size); 

  stroke("darkgreen");
  strokeWeight(2);
  noFill();
  curve(x1, y1, x2, y2, x3, y3, x4, y4);
 
  disegnaFiore(x2, y2, size);

   noFill();
   fill("purple") 
   noStroke(); 
   ellipse(x2, y2, 8, 8); 
}

function draw() {
  background("white");

  //creo una griglia per posizionare i singoli fiori
  let size = windowHeight / 8;
  let margin = size;

  let ncols = floor((windowWidth - 2 * margin) / size);
  let nrow = 6;

  for (let r = 0; r < nrow; r++) {
    let y = r * size + margin;
    for (let c = 0; c < ncols; c++) {
      let x = c * size + margin;
      disegnaStelo(x, y, size);
    }
  }
}
