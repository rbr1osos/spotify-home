/* Create form */
const main_container = document.querySelector('.main-container');
const signup_button = document.querySelector('.sign-up')
signup_button.addEventListener('click',()=>{
    const overlay = document.querySelector('.overlay')
    overlay.style.display='flex'
    main_container.appendChild(popup)
})

const popup = document.createElement('div')
popup.classList.add('popup')

const delete_popup = document.createElement('img')
delete_popup.classList.add('delete')
delete_popup.src='./images/close.svg'
delete_popup.addEventListener('click',()=>{
    const popup = document.querySelector('.popup-title')
    popup.parentNode.remove()
    const overlay = document.querySelector('.overlay')
    overlay.style.display='none'
})
popup.appendChild(delete_popup)

const popup_title = document.createElement('h1')
popup_title.classList.add('popup-title')
popup_title.innerHTML='Create an Account'

popup.appendChild(popup_title)
const form = document.createElement('FORM')
form.setAttribute('id','create-form')

const username_container = document.createElement('div')
const username_name = document.createElement('h2')
username_name.innerHTML='Username';
const username_input = document.createElement('INPUT')
username_input.setAttribute('id','username')
username_input.setAttribute('type','text')
username_input.setAttribute('name','username')
username_input.setAttribute('placeholder','Enter username')
username_container.appendChild(username_name)
username_container.appendChild(username_input)
form.appendChild(username_container)

const email_container = document.createElement('div')
const email_name =  document.createElement('h2')
email_name.innerHTML='Email'
const email_input = document.createElement('INPUT')
email_input.setAttribute('id','email')
email_input.setAttribute('type','email')
email_input.setAttribute('name','email')
email_input.setAttribute('placeholder','email')
email_container.appendChild(email_name)
email_container.appendChild(email_input)
form.appendChild(email_container)

const country_container = document.createElement('div')
const country_name = document.createElement('h2')
country_name.innerHTML='Country'
const country_input = document.createElement('SELECT')
country_input.setAttribute('name','country')
country_input.setAttribute('id','country')
const US_input = document.createElement('option')
US_input.setAttribute('value','United States')
US_input.innerHTML='United States'
country_input.appendChild(US_input)
country_container.appendChild(country_name)
country_container.appendChild(country_input)
form.appendChild(country_container)

const zip_container = document.createElement('div')
const zip_name = document.createElement('h2')
zip_name.innerHTML='Zipcode'
const zip_input = document.createElement('INPUT')
zip_input.setAttribute('id','zip')
zip_input.setAttribute('type','text')
zip_input.setAttribute('name','zip')
zip_input.setAttribute('placeholder','99999') //need validation
zip_container.appendChild(zip_name)
zip_container.appendChild(zip_input)
form.appendChild(zip_container)

const password_container = document.createElement('div')
const password_name = document.createElement('h2')
password_name.innerHTML='Password'
const password_input = document.createElement('INPUT')
password_input.setAttribute('id','password')
password_input.setAttribute('type','password')
password_input.setAttribute('name','password')
password_input.setAttribute('placeholder','enter password')
password_container.appendChild(password_name)
password_container.appendChild(password_input)
form.appendChild(password_container)

const confirm_container = document.createElement('div')
const confirm_name = document.createElement('h2')
confirm_name.innerHTML='Confirm Password'
const confirm_input = document.createElement('INPUT')
confirm_input.setAttribute('id','confirm')
confirm_input.setAttribute('type','password')
confirm_input.setAttribute('name','confirm')
confirm_input.setAttribute('placeholder','re-enter password')
confirm_container.appendChild(confirm_name)
confirm_container.appendChild(confirm_input)
form.appendChild(confirm_container)

const popup_button = document.createElement('button')
popup_button.setAttribute('id','popup-button')
popup_button.setAttribute('name','button')
popup_button.innerHTML='Submit'
popup_button.addEventListener('click',()=>{
    const popup = document.querySelector('.popup-title')
    popup.parentNode.remove()
    const overlay = document.querySelector('.overlay')
    overlay.style.display='none'
})
popup.appendChild(form)
popup.appendChild(popup_button)

/* Create form */
