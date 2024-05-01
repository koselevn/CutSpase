const headerForm = document.querySelector('.header-form')
const headerInput = document.querySelector('.header-form-input')

headerInput.addEventListener('focus', () => {
    headerForm.classList.add('header-form-active')
})

headerInput.addEventListener('blur', () => {
    headerForm.classList.remove('header-form-active')
})

// --------------------------

var screenWidth = window.innerWidth;

console.log(screenWidth)

if (screenWidth <= 1446) {
    let body = document.querySelector('.body')

    body.innerHTML = `
    
    <div class='container' style='margin-top: 20px;'>
        <h2>This website works on screens larger than 1446 pixels</h2>
        <p>Your device resolution is 1446 pixels</p>
    </div>
    `
}