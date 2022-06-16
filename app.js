const canvas = document.querySelector(".canvas");
const rgbBtn = document.querySelector(".rgb");
const hslBtn = document.querySelector(".hsl");

const canvasWidth = canvas.offsetWidth - 400;

for (let i = 0; i < canvasWidth; i++) {
  // Dynamically generate squares
  const div = document.createElement("div");
  div.classList.add("square");
  canvas.appendChild(div);
}

function getRandomRGBColor() {
  let values = "0123456789ABCDEF";
  let color = "#";

  // Randomize a hex value
  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomHSLColor() {
    return "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' + 
    (85 + 10 * Math.random()) + '%)'
}

const sqs = document.querySelectorAll(".square");

// Set a random color for each square
function setRandomColor() {
  sqs.forEach((square) => {
    square.style.backgroundColor = getRandomRGBColor();
  });
}
setRandomColor();

// Event listeners 
rgbBtn.addEventListener("click", () => {
  setRandomColor();
});

hslBtn.addEventListener("click", () => {
    sqs.forEach((square) => {
        square.style.backgroundColor = getRandomHSLColor();
      });
})

// Show RGB whenever a user hovers over a square
sqs.forEach((square) => {
  square.addEventListener("mouseover", () => {
    const currentText = document.querySelector(".current-color");
    currentText.innerText = `Current square color: ${getRandomRGBColor()}`;
  });
});
