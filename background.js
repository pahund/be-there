function navigateTo(url) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) =>
    chrome.tabs.update(tabs[0].id, { url: url })
  );
}

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command received: ${command}`);
  switch (command) {
    case 'open_url1':
      console.log("Navigating to open FRSH pull requests on GitHub Enterprise");
      navigateTo('https://github.es.ecg.tools/mobile-de/mde-ui/pulls?q=is%3Apr+is%3Aopen+label%3AFRSH');
      break;
    case 'open_url2':
      console.log("Navigating to Kanban board of project FRSH in Jira");
      navigateTo('https://jira.ets.mpi-internal.com/secure/RapidBoard.jspa?rapidView=4001583');
      break;
    case 'open_url3':
      console.log("Navigating to user story map of project FRSH in Jira");
      navigateTo('https://jira.ets.mpi-internal.com/secure/EasyAgileUserStoryMap.jspa?rapidView=4001583#/');
      break;
    case 'open_url4':
      console.log("Navigating to favourite pull requests in Jenkins");
      navigateTo('https://mo-jenkins.es.ecg.tools/user/patrick-hund/my-views/view/%E2%AD%90%EF%B8%8F%20PRs/');
      break;
    default:
      console.error(`Unknown command ${command}`);
  }
});

