const barsEl = document.querySelector('.menu');
const asideEl = document.querySelector('.aside');
const colorGridEl = document.querySelector('.color-grid');
const colorModalGridEl = document.querySelector('.modal-color-grid');
const inputRanges = document.querySelector('.input-ranges');
const redInput = document.getElementById('red_input')
const greenInput = document.getElementById('green_input')
const blueInput = document.getElementById('blue_input')
const asideContainer = document.querySelector('.aside-container');
const customColorBtn = document.querySelector('.custom-btn');
const generatedColors = [];
const customColors = {};
console.log(customColors);
let colorBoxAttr = 0;
let timer = 1;
let redRange = 0;
let greenRange = 0;
let blueRange = 0;
const customBox = document.querySelector('.custom-box');



inputRanges.addEventListener('input', (e) => {
  if (e.target === redInput) {
    redRange = e.target.value;
    let redContent = document.querySelector('.red-label span');
    redContent.textContent = e.target.value;
  }
  if (e.target === greenInput) {
    greenRange = e.target.value;
    let greenContent = document.querySelector('.green-label span');
    greenContent.textContent = e.target.value;
  }
  if (e.target === blueInput) {
    blueRange = e.target.value;
    let blueContent = document.querySelector('.blue-label span');
    blueContent.textContent = e.target.value;
  }
  const customColorRange = `rgb(${redRange}, ${greenRange}, ${blueRange})`;
  customBox.style.backgroundColor = customColorRange;
});


barsEl.addEventListener('click', () => {
  if (asideEl.classList[1] === 'fade-down' && asideContainer.classList[1] === 'fade-down') {
    asideEl.classList.remove('fade-down');
    asideEl.classList.add('fade-up');
    asideContainer.classList.remove('fade-down');
    asideContainer.classList.add('fade-up');

  }
  else {
    asideEl.classList.remove('fade-up');
    asideEl.classList.add('fade-down');
    asideContainer.classList.remove('fade-up');
    asideContainer.classList.add('fade-down');
  }
})




function createNewColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  let newColor = {
    r,
    g,
    b
  }
  generatedColors.push(newColor)
  return newColor;
}

// function createChosenColor(color) {
//   let r = Math.floor(
//     Math.random() * (color.red[1] - color.red[0]) + color.red[0]
//   )
//   let g = Math.floor(
//     Math.random() * (color.green[1] - color.green[0]) + color.green[0]
//   )
//   let b = Math.floor(
//     Math.random() * (color.blue[1] - color.blue[0]) + color.blue[0]
//   )

//   let newColor = {
//     r,
//     g,
//     b
//   }

//   return newColor
// }

// function createColorShades(color) { }

// function getRedColors(color) {
//   let obj = { rColors: [{ r: color.r }, { g: color.g }, { b: color.b }] }
//   generatedColors.push(obj);
// }
// function getGreenColors(color) {
//   let obj = { gColors: [{ r: color.r }, { g: color.g }, { b: color.b }] }
//   generatedColors.push(obj);
// }
// function getBlueColors(color) {
//   let obj = { bColors: [{ r: color.r }, { g: color.g }, { b: color.b }] }
//   generatedColors.push(obj);
// }
// function getSameColors(color) {
//   let obj = { sameColors: [{ r: color.r }, { g: color.g }, { b: color.b }] }
//   generatedColors.push(obj);
// }

function createColorArray(newColors) {
  if (newColors !== undefined) {
    color = createChosenColor(newColors);
  }
  else {
    color = createNewColor();
  }

  setTimeout(() => {
    formatNewColor(color);
    createColorBox(color);
    timer++;
    if (timer < 43) {
      createColorArray(newColors);
    }
  }
    , 10)
}

// function analyzeColor(newColors) {
//   if (newColors !== undefined) {
//     color = createChosenColor(newColors)
//   } else {
//     color = createNewColor()
//   }

//   setTimeout(
//     () => {
//       formatNewColor(color)

//       if (color.r === color.g && color.r > color.b) {
//         getRedColors(color)
//       }

//       if (color.r === color.b && color.r > color.g) {
//         getRedColors(color)
//       }

//       if (color.b === color.g && color.b > color.r) {
//         getBlueColors(color)
//       }

//       if (color.r > color.g && color.r > color.b) {
//         getRedColors(color)
//       }

//       if (color.g > color.b && color.g > color.r) {
//         getGreenColors(color)
//       }

//       if (color.b > color.g && color.b > color.r) {
//         getBlueColors(color)
//       }

//       if ((color.b === color.g) === color.r) {
//         getSameColors(color)
//       }

//       timer++

//       if (timer < 11) {
//         analyzeColor(newColors)
//       }
//     },

//     200
//   )
// }



function createColorBox(color) {
  let newHex = convertToHex(color);
  const newColorDiv = document.createElement('div');
  const newColorSpan = document.createElement('span');
  const hexColorSpan = document.createElement('span');
  newColorDiv.classList.add('new-color-div');
  newColorDiv.setAttribute("color-box-number", colorBoxAttr++)
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-circle-info");
  icon.classList.add('hidden');
  newColorSpan.classList.add('new-color-span', 'hidden');
  hexColorSpan.classList.add('hex-color-span', 'hidden');
  getTextColor(color, newColorSpan, hexColorSpan)
  newColorSpan.textContent = `rgb(${color.r}, ${color.g}, ${color.b})`;
  hexColorSpan.textContent = newHex;
  newColorDiv.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  colorGridEl.append(newColorDiv);
  newColorDiv.append(newColorSpan, hexColorSpan, icon);
}





