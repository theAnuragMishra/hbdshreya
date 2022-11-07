window.oncontextmenu = function (event) {
  event.preventDefault();
  event.pausePropagation();
  return false;
};
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const body = document.getElementById("body");

body.addEventListener("contextmenu", (event) => {
  party.sparkles(body);
  party.confetti(body);
  party.sparkles(body);
  party.confetti(body);
  const x = Math.random();
  if(x<0.33){ audio1.play();audio2.pause(); audio3.pause();}
  else if(0.33<x && x<0.66){ audio2.play(); audio1.pause(); audio3.pause(); }
  else if(x<0.99){ audio3.play(); audio1.pause(); audio2.pause();}
});

function play() {
  party.sparkles(body);
  party.confetti(body);
  party.sparkles(body);
  party.confetti(body);
  const x = Math.random();
  if(x<0.33){ audio1.play();audio2.pause(); audio3.pause();}
  else if(0.33<x && x<0.66){ audio2.play(); audio1.pause(); audio3.pause(); }
  else if(x<0.99){ audio3.play(); audio1.pause(); audio2.pause();}

}