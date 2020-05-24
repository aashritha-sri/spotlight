console.log("background running");
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    console.log(tab)
    var msg = new SpeechSynthesisUtterance('Hello World');
    window.speechSynthesis.speak(msg);
    // let msg = {
    //     clicked: "1"
    // };
    // chrome.tabs.sendMessage(tab.id,msg)
}