function formatNewColor(color) {
  const newColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  return newColor;
}

const dialog = document.querySelector('#dialog');

const closeButton = document.querySelector(".close");
const modalOverlay = document.querySelector(".modal-overlay");

colorGridEl.addEventListener('click', (e) => {
  const target = e.target.closest(".fa-circle-info");
  const activeDiv = e.target.closest(".new-color-div");
  activeDiv.classList.add('active');
  if (!target) {
    activeDiv.classList.remove('active');
    return;
  } else {
    const rgbTarget = document.querySelector(".active .new-color-span");
    const hexTarget = document.querySelector(".active .hex-color-span");
    const OGColor = document.querySelector(".original-color");
    const compColor = document.querySelector(".comp-color");
    const rgbColor = document.querySelector(".rgb-color");
    const hexColor = document.querySelector(".hex-color");
    const compRgbColor = document.querySelector(".comp-rgb-color");
    const compHexColor = document.querySelector(".comp-hex-color");

    dialog.showModal();

    let rgb1 = activeDiv.getAttribute("color-box-number");
    let clickedNumber = generatedColors[rgb1];
    console.log(clickedNumber);
    let { newCompColor, newHex } = createComplimentaryColor(clickedNumber);
    // add to function
    let rgbFormattedValues = Object.values(clickedNumber);
    let newCompColorValues = Object.values(newCompColor);
    // add to function
    let newOriginalTintColors = createTint(rgbFormattedValues);
    let newCompTintColors = createTint(newCompColorValues);
    addTints(newOriginalTintColors, '.original-color-shades');
    addTints(newCompTintColors, '.comp-color-shades');
    // add to function
    OGColor.style.backgroundColor = `rgb(${clickedNumber.r}, ${clickedNumber.g}, ${clickedNumber.b})`;
    compColor.style.backgroundColor = `rgb(${newCompColor.red}, ${newCompColor.green}, ${newCompColor.blue})`;
    // add to functioin
    rgbColor.append(rgbTarget.textContent);
    hexColor.append(hexTarget.textContent);
    compRgbColor.append(`rgb(${newCompColor.red}, ${newCompColor.green}, ${newCompColor.blue})`);
    compHexColor.append(newHex);

  }
})

function addTints(arr, shade, container) {
  arr.map((num) => {
    const newDiv = document.createElement('div');
    const container = document.querySelector(shade);
    newDiv.style.backgroundColor = `rgb(${num[0]}, ${num[1]}, ${num[2]})`
    container.append(newDiv);
  })
}



closeButton.addEventListener("click", () => {
  const currentActiveDiv = document.querySelector('.new-color-div.active');
  const rgbColor = document.querySelector(".rgb-color");
  const hexColor = document.querySelector(".hex-color");
  const compRgbColor = document.querySelector(".comp-rgb-color");
  const compHexColor = document.querySelector(".comp-hex-color");
  const originalColorShadesContainer = document.querySelector('.original-color-shades');
  const compColorShadesContainer = document.querySelector('.comp-color-shades');
  const itemsToClear = [originalColorShadesContainer, compColorShadesContainer, rgbColor, hexColor, compRgbColor, compHexColor];
  itemsToClear.map(item => item.textContent = '');
  currentActiveDiv.classList.remove('active');
  dialog.close();

})

createColorArray(undefined);
colorCustomBtn.addEventListener('click', createColorArray())

function getTextColor(color, originalSpan, hexSpan) {
  let colorNum = color.r * .299 + color.g * .587 + color.b * .114;
  if (colorNum > 186) {
    originalSpan.classList.add('text-black');
    hexSpan.classList.add('text-black');
  }
  else {
    originalSpan.classList.add('text-white');
    hexSpan.classList.add('text-white');
  }
}

function createTint(color, numShades = 5, shadeStep = 0.1) {
  const newShades = []
  let shade = []
  let newShade = null

  for (i = 0; i < numShades; i++) {
    for (j = 0; j < color.length; j++) {
      newShade = Math.floor(color[j] + shadeStep * (255 - color[j]))
      shade.push(newShade)
    }
    newShades.push(shade)
    shade = []
    shadeStep += 0.1
  }
  return newShades
}

function convertToHex(color) {
  const hexArray = [];
  const numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  }
  for (colorName in color) {
    let quotient = Math.floor(color[colorName] / 16);
    let remainder = color[colorName] % 16;
    let quotientFinal = hexConversion(quotient, numbers, hexArray);
    hexArray.push(quotientFinal);
    let remainderFinal = hexConversion(remainder, numbers, hexArray);
    hexArray.push(remainderFinal);
  }
  let finalNumber = hexArray.join('');
  return `#${finalNumber}`;
}

function hexConversion(value, numbers, arr) {
  for (num in numbers) {
    if (value === Number(num)) {
      arr.push(numbers[num]);
    }
  }
}

function createComplimentaryColor(color) {
  let red = 255 - color.r;
  let green = 255 - color.g;
  let blue = 255 - color.b;
  let newCompColor = { red, green, blue }
  let newHex = convertToHex(newCompColor);
  return {
    newCompColor,
    newHex
  }
}




