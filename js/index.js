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