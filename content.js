console.log("Hello from content.js!!!");

let paragraphs = document.getElementsByTagName("p");

for (elt of paragraphs) {
  console.log(elt.innerText);
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
}
