function fitsInOneBox(boxes) {
  let fallo = 0;
  boxes.forEach((b, index) => {
    for (let i = 0; i < boxes.length; i++) {
      if (i == index) {
        continue;
      } else {
        if (
          (boxes[i].l < b.l && boxes[i].w < b.w && boxes[i].h < b.h) ||
          (boxes[i].l > b.l && boxes[i].w > b.w && boxes[i].h > b.h)
        ) {
          continue;
        } else {
          fallo++;
        }
      }
    }
  });
  if (fallo != 0) {
    return false;
  } else {
    return true;
  }
}

/* 

  const boxes = [
    { l: 1, w: 1, h: 1 },   3 3 3
    { l: 2, w: 2, h: 2 },   5 4 5
    { l: 3, w: 1, h: 3 }
  ]     false

  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]     true

*/
const boxes = [
  { l: 1, w: 1, h: 1 }, //
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];
console.log(fitsInOneBox(boxes));
