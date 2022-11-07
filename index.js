window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

var mainp = document.getElementById("mainp");

mainp.addEventListener("contextmenu", (event) => {
  party.sparkles(body);
});
