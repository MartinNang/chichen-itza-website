const scrollContainer = document.querySelector(".history-page");
console.log("scroll container", scrollContainer);
const length = 500;
let index = 0;
const asset1 = document.querySelector("#asset-1");
const asset2 = document.querySelector("#asset-2");
const asset3 = document.querySelector("#asset-3");

scrollContainer.addEventListener("wheel", (event) => {
  console.log("scroll delta y", event.deltaY);
  console.log("index", index);
  if (event.deltaY < 0) {
    console.log("scroll up");
    if (index > 0) {
      index--;
      scrollTo(index);
    } else {
      scrollContainer.scrollBy({
        left: event.deltaY < 0 ? -length : length,
        behavior: "smooth",
        block: "nearest",
      });
    }
    console.log("asset-1", asset1.style.top);
    asset1.style.top =
      parseFloat(asset1.style.top || 0) + event.deltaY < 0
        ? -length
        : length + "px";
  } else {
    console.log("scroll down");
    if (index < 6) {
      index++;
      scrollTo(index);
    }
  }
  event.preventDefault();
});

function scrollTo() {
  var historyElement = document.querySelector("#history-" + index);
  historyElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function showPopup(button) {
  const popUp = button.parentNode.getElementsByClassName("info-popup")[0];
  if (popUp) {
    popUp.classList.remove("hidden");
    popUp.classList.add("fade-in");
  }
}

function closePopup(button) {
  const popUp = button.parentNode;
  if (popUp) {
    popUp.classList.add("hidden");
    popUp.classList.remove("fade-in");
  }
}
