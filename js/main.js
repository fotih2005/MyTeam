const btn = document.querySelector(".users-section__btn")
const card = document.querySelector(".users-section__item")

btn.addEventListener('click', function(){
    card.classList.toggle("users-section__item--active")
})