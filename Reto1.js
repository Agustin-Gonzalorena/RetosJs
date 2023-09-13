function wrapping(gifts) {
  const newArray = new Array();
  gifts.forEach((g) => {
    const p = new Array();
    const tamPalabra = g.length;
    for (let i = 0; i < tamPalabra + 2; i++) p.push("*");
    const newPapel = p.toString().split(",").join("");
    const FormarPalabra = `${newPapel}\n*${g}*\n${newPapel}`;
    newArray.push(FormarPalabra);
  });
  return newArray;
}
const gifts = ["cat", "game", "socks"];
console.log(wrapping(gifts));

/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
