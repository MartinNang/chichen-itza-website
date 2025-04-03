const $logo = document.querySelectorAll(".logo")[0];
const $cards = document.querySelectorAll(".card"); // Select both cards and logo

function rotateToMouse(e) {
  const bounds = this.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  this.style.transform = `
    scale3d(1.05, 1.05, 1.05) /* Slightly reduced scale */
    translateX(0) /* Prevents unintended movement */
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

  const glow = this.querySelector(".glow");
  if (glow) {
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }
}

function rotateLogoToMouse(e) {
  const bounds = this.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  this.style.transform = `
    scale3d(1.05, 1.05, 1.05) /* Slightly reduced scale */
    translateX(-50%) /* Prevents unintended movement */
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

  const glow = this.querySelector(".glow");
  if (glow) {
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }
}

$cards.forEach(($card) => {
  // Apply the hover effect immediately when the page loads
  // $card.style.transform = "scale3d(1.05, 1.05, 1.05)"; // Apply scaled state
  // Add this line if you want to apply the initial rotation effect
  // $card.style.transform += 'rotate3d(0, 0, 1, 0deg)'; // Initial rotation (if needed)

  $card.addEventListener("mouseenter", () => {
    const onMouseMove = rotateToMouse.bind($card);
    document.addEventListener("mousemove", onMouseMove);

    // Store the event listener reference so we can remove it later
    $card._onMouseMove = onMouseMove;
  });

  $card.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove", $card._onMouseMove);
    $card.style.transform = "scale3d(1, 1, 1)"; // Reset to default scale
  });
});

console.log("logo", $logo);
$logo.addEventListener("mouseenter", () => {
  const onMouseMove = rotateLogoToMouse.bind($logo);
  document.addEventListener("mousemove", onMouseMove);

  // Store the event listener reference so we can remove it later
  $logo._onMouseMove = onMouseMove;
});

$logo.addEventListener("mouseleave", () => {
  document.removeEventListener("mousemove", $logo._onMouseMove);
  $logo.style.transform = "translateX(-50%) scale3d(1, 1, 1)"; // Reset to default scale
});

$logo.style.transform = "translateX(-50%) scale3d(1, 1, 1)"; // Reset to default scale
