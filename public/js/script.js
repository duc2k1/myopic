const input = document.querySelector('input')
const btnPre = document.querySelector('#btnPre')
const btnNext = document.querySelector('#btnNext')
const img = document.querySelectorAll('img')
let dem = 0
btnPre.addEventListener('click', () => {
  if (dem == 0)
    return
  dem--
  input.value = dem + " độ"
  for (let i = 0; i < img.length; i++) {
    img[i].style.filter = `blur(${dem * 2}px)`
  }

})
btnNext.addEventListener('click', () => {
  dem++
  input.value = dem + " độ"
  for (let i = 0; i < img.length; i++) {
    img[i].style.filter = `blur(${dem * 2}px)`
  }
})
