console.log("hello from background.js!");

function buttonClicked(tab) {
  let msg = {
    txt: "hello",
  };
  console.log(tab);
  chrome.tabs.sendMessage(tab.id, msg);
}

chrome.action.onClicked.addListener(buttonClicked);
