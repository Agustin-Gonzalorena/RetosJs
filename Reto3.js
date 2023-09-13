function distributeGifts(packOfGifts, reindeers) {
  let pesoRegalos = 0;
  let pesoRenos = 0;
  packOfGifts.forEach((palabra) => {
    pesoRegalos = pesoRegalos + palabra.length;
  });
  reindeers.forEach((r) => {
    pesoRenos = pesoRenos + r.length * 2;
  });
  let puedenLLevar = pesoRenos / pesoRegalos;
  return Math.trunc(puedenLLevar);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

//distributeGifts(packOfGifts, reindeers); // 2

console.log(distributeGifts(packOfGifts, reindeers));
