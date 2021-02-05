const btn = document.getElementById('btn-check')
const scroller = document.getElementById('carrousel-scroller')

btn.addEventListener('click', event => {
  console.log(event)
  if (btn.classList.contains('go-right')) {
    //Go right
    btn.classList.remove('go-right')
    btn.classList.add('go-left')
    scroller.scroll(300, 0)
  } else if (btn.classList.contains('go-left')) {
    //Go left
    btn.classList.remove('go-left')
    btn.classList.add('go-right')
    scroller.scroll(0,0)
  } else {
    console.error('Error al detectar la clase .go-right|.go-left en #btn-check')
  }
})


const pricesContainer = document.getElementById('prices-container')
const pricesBtnLeft = document.getElementById('prices-btn-left')
const pricesBtnRight = document.getElementById('prices-btn-right')

pricesContainer.scroll(143,0)

pricesBtnLeft.addEventListener('click', event => {
  const scrollX = pricesContainer.scrollLeft
  console.log(scrollX)
  if (scrollX == 0) {
    return false
  } else if (scrollX < 205) {
    pricesContainer.scroll(0,0)
  } else if (scrollX > 205) {
    pricesContainer.scroll(143,0)
  }
})

pricesBtnRight.addEventListener('click', event => {
  const scrollX = pricesContainer.scrollLeft
  if (scrollX == 0) {
    pricesContainer.scroll(143,0)
  } else if (scrollX > 142) {
    pricesContainer.scroll(286,0)
  }
})