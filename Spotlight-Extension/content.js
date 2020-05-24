console.log("Content started")
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
        let paragraphs = document.getElementsByTagName('p')
        for (elt of paragraphs) {
            console.log(elt)
            elt.innerHTML = elt.innerHTML.split("the").join('<span style="background-color: #fff799;">' + "the" + '</span>');
        }

}
// document.body.innerHTML = document.body.innerHTML.split(value).join('<span style="background-color: #fff799;">' + value + '</span>');