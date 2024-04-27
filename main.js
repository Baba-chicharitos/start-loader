const rec1 = document.getElementById("rec1");
const t1 = document.getElementById("t1");

const widthtRec = rec1.offsetWidth;
const heightRec = rec1.offsetHeight;

let hypo = Math.sqrt(widthtRec ** 2 + heightRec ** 2);

const angleRad = Math.acos(heightRec / hypo);

const angleDeg = angleRad * (180 / Math.PI);

function rotateStyle() {
  t1.style.transform = `rotate(${angleDeg}deg)`;
}

rotateStyle();

console.log(
  "hauteur",
  heightRec,
  "largeur",
  widthtRec,
  "hypoténus",
  hypo,
  "angle deg",
  angleDeg
);
