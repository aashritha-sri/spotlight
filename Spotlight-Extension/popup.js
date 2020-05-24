document.addEventListener('DOMFocusIn',
function () {
    document.querySelector('button').addEventListener('click',onclick,false)
    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "hi")
        })
        var msg = new SpeechSynthesisUtterance('Hello World');
            window.speechSynthesis.speak(msg);
    }
}, false)