let locations, mapBg;

document.addEventListener("DOMContentLoaded", () => {
  locations = document.getElementById("locations");
  mapBg = document.getElementsByClassName("map-bg")[0];
  positionMapItems();
});

window.addEventListener("resize", (e) => {
  positionMapItems();
});

function positionMapItems() {
  let mapBgHeight = Math.floor(
    window.getComputedStyle(mapBg).getPropertyValue("padding-top").slice(0, -2)
  );
  locations.style.marginTop = "-" + Math.floor(mapBgHeight) + "px";
}
