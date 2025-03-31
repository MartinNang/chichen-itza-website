const scrollContainer = document.querySelector(".history-page");
console.log("scroll container", scrollContainer);
const length = 500;
let index = 0;

document.addEventListener("keyup", ({ key }) => {
  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6"
  ) {
    scrollTo(key);
  }
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

function complexScroll() {}

function scrollTo() {
  var historyElement = document.querySelector("#history-" + index);
  historyElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function scrollTo(index) {
  var historyElement = document.querySelector("#history-" + index);
  historyElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
