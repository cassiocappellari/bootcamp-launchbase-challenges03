const modalFull = document.querySelector(".modal")
const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener('click', function(){
        const courseId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src=`https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector(".close-modal").addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalFull.classList.remove('maximize')
})

document.querySelector(".full-screen").addEventListener('click', function(){
    modalFull.classList.add('maximize')
})