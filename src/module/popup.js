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
username_container.setAttribute('id','username-container')
const username_name = document.createElement('h2')
username_name.innerHTML='Username';
const username_input = document.createElement('INPUT')
username_input.setAttribute('id','username')
username_input.setAttribute('type','text')
username_input.setAttribute('name','username')
username_input.setAttribute('minlength','4')
username_input.setAttribute('maxlength','20')
username_input.setAttribute("pattern","^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")
username_input.setAttribute('placeholder','Enter username')
username_input.required;
username_input.addEventListener('input', (e)=>{
    if (username_input.validity.valid){
        username_input.style.border=''
        username_input.style.backgroundColor=''
        username_container.classList.remove('active')
    }
    else{
        showError(username_input.id);
    }
})
username_container.appendChild(username_name)
username_container.appendChild(username_input)

form.appendChild(username_container)

const email_container = document.createElement('div')
email_container.setAttribute('id','email-container')
const email_name =  document.createElement('h2')
email_name.innerHTML='Email'
const email_input = document.createElement('INPUT')
email_input.setAttribute('id','email')
email_input.setAttribute('type','email')
email_input.setAttribute('name','email')
email_input.setAttribute('placeholder','email')
email_input.addEventListener('input', (e)=>{
    if (email_input.validity.valid){
        email_input.style.border=''
        email_input.style.backgroundColor=''
        email_container.classList.remove('active')

    }
    else{
        showError(email_input.id);
    }
})
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
zip_container.setAttribute('id','zip-container')
const zip_name = document.createElement('h2')
zip_name.innerHTML='Zipcode'
const zip_input = document.createElement('INPUT')
zip_input.setAttribute('id','zip')
zip_input.setAttribute('type','text')
zip_input.setAttribute('name','zip')
zip_input.setAttribute('placeholder','99999') 
zip_input.setAttribute('maxlength','5')
zip_input.setAttribute('pattern','^[0-9]*$');
zip_input.addEventListener('input', (e)=>{
    if (zip_input.validity.valid){
        zip_input.style.border=''
        zip_input.style.backgroundColor=''
        zip_container.classList.remove('active')

    }
    else{
        showError(zip_input.id);
    }
})
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
password_input.setAttribute('placeholder','enter password') //must contain at least 8 char, 1 num, and include lower and upper case, and special char
password_input.addEventListener('input', (e)=>{
    if (password_input.validity.valid){
        console.log('nice')
        password_input.style.border=''
        password_input.style.backgroundColor=''
    }
    else{
        showError(password_input.id);
    }
})
password_container.appendChild(password_name)
password_container.appendChild(password_input)
form.appendChild(password_container)

const confirm_container = document.createElement('div')
confirm_container.setAttribute('id','confirm-container')
const confirm_name = document.createElement('h2')
confirm_name.innerHTML='Confirm Password'
const confirm_input = document.createElement('INPUT')
confirm_input.setAttribute('id','confirm')
confirm_input.setAttribute('type','password')
confirm_input.setAttribute('name','confirm')
confirm_input.setAttribute('placeholder','re-enter password') 
confirm_input.addEventListener('input', (e)=>{
    if (confirm_input.value === password_input.value){
        confirm_input.style.border=''
        confirm_input.style.backgroundColor=''
        confirm_container.classList.remove('active')
    }
    else{
        showError(confirm_input.id);


    }
})
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

/* form validation */
function showError(input){
    if (input === 'username'){
        if (username_input.validity.tooShort){
            console.log('Too Short need at least 8 characters')
            username_container.classList.add('active')
        }

    }
    else if (input === 'email'){

        if (email_input.validity.typeMismatch){
            email_input.style.border='3px solid red'
            email_input.style.backgroundColor='#FDD'
            email_container.classList.add('active')
        }
        else if (email_input.validity.tooShort){
            console.log('Too Short')
            email_input.style.border='3px solid red'
            email_input.style.backgroundColor='#FDD'
        }
    }
    else if (input === 'zip'){
        zip_input.style.border='3px solid red'
        zip_input.style.backgroundColor='#FDD'
        zip_container.classList.add('active')

    }
    else if (input === 'password'){
        console.log('need /must contain at least 8 char, 1 num, and include lower and upper case, and special char')
        password_input.style.border='3px solid red'
        password_input.style.backgroundColor='#FDD'
    }
    else if (input === 'confirm'){
        confirm_container.classList.add('active')
    }
}

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
