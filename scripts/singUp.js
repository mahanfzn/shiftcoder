const send = new meesage()
// vareble 
let validation = document.querySelectorAll('.validation')
let form = document.querySelector('#form')
let submit = document.querySelector('#submit')
let spiner = document.querySelector('#spiner')      
// everntLiseteaner
eventListeaner()
function eventListeaner() {
    validation[0].addEventListener('blur', ValidTheName); //name
    validation[1].addEventListener('blur', ValidTheeamil)//email
    validation[2].addEventListener('blur', ValidThePhone)//phone
    validation[3].addEventListener('blur', ValidThePassword)//password
    validation[4].addEventListener('keyup', sendData)//reapetThePass
    form.addEventListener('submit',submitTheForm)//submit
}
function sendData() {
    // check the uses Data
    if (validation[3].value != '' && validation[4].value != '') {
        ValidTheReapetPass(validation[3].value, validation[4].value)
    }
    const Error = document.querySelectorAll('.error')
    if (Error.length == 0) {
        submit.style.cursor = 'pointer'
        validation[5].disabled = false
    }
}
function submitTheForm() {
    spiner.style.display = 'block'
    setTimeout(() => {
    spiner.style.display = 'none'
    }, 3000);
}
// valid the name
function ValidTheName(name) {
    if (name.target.value !== '' && name.target.value.length >= 3) {
        validation[0].style.borderColor = "green"
        send.sendMessage( '','','meesageName')
        validation[5].classList.remove('error')
    } else {
        validation[5].classList.add('error')
        send.sendMessage('لطفا اسم خود را صحیح وارد کنید', 'text-danger text-center', 'meesageName')
        validation[0].style.borderColor = "red"
    }
}
// valid the eamil
function ValidTheeamil(getEmail) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (getEmail.target.value.match(mailformat) && getEmail.target.value !== '') {
        validation[1].style.borderColor = "green"
        send.sendMessage( '','','meesageEmail')
        validation[5].classList.remove('error')
    } else {
        validation[1].style.borderColor = "red"
        validation[5].classList.add('error')
        send.sendMessage('لطفا ایمیل خود را صحیح وارد کنید', 'text-danger text-center', 'meesageEmail')
    }
}
 // valid the phone
function ValidThePhone(getPhone) {
    var phoneFormat = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
    if (getPhone.target.value.match(phoneFormat)) {
        validation[2].style.borderColor = "green"
        send.sendMessage( '','','meesagePhone')
        validation[5].classList.remove('error')
    } else {
        validation[5].classList.add('error')
        send.sendMessage('لطفا شماره خود را صحیح وارد کنید', 'text-danger text-center', 'meesagePhone')
        validation[2].style.borderColor = "red"
    }
}
 // valid the password
function ValidThePassword(pass) {
    if (pass.target.value !== '' && pass.target.value.length >= 8) {
        validation[3].style.borderColor = "green"
        send.sendMessage( '','','meesagePassword')
        validation[5].classList.remove('error')
    }
     else {
        validation[5].classList.add('error')
        send.sendMessage('لطفا رمز خود را وارد کنید', 'text-danger text-center', 'meesagePassword')
        validation[3].style.borderColor = "red"
    }
}
// valid the reapetPass
function ValidTheReapetPass(pass, reapPass) {
    if (pass == reapPass) {
        validation[4].style.borderColor = "green"
        send.sendMessage( '','','meesageRepass')
        validation[5].classList.remove('error')
    } else {
        validation[5].classList.add('error')
        send.sendMessage('تکرارگذرواژه با گذرواژه بابر نیست', 'text-danger text-center', 'meesageRepass')
        validation[4].style.borderColor = "red"
    }
}