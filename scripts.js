
const barsEl = document.querySelector('.menu');
const asideEl = document.querySelector('.aside');
// const randomColorEl = document.querySelector('.random-color')
// const customColorEl = document.querySelector('.custom-color')
const colorGridEl = document.querySelector('.color-grid');
// const colorModalGridEl = document.querySelector('.modal-color-grid')
// const randomColorInput = document.querySelector('.rColors')
// const customColorInput = document.querySelector('.cColors')
// const numberOfColorsEl = document.querySelector('.num-colors')
// const sidebarEl = document.querySelector('.sidebar')
// const headerEl = document.querySelector('.header')
// const newModifiedColors = {}
const generatedColors = [];
let timer = 1;


barsEl.addEventListener('click', () => {
  if (asideEl.classList[1] === 'fade-in') {
    asideEl.classList.remove('fade-in');
    asideEl.classList.add('fade-out');
  }
  else {
    asideEl.classList.remove('fade-out');
    asideEl.classList.add('fade-in');
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

  return newColor
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
    color = createChosenColor(newColors)
  }

  else {
    color = createNewColor()
  }

  setTimeout(() => {
    formatNewColor(color);
    createColorBox(color);
    generatedColors.push(color);
    timer++;
    if (timer < 50) {
      createColorArray(newColors)
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

// Add box size animation to make it larger to show more options.

function createColorBox(color) {
  const newColorDiv = document.createElement('div');
  const newColorSpan = document.createElement('span');
  newColorDiv.classList.add('new-color-div');
  newColorSpan.classList.add('new-color-span');
  newColorDiv.addEventListener('click', () => {
    console.log('clicked')
  })
  let colorValue = getTextColor(color);
  newColorSpan.classList.add('hidden');
  if (colorValue < 383) {
    newColorSpan.classList.add('text-white');
  }
  else {
    newColorSpan.classList.add('text-black');
  }
  newColorSpan.textContent = `rgb(${color.r}, ${color.g}, ${color.b})`;
  newColorDiv.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  colorGridEl.append(newColorDiv);
  newColorDiv.append(newColorSpan);
  return newColorSpan;
}

// function createModalColorBox(color) {
//   const newModalColorDiv = document.createElement('div')
//   newModalColorDiv.style.height = '80px'
//   newModalColorDiv.style.width = '80px'

//   newModalColorDiv.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`
//   colorModalGridEl.append(newModalColorDiv)
// }

function formatNewColor(color) {
  const newColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  return newColor;
}

// randomColorEl.addEventListener('click', () => createColorArray(undefined));
// customColorEl.addEventListener('click', () => createColorArray(newModifiedColors));
createColorArray(undefined);
// const colorElements = Array.from(document.getElementsByTagName('input'))
// colorElements.forEach(function (elem) {
//   elem.addEventListener('input', function (e) {
//     const newLow = parseInt(e.target.value) - 10
//     const newHigh = parseInt(e.target.value) + 10
//     newModifiedColors[elem.name] = [newLow, newHigh]
//   })
// })
// const dialog = document.querySelector('#dialog');
// const openButton = document.querySelector("#open");
// const closeButton = document.querySelector("#close");
// const modalOverlay = document.querySelector(".modal-overlay");



function getTextColor(color) {
  let totalColorValue = color.r + color.g + color.b;
  return totalColorValue;
}



// function createColorShades(color) {
//   let newColor = color.split(',')

//   let newColors = newColor.map(item => {
//     return Math.floor(Number(item.replace(/\D/g, '')))
//   })
//   return newColors
// }

// function showModalTintColors(shades) {
//   let newShades = shades.map(item => {
//     let newItem = {
//       r: item[0],
//       g: item[1],
//       b: item[2]
//     }

//     return newItem
//   })
//   return newShades
// }

// function createTint(color, numShades = 6, shadeStep = 0.2) {
//   const newShades = []
//   let shade = []
//   newShades.push(color)
//   let newShade = null

//   for (i = 0; i < numShades; i++) {
//     for (j = 0; j < color.length; j++) {
//       newShade = Math.floor(color[j] + shadeStep * (255 - color[j]))
//       shade.push(newShade)
//     }

//     newShades.push(shade)
//     shade = []
//     shadeStep += 0.1
//   }

//   return newShades
// }

// const randomForm = document.querySelector('.randomColor')
// const allRadios = Array.from(
//   document.querySelectorAll("form input[type='radio']")
// )

// randomForm.addEventListener('click', (event) => {
//   if (event.target && event.target.matches("input[type='radio']")) {
//     if (event.target.value === 'random') {
//       randomColorInput.classList.remove('hidden');
//       customColorInput.classList.add('hidden');
//       numberOfColorsEl.classList.remove('hidden');
//     }

//     if (event.target.value === 'custom') {
//       customColorInput.classList.remove('hidden');
//       randomColorInput.classList.add('hidden');
//     }

//   }
// }

// )