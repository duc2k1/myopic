const input = document.querySelector('input')
input.value = 0
const btnPre = document.querySelector('#btnPre')
const btnNext = document.querySelector('#btnNext')
const img = document.querySelector('img')

btnPre.addEventListener('click', () => {
  if (input.value == 0)
    return
  input.value--
  img.style.filter = `blur(${input.value * 2}px)`
})
btnNext.addEventListener('click', () => {
  input.value++
  img.style.filter = `blur(${input.value * 2}px)`
})
