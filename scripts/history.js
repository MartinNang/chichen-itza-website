const scrollContainer = document.querySelector(".history-page");
console.log("scroll container", scrollContainer);
const length = 500;
let index = 0;

const asset1 = document.querySelector("#asset-1");
const asset2 = document.querySelector("#asset-2");
const asset3 = document.querySelector("#asset-3");
let asset1Pos = 0;
let asset2Pos = -160;
let asset3Pos = -100;

scrollContainer.addEventListener("wheel", (event) => {
  console.log("asset3 top", asset3.style.top);
  console.log("asset 3 pos", asset3Pos);

  if (event.deltaY > 0) {
    if (asset1Pos <= 50) {
      asset1Pos++;
    }
  } else {
    if (asset1Pos >= 0) {
      asset1Pos--;
    }
  }
  asset1.style.bottom = Math.floor(asset1Pos / 2) + "px";

  if (event.deltaY > 0) {
    if (asset2Pos >= -210) {
      asset2Pos--;
    }
  } else {
    if (asset2Pos <= -160) {
      asset2Pos++;
    }
  }
  asset2.style.bottom = Math.floor(asset2Pos / 2 + asset2Pos / 2) + "px";

  if (event.deltaY > 0) {
    if (asset3Pos <= -50) {
      asset3Pos++;
    }
  } else {
    if (asset3Pos >= -100) {
      asset3Pos--;
    }
  }
  asset3.style.top = Math.floor(asset3Pos / 2 + asset3Pos / 2) + "px";

  // scrollContainer.scrollBy({
  //   left: event.deltaY < 0 ? -length : length,
  //   behavior: "smooth",
  //   block: "nearest",
  // });
  event.preventDefault();
});
