console.log('background')

chrome.webNavigation.onCommitted.addListener((details) => {
  if (['reload', 'link'].includes(details.transitionType)) {
    chrome.tabs.sendMessage(details.tabId, { type: 'PARSE_PAGE' }, (response) => {
      console.log('response, onCommitted')
    })
  }
})
