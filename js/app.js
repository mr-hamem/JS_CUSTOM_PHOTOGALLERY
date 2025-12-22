let images = document.querySelectorAll(`.img_div img`)
let popup = document.querySelector(`.popup`)
let popupImg = document.querySelector(`.popup img`)
let canCelBtn = document.querySelector(`.popup .cancelBtn`)
function openPopUp(event) {
    popupImg.src = event.target.src
    popup.classList.add(`show`)
}
images.forEach(img => {
    img.addEventListener(`click`, openPopUp)
})
function closePopUp() { 
    popup.classList.remove(`show`)
}
canCelBtn.addEventListener(`click`, closePopUp)
popup.addEventListener(`click`, closePopUp)