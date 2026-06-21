const changeColorEl = document.querySelector('.app__btn');
const customColorEl = document.querySelector('.custom-color');
const colorGridEl = document.querySelector('.color-grid');
const newModifiedColors = {};
const generatedColors = [];
let timer = 1;

function createNewColor() {
  let r = Math.floor(Math.random() * 255) + 1
  let g = Math.floor(Math.random() * 255) + 1
  let b = Math.floor(Math.random() * 255) + 1

  let newColor = {
    r,
    g,
    b
  }
  console.log(newColor)
  return newColor
}

function createChosenColor(color) {
  let r = Math.floor(
    Math.random() * (color.red[1] - color.red[0]) + color.red[0]
  )
  let g = Math.floor(
    Math.random() * (color.green[1] - color.green[0]) + color.green[0]
  )
  let b = Math.floor(
    Math.random() * (color.blue[1] - color.blue[0]) + color.blue[0]
  )

  let newColor = {
    r,
    g,
    b
  }

  return newColor
}

function createColorShades(color) { }

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
  } else {
    color = createNewColor()
  }

  setTimeout(
    () => {
      formatNewColor(color)
      createColorBox(color)
      generatedColors.push(color)
      timer++

      if (timer < 11) {
        createColorArray(newColors)
      }
    },

    200
  )

}

function analyzeColor(newColors) {
  if (newColors !== undefined) {
    color = createChosenColor(newColors)
  } else {
    color = createNewColor()
  }

  setTimeout(() => {
    formatNewColor(color)

    if (color.r === color.g && color.r > color.b) {
      getRedColors(color)
    }

    if (color.r === color.b && color.r > color.g) {
      getRedColors(color)
    }

    if (color.b === color.g && color.b > color.r) {
      getBlueColors(color)
    }

    if (color.r > color.g && color.r > color.b) {
      getRedColors(color)
    }

    if (color.g > color.b && color.g > color.r) {
      getGreenColors(color)
    }

    if (color.b > color.g && color.b > color.r) {
      getBlueColors(color)
    }

    if ((color.b === color.g) === color.r) {
      getSameColors(color)
    }

    timer++

    if (timer < 11) {
      analyzeColor(newColors)
    }
  }, 200)
}

function createColorBox(color) {
  const newColorDiv = document.createElement('div');
  const newColorSpan = document.createElement('span');
  let colorValue = getTextColor(color);
  if (colorValue < 383) {
    newColorSpan.classList.add('span-white')
  } else {
    newColorSpan.classList.add('span-black')
  }
  newColorSpan.classList.add('app__color-box-span')
  newColorDiv.classList.add('app__color-box')
  newColorSpan.textContent = `rgb(${color.r},${color.g},${color.b})`
  newColorDiv.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`
  colorGridEl.append(newColorDiv)
  newColorDiv.append(newColorSpan)
}

function formatNewColor(color) {
  const newColor = `rgb($ {
      color.r
    }

    , $ {
      color.g
    }

    , $ {
      color.b
    }

  )`
  return newColor
}

changeColorEl.addEventListener('click', () => createColorArray(undefined))
customColorEl.addEventListener('click', () => createColorArray(newModifiedColors))

// reference for new router - S-375684137

const colorElements = Array.from(document.getElementsByTagName('input'))

colorElements.forEach(function (elem) {
  elem.addEventListener('input', function (e) {
    const newLow = parseInt(e.target.value) - 10
    const newHigh = parseInt(e.target.value) + 10
    newModifiedColors[elem.name] = [newLow, newHigh]
  })
})

const dialog = document.querySelector('#dialog');
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const modalOverlay = document.querySelector(".modal-overlay");


colorGridEl.addEventListener('click', e => {
  const target = e.target.closest(".app__color-box");
  const originalColor = document.querySelector('.original-color-box')
  originalColor.style.backgroundColor = e.target.textContent;

  if (target) {
    dialog.showModal();

  }
  closeButton.addEventListener("click", () => {
    dialog.close();
  })
})

function getTextColor(color) {
  let totalColorValue = color.r + color.g + color.b;
  return totalColorValue;
}

function createColorShades(color) {
  let shade = .25;
  let newShades = function (key) {
    Object.keys(key).forEach(function (color) { key[color] = color * shade });
    return newShades;
  }
}



