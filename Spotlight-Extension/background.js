console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    console.log(tab)
    let msg = {
        clicked: "1"
    };
    chrome.tabs.sendMessage(tab.id,msg)
}