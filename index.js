window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

var btn = document.getElementById("btn");

btn.addEventListener("contextmenu", (event) => {
  party.sparkles(body);
});
