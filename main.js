const heightWindows = window.innerHeight;
const widthWindows = window.innerWidth;
const rectangle2 = document.getElementById("rectangle2");
let elevenTwelveHeight = (heightWindows / 12) * 11;
let oneTwelve = heightWindows / 12;
const widthtRec2 = rectangle2.offsetWidth;
const heightRec2 = rectangle2.offsetHeight;
let hypo2 = Math.sqrt(widthtRec2 ** 2 + heightRec2 ** 2);

const angleRad2 = Math.acos(heightRec2 / hypo2);

angleDegRec2 = angleRad2 * (180 / Math.PI);

// Appelllllllllllllll Fonctionnnnnnnnnnnnnnnnnnnnnnnnnn
function rotateStyle() {
  t1.style.transform = `rotate(${angleDegRec2}deg)`;
  t2.style.transform = `rotate(${angleDegRec2}deg)`;
  t3.style.transform = `rotate(${angleDegRec2}deg)`;
  t4.style.transform = `rotate(${angleDegRec2}deg)`;
  console.log(heightWindows, widthWindows);
}

rotateStyle();
