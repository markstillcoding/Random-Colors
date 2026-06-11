const changeColorEl = document.querySelector('.app__btn')
const colorBoxEl = document.querySelector('.app__color-box')

const generatedColors = {
  rColors: [],
  gColors: [],
  bColors: [],
  sameColors: []
}

function createNewColor() {
  let r = Math.floor(Math.random() * 255) + 1
  let g = Math.floor(Math.random() * 255) + 1
  let b = Math.floor(Math.random() * 255) + 1

  let newColor = {
    r,
    g,
    b
  }

  return newColor
}

let i = 1

function analyzeColor() {
  setTimeout(
    () => {
      const color = createNewColor()
      console.log(color)
      formatNewColor(color)

      if (color.r === color.g && color.r > color.b) {
        generatedColors.rColors.push(color)
      } else if (color.r === color.b && color.r > color.g) {
        generatedColors.rColors.push(color)
      } else if (color.b === color.g && color.b > color.r) {
        generatedColors.bColors.push(color)
      } else if (color.r > color.g && color.r > color.b) {
        generatedColors.rColors.push(color)
      } else if (color.g > color.b && color.g > color.r) {
        generatedColors.gColors.push(color)
      } else if (color.b > color.g && color.b > color.r) {
        generatedColors.bColors.push(color)
      } else {
        generatedColors.sameColors.push(color)
      }

      console.log(generatedColors)
      i++

      if (i < 21) {
        analyzeColor()
      }
    },

    500
  )
}

function formatNewColor(color) {
  const newColor = `rgb(${color.r}, ${color.g}, ${color.b})`
  colorBoxEl.style.backgroundColor = newColor
  colorBoxEl.classList.add('app__color-box--changeColor')
}

changeColorEl.addEventListener('click', analyzeColor)

const colorAmount = document.querySelector('input');
const value = document.querySelector('#value');
value.textContent = colorAmount.value;
colorAmount.addEventListener("input", (e) => {
  value.textContent = event.target.value;
})



// reference for new router - S-375684137
