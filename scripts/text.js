class meesage {
    sendMessage(text, color, place) {
        // get access to the meesage <div>
        const meesage = document.querySelector(`#${place}`)
        //add the text to the meesage
        meesage.innerHTML = text
        // add the class to the div
        meesage.className = color
    }
}