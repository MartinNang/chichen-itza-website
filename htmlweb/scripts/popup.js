function showPopup(button, isOnHistoryPage) {
  const popUp = button.parentNode.getElementsByClassName("info-popup")[0];
  if (!isOnHistoryPage) {
    const popups = document.getElementsByClassName("info-popup");
    for (let p of popups) {
      console.log(p.classList);
      if (p.classList) {
        p.classList.remove("hidden");
        p.classList.remove("fade-in");

        p.classList.add("hidden");
      }
    }
  }

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
