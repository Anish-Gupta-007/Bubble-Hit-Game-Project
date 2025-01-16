var timer = 60;
var score = 0;
var hitnum;
function increasescore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function makeBubble() {
  var cltter = "";
  for (let i = 1; i <= 119; i++) {
    rn = Math.floor(Math.random() * 10);
    cltter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".panel-bottom").innerHTML = cltter;
}
function runtimer() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".panel-bottom").innerHTML=`<h1>Game Over<h1>`
    }
  }, 1000);
}
function newhitvalue() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitnum;
}
document.querySelector(".panel-bottom").addEventListener("click", (dets) => {
  var clickedBubble =Number(dets.target.textContent)
  if(clickedBubble===hitnum){
    increasescore();
    makeBubble();
    newhitvalue();
  }
});
runtimer();
makeBubble();
newhitvalue();
increasescore();
