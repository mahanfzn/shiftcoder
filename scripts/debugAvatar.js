//varibale
const getImage = document.querySelector('#avatar-img')
//gets the type of browser
function detectBrowser() { 
  
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';         
    }
  }
  // if users browser was enclude firefox  
  if (detectBrowser().includes('Firefox')) {
      // reriwte the marginTop of avatarImage
    getImage.style.marginTop = '-1000px'
  }