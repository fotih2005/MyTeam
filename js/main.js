const usersTemplate = document.querySelector(".users-template").content;
const UsersList = document.querySelector(".users-section__list")





function renderUsers(usersArr){
    UsersList.innerHTML = null
    usersArr.forEach((user) => {
        const newTemp = usersTemplate.cloneNode(true)
        const {first_name, last_name, geander, src, text, paragrphs} = user

        newTemp.querySelector(".users-section__item-img").src = src
        newTemp.querySelector(".users-section__item-title").textContent = `${first_name} ${last_name}`
        newTemp.querySelector(".users-section__item-text").textContent = text
        newTemp.querySelector(".users-section__item-back-text").textContent = paragrphs
        UsersList.append(newTemp)
    })
}
renderUsers(users)

const btn = document.querySelectorAll(".users-section__btn")
const card = document.querySelectorAll(".users-section__item")

    btn.forEach(btn =>{
        btn.addEventListener('click', () => {
            btn.closest('.users-section__item').classList.toggle('users-section__item--active')
    
        })
    })