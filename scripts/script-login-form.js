// script for get the usersBrowser	
//varibale
const getImage = document.querySelector('#avatar-img')
//gets the type of browser
function detectBrowser() {

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'Opera';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
}
// if users browser was enclude firefox  
if (detectBrowser().includes('Firefox')) {
    // reriwte the marginTop of avatarImage
    getImage.style.marginTop = '-790px'
}
//script for loading part
//varibale
form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const spiner = document.querySelector('#spiner')
    spiner.style.display = 'block'
    setTimeout(() => {
        spiner.style.display = 'none'

    }, 3000);
})





























