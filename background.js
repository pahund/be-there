function navigateTo(url) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => 
    chrome.tabs.update(tabs[0].id, { url: url })
  );
}

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command received: ${command}`);
  switch (command) {
    case 'open_url1':
      console.log("Navigating to open Searchlight pull requests on GitHub Enterprise");
      navigateTo('https://github.es.ecg.tools/mobile-de/consumer-webapp/pulls?q=is%3Apr+is%3Aopen+label%3Asearchlight');
      break;
    case 'open_url2':
      console.log("Navigating to current sprint board of project Searchlight in Jira");
      navigateTo('https://jira.es.ecg.tools/secure/RapidBoard.jspa?rapidView=8005');
      break;
    case 'open_url3':
      console.log("Navigating to user story map of project Searchlight in Jira");
      navigateTo('https://jira.es.ecg.tools/projects/MC?selectedItem=com.arijea.plugins.easy-agile-user-story-maps&rapidView=8005#/');
      break;
    default:
      console.error(`Unknown command ${command}`);
  }
});

