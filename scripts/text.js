class meesage {

sendMessage(text,color){
    // get access to the meesage <div>
const meesage = document.querySelector('#meesage')
// create the h2 tag
const div = document.createElement('div')
// add the value to the h2
div.append(document.createTextNode(text))
// add the class to the div
div.className = color
// apend the meessage to the document

meesage.appendChild(div)
setTimeout(() => {
    this.removeMessage()    
}, 3000);
}

removeMessage(){
    const alert = document.querySelector('.alert-danger')
    if (alert) {
        alert.remove()
    }
}

}