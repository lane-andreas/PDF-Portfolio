let degrees = 0;
let zoomValue = 1;
let mainElement = document.querySelector("main");
let sectionElement = document.querySelector("section");
let zoomText = document.querySelector("#zoomText");
let pageCount = document.querySelector("#pageCount");

document.querySelector("#unzoom").addEventListener("click", function () {
  zoomValue = zoomValue - 0.1; // Increment degrees by 90, and ensure it stays within 0-359
  if (zoomValue <= 0.1) zoomValue = 0.1;
  mainElement.style.zoom = zoomValue;
  sectionElement.style.zoom = zoomValue;
  zoomText.textContent = Math.round(zoomValue * 100) + "%";
});
document.querySelector("#zoom").addEventListener("click", function () {
  zoomValue = zoomValue + 0.1; // Increment degrees by 90, and ensure it stays within 0-359
  if (zoomValue >= 2.5) zoomValue = 2.5;
  mainElement.style.zoom = zoomValue;
  sectionElement.style.zoom = zoomValue;
  zoomText.textContent = Math.round(zoomValue * 100) + "%";
});

document.querySelector("#rotate").addEventListener("click", function () {
  degrees = degrees + 90; // Increment degrees by 90, and ensure it stays within 0-359
  mainElement.style.rotate = degrees + "deg";
  sectionElement.style.rotate = degrees + "deg";
});

document.querySelector("#expand").addEventListener("click", function () {
  var expandValue = mainElement.style.width;
  if (expandValue == "max(50vw, 90vh)") mainElement.style.width = "95vw";
  else mainElement.style.width = "max(50vw, 90vh)";

  var expandValue2 = sectionElement.style.width;
  if (expandValue2 == "max(50vw, 90vh)") sectionElement.style.width = "95vw";
  else sectionElement.style.width = "max(50vw, 90vh)";
});
mainElement.onmouseover = function () {
  pageCount.textContent = "1 / 2";
};
sectionElement.onmouseover = function () {
  pageCount.textContent = "2 / 2";
};
