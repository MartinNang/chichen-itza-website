function showPopup(button, isOnHistoryPage) {
  const popUp = button.parentNode.getElementsByClassName("info-popup")[0];
  if (popUp) {
    popUp.classList.remove("hidden");
    if (isOnHistoryPage) {
      popUp.classList.add("history-fade-in");
    } else {
      popUp.classList.add("fade-in");
    }
  }
}

function closePopup(button, isOnHistoryPage) {
  const popUp = button.parentNode;
  if (popUp) {
    popUp.classList.add("hidden");
    if (isOnHistoryPage) {
      popUp.classList.remove("history-fade-in");
    } else {
      popUp.classList.remove("fade-in");
    }
  }
}
