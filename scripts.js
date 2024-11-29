const cardContainer = document.querySelector('.projects-cards')
const actionButtons = document.querySelector('.card div')
const addButton = document.querySelector('#add-button')
const formContainer = document.querySelector('#form-container')
const projectForm = document.querySelector('#project-form')
const addPost = document.querySelector('#add-post')
const formTitle = document.querySelector('#new-title')
const formText = document.querySelector('#paragraph')

addButton.addEventListener('click', () => {
    formContainer.classList.toggle('hidden')
})

addPost.addEventListener('click', () => {



    const titleValue = formTitle.value 
    const textValue = formText.value


    const card = document.createElement('div')
    card.classList.add('card')


    const h3 = document.createElement('h3')
    h3.textContent = titleValue
    card.appendChild(h3)

    const text = document.createElement('p')
    text.textContent = textValue
    card.appendChild(text)

    const actionButtonsClone = actionButtons.cloneNode(true)
    card.appendChild(actionButtonsClone)

    cardContainer.appendChild(card)

    formTitle.value = ''
    formText.value = ''

    formContainer.classList.toggle('hidden')

    
    formContainer.reset()


})

