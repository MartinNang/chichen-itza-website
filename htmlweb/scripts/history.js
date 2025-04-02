const scrollContainer = document.querySelector(".history-page");
console.log("scroll container", scrollContainer);
const length = 500;
let index = 0;

const asset1 = document.querySelector("#asset-1");
const asset2 = document.querySelector("#asset-2");
const asset3 = document.querySelector("#asset-3");
let asset1Pos = 0;
let asset2Pos = -80;
let asset3Pos = 0;

scrollContainer.addEventListener("wheel", (event) => {
  if (event.deltaX > 0) {
    if (asset1Pos <= 40) {
      asset1Pos++;
    }
  } else {
    if (asset1Pos >= 0) {
      asset1Pos--;
    }
  }
  asset1.style.bottom = Math.floor(asset1Pos / 2) + "px";

  if (event.deltaX > 0) {
    if (asset2Pos <= 50) {
      asset2Pos++;
    }
  } else {
    if (asset2Pos >= 0) {
      asset2Pos--;
    }
  }
  asset2.style.bottom = Math.floor(asset2Pos / 2) + "px";

  if (event.deltaX > 0) {
    if (asset3Pos <= 30) {
      asset3Pos++;
    }
  } else {
    if (asset3Pos >= 0) {
      asset3Pos--;
    }
  }
  asset3.style.top = Math.floor(asset3Pos / 2) + "px";
});

// scrollContainer.addEventListener("wheel", (event) => {
//   console.log("scroll delta y", event.deltaY);
//   console.log("index", index);
//   // if (event.deltaY < 0) {
//   //   complexScroll();
//   //   console.log("scroll up");
//   //   if (index > 0) {
//   //     index--;
//   //     scrollTo(index);
//   //   } else {
//   //     scrollContainer.scrollBy({
//   //       left: event.deltaY < 0 ? -length : length,
//   //       behavior: "smooth",
//   //       block: "nearest",
//   //     });
//   //   }
//   //   console.log("asset-1", asset1.style.top);
//   //   asset1.style.top =
//   //     parseFloat(asset1.style.top || 0) + event.deltaY < 0
//   //       ? -length
//   //       : length + "px";
//   // } else {
//   //   console.log("scroll down");
//   //   if (index < 6) {
//   //     index++;
//   //     scrollTo(index);
//   //   }
//   // }

//   event.preventDefault();
// });

function scrollTo() {
  var historyElement = document.querySelector("#history-" + index);
  historyElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function scrollTo(index) {
  var historyElement = document.querySelector("#history-" + index);
  historyElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
