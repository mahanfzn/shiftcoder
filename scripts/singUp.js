const send = new meesage()

// vareble 


const usersName = document.querySelector('#usersName'),
    email = document.querySelector('#email-input'),
    phone = document.querySelector('#phone'),
    password = document.querySelector('#password-input'),
    reapetPass = document.querySelector('#reapetPass'),
    submit = document.querySelector('#submit'),
    form = document.querySelector('#form')



// everntLiseteaner
eventListeaner()
function eventListeaner() {
    document.addEventListener('DOMContentLoaded', loadPage)
    usersName.addEventListener('blur', sendData)
    email.addEventListener('blur', sendData)
    phone.addEventListener('blur', sendData)
    password.addEventListener('blur', sendData)
    reapetPass.addEventListener('blur', sendData)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const spiner = document.querySelector('#spiner')
        spiner.style.display = 'block'
        setTimeout(() => {
            spiner.style.display = 'none'

        }, 3000);
    })
}

function loadPage() {

    submit.disabled = true
}
function sendData() {
    // check the uses Data
    if (usersName.value != '' && email.value != '' && phone.value != '' && password.value != '') {
        ValidTheName(usersName.value)
        ValidTheeamil(email.value)
        ValidThePhone(phone.value)
        ValidThePassword(password.value)
        ValidTheReapetPass(password.value, reapetPass.value)


        const error = document.querySelectorAll('.error')
        if (error.length == 0) {
            submit.disabled = false



        }
    }
}




// valid the name
function ValidTheName(name) {
    if (name.length >= 3) {
        usersName.style.borderColor = "green"
        submit.classList.remove('error')

    } else {
        submit.classList.add('error')
        send.sendMessage('لطفا اسم خود را صحیح وارد کنید', 'aler alert-danger text-center')
        usersName.style.borderColor = "red"

    }
}

// valid the eamil
function ValidTheeamil(getEmail) {
    if (getEmail.length >= 13 && getEmail.includes("@gmail.com")) {
        email.style.borderColor = "green"
        submit.classList.remove('error')

    } else {
        submit.classList.add('error')
        send.sendMessage('لطفا ایمیل خود را صحیح وارد کنید', 'aler alert-danger text-center')
        email.style.borderColor = "red"

    }
}

// // valid the phone

function ValidThePhone(getPhone) {
    // check the number length
    if (getPhone.length == 11) {
        var convert = parseInt(getPhone)
        if (typeof convert == 'number') {
            phone.style.borderColor = "green"
            submit.classList.remove('error')

        }
    } else {
        submit.classList.add('error')
        send.sendMessage('لطفا شماره خود را صحیح وارد کنید', 'aler alert-danger text-center')
        phone.style.borderColor = "red"


    }

}

// valid the password
function ValidThePassword(pass) {
    if (pass.length >= 5) {
        password.style.borderColor = "yellow"
        submit.classList.remove('error')
        if (pass.length >= 10) {
            password.style.borderColor = "green"
            submit.classList.remove('error')

        }

    } else {
        submit.classList.add('error')
        send.sendMessage('لطفا رمز خود را وارد کنید', 'aler alert-danger text-center')
        password.style.borderColor = "red"



    }


}
// valid the reaoetPass
function ValidTheReapetPass(pass, rpPass) {

    if (rpPass === pass) {
        reapetPass.style.borderColor = "green"
        submit.classList.remove('error')




    } else {
        submit.classList.add('error')
        send.sendMessage('تکرارگذرواژه با گذرواژه بابر نیست', 'aler alert-danger text-center')
        reapetPass.style.borderColor = "red"



    }
}

