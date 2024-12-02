const cardContainer = document.querySelector('.projects-cards')
const actionButtons = document.querySelector('.card div')
const addButton = document.querySelector('#add-button')
const formContainer = document.querySelector('#form-container')
const projectForm = document.querySelector('#project-form')
const addPost = document.querySelector('#add-post')
const formTitle = document.querySelector('#new-title')
const formText = document.querySelector('#paragraph')

addButton.addEventListener('click', () => {
    formContainer.classList.toggle('hidden-form')
})

addPost.addEventListener('click', () => {
    if(formTitle.value === '' || formText.value === '') {
        return
    } 

    const titleValue = formTitle.value 
    const textValue = formText.value


    const card = document.createElement('div')
    card.classList.add('card')


    const h3 = document.createElement('h3')
    h3.textContent = titleValue
    card.appendChild(h3)
    h3.setAttribute('role', 'button')

    const text = document.createElement('p')
    text.textContent = textValue
    card.appendChild(text)

    const actionButtonsClone = actionButtons.cloneNode(true)
    card.appendChild(actionButtonsClone)

    cardContainer.appendChild(card)

    formTitle.value = ''
    formText.value = ''

    formContainer.classList.toggle('hidden-form')

    
    projectForm.reset()


})


const cardInfo = document.querySelectorAll('.card h4, .card p')
const mainContainer = document.querySelector('.main-container')

cardInfo.forEach(el => {
    el.addEventListener('click', () => {
        
        const newHiddenCard = document.createElement('div')
        newHiddenCard.classList.add('hidden-card')
        mainContainer.appendChild(newHiddenCard)
 
        const card = el.closest('.card');
        
        const cardParagraphText = card.querySelector('p')
        const cardText = cardParagraphText.textContent
        

        const cardTitleText = card.querySelector('h4')
        const titleText = cardTitleText.textContent
        
        newHiddenCard.innerHTML = `<strong>${titleText}</strong> <br> ${cardText}`

        const cardExitBtn = document.createElement('button')
        cardExitBtn.classList.add('card-exit-button')
        cardExitBtn.textContent = 'EXIT'
        newHiddenCard.appendChild(cardExitBtn)

        cardExitBtn.addEventListener('click', () => {
            newHiddenCard.remove()
        })
    })
})



const userName = document.querySelector('.user div')

userName.addEventListener('click', () => {
    const userInfo = document.createElement('div')
    userInfo.classList.add('user-card')
    mainContainer.appendChild(userInfo)
    userInfo.textContent = 'There could be information about you here'

    const deleteUserCard = document.createElement('button')
    deleteUserCard.classList.add('user-exit-button')
    deleteUserCard.textContent = 'EXIT'
    userInfo.appendChild(deleteUserCard)

    deleteUserCard.addEventListener('click', () => {
        userInfo.remove()
    })

})