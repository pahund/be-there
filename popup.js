function navigateTo(url) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => 
    chrome.tabs.update(tabs[0].id, { url: url })
  );
}

document.getElementById('url1').addEventListener('click', () => {
  console.log("Navigating to mobile.de via button");
  navigateTo('https://www.mobile.de/');
});
