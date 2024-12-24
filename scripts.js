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


class Card {
    _cardList = []
    constructor(title, info) {
        this.title = title
        this.info = info
    }

    addCard(title, info) {
        const card = new Card(title, info)
        this._cardList.push(card)
    }

    displayCard() {
        this._cardList.forEach(card => {
            
            const newCard = document.createElement('div')
            newCard.classList.add('card')

            const h3 = document.createElement('h3')
            h3.textContent = card.title
            newCard.appendChild(h3)
            h3.setAttribute('role', 'button')

            const cardText = document.createElement('p')
            cardText.textContent = card.info
            newCard.appendChild(cardText)

           const actionButtonsClone = actionButtons.cloneNode(true)
           newCard.appendChild(actionButtonsClone)

           cardContainer.appendChild(newCard)
        })
    }
}


const cardList = new Card()

addPost.addEventListener('click', () => {
    if(formTitle.value === '' || formText.value === '') {
        return
    } 

    const titleValue = formTitle.value 
    const textValue = formText.value

    cardList.addCard(titleValue, textValue)

    cardList.displayCard()

    formContainer.classList.toggle('hidden-form')

    formTitle.value = ''
    formText.value = ''

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


