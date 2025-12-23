// dark and light mode js starts here
let toggleBtn = document.querySelector(`button#mode-toggle`);
toggleBtn.addEventListener('click', function(){
  document.body.classList.toggle('light-mode');
});
// dark and light mode js ends here
// photo gallery whole js starts here
let images = document.querySelectorAll(`.img_div img`)
let popup = document.querySelector(`.popup`)
let popupImg = document.querySelector(`.popup img`)
let canCelBtn = document.querySelector(`.popup .cancelBtn`)
let rightArrow = document.querySelector(`.rightArrow`)
let leftArrow = document.querySelector(`.leftArrow`)
let selectedImg = 0
function openPopUp(event,index) {
    popupImg.src = event.target.src
    popup.classList.add(`show`)
    selectedImg = index
    console.log(selectedImg)
}
images.forEach((img, index) => {
    console.log(index)
    img.addEventListener(`click`, function (event) { 
        openPopUp(event,index)
    })
})
function closePopUp(event) {
    if (event.target.classList.contains(`popup`) || event.target.classList.contains(`closeIcon`) || event.target.classList.contains(`cancelBtn`)) { 
        popup.classList.remove(`show`)
    }
}
canCelBtn.addEventListener(`click`, closePopUp)
popup.addEventListener(`click`, closePopUp)

function nextImg() {
    selectedImg++;
    if (selectedImg >= images.length) { 
        selectedImg = 0
    }
    popupImg.src = images[selectedImg].src
 }
function prevImg() {
    selectedImg--;
    if (selectedImg < 0) { 
        selectedImg = images.length - 1
    }
   popupImg.src = images[selectedImg].src
 }

rightArrow.addEventListener(`click`, nextImg)
leftArrow.addEventListener(`click`, prevImg)
function keyBoardEvent(event) { 
    if (event.key == `ArrowLeft`) { 
    prevImg()
    }
    if (event.key == `ArrowRight`) { 
    nextImg()
    }
}
window.addEventListener(`keyup`, keyBoardEvent)

// photo gallery whole js ends here