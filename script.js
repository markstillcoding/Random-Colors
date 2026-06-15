const changeColorEl = document.querySelector(".app__btn");
const colorBoxEl = document.querySelector(".app__color-box");
const customColorEl = document.querySelector(".custom-color");


const generatedColors = {
  rColors: [],
  gColors: [],
  bColors: [],
  sameColors: [],
};

function createNewColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;

  let newColor = {
    r,
    g,
    b,
  };

  return newColor;
}

function createChosenColor(color) {
  let r = Math.floor(
    Math.random() * (color.red[1] - color.red[0]) + color.red[0],
  );
  let g = Math.floor(
    Math.random() * (color.green[1] - color.green[0]) + color.green[0],
  );
  let b = Math.floor(
    Math.random() * (color.blue[1] - color.blue[0]) + color.blue[0],
  );

  let newColor = {
    r,
    g,
    b,
  };

  return newColor;
}

let i = 1;

function analyzeColor(newColors) {
  let color = null;
  if (newColors !== undefined) {
    color = createChosenColor(newColors);
  } else {
    color = createNewColor();
  }
  setTimeout(
    () => {
      formatNewColor(color);
      if (color.r === color.g && color.r > color.b) {
        generatedColors.rColors.push(color);
      } else if (color.r === color.b && color.r > color.g) {
        generatedColors.rColors.push(color);
      } else if (color.b === color.g && color.b > color.r) {
        generatedColors.bColors.push(color);
      } else if (color.r > color.g && color.r > color.b) {
        generatedColors.rColors.push(color);
      } else if (color.g > color.b && color.g > color.r) {
        generatedColors.gColors.push(color);
      } else if (color.b > color.g && color.b > color.r) {
        generatedColors.bColors.push(color);
      } else {
        generatedColors.sameColors.push(color);
      }

      i++;

      if (i < 11) {
        analyzeColor(newColors);
      }
    },

    500,
  );

  console.log(generatedColors);
}

function formatNewColor(color) {
  const newColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  colorBoxEl.style.backgroundColor = newColor;
  colorBoxEl.classList.add("app__color-box--changeColor");
}

changeColorEl.addEventListener("click", () => analyzeColor(undefined));



// reference for new router - S-375684137

const colorElements = Array.from(document.getElementsByTagName('input'));
const newModifiedColors = {}


colorElements.forEach(function (elem) {
  elem.addEventListener("input", function (e) {
    const newLow = parseInt(e.target.value) - 10;
    const newHigh = parseInt(e.target.value) + 10;
    newModifiedColors[elem.name] = [newLow, newHigh];
  })
})

