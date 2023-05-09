function navigateTo(url) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => 
    chrome.tabs.update(tabs[0].id, { url: url })
  );
}

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command received: ${command}`);
  if (command === 'open_url1') {
    console.log("Navigating to open Searchlight pull requests");
    navigateTo('https://github.es.ecg.tools/mobile-de/consumer-webapp/pulls?q=is%3Apr+is%3Aopen+label%3Asearchlight');
  } 
});

