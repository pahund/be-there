# Be there!

Simple Chrome browser extension that lets me load URLs through keyboard shortcuts. This is useful to navigate to URLs in web pages that were installed as progressive web apps (PWAs), which have no bookmark functionality. With _Be there!_, I can add a button to my Stream Deck that triggers the shortcut and causes the PWA to navigate to the configured URL.

## How to install

Clone this GitHub repository to your local file system.

In Google Chrome, install the browser extension:

* Navigate to _chrome://extensions/_
* Turn on developer mode
* Click on load unpacked extensions
* Point the directory selector to the root directory of this repository's local copy

You should now be able to navigate to the various configured URLs with keyboard shortcuts Command+Shift+`{{number}}`, e.g. Command+Shift+1 to get to the pull requests page of project Searchlight on GitHub Enterprise.

The URLs are hard coded for now, take a look at [background.js](background.js) to see which these are currently. The corresponding shortcuts are configured in [manifest.json](manifest.json).

