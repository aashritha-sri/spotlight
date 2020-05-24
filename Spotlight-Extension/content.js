console.log("Content started")
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
    // if (message.clicked === "1") {
        let paragraphs = document.getElementsByTagName('p')
        for (elt of paragraphs) {
            console.log(elt.innerText)
        }
    //     console.log(message.clicked)
    // }
    // console.log("This is clearly not working ")
    // alert(message)
}