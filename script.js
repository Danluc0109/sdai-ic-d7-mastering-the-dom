// Write your JavaScipt code below this line. 
const mainTitle = document.getElementById('main-title')
mainTitle.textContent = 'Welcome to Our Cat Adoption Center'

const description = document.getElementById('description')
description.textContent = 'Find your purrfect companion!'

const cat1Button = document.getElementById('cat-1-button')
cat1Button.addEventListener("click", () => {
    const Whiskercard = document.getElementById("cat-1")
    Whiskercard. remove()
    alert("Congrats on adopting your new friend Whiskers!")
})

const cat2Button = document.getElementById("cat-2-button")
cat2Button.addEventListener("click", () => {
    const Daisycard = document.getElementById("cat-2")
    Daisycard. remove()
    alert("Congrats on adopting your new friend Daisy")
})

const cat3Button = document.getElementById("cat-3-button")
cat3Button.addEventListener("click", () => {
    const Terrycard = document.getElementById("cat-3")
    Terrycard. remove()
    alert("Congrats on adopting your new friend Terry")
})