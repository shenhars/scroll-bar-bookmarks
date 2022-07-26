console.log("abcd")
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        const urlParameters = tab.url;
        console.log("efg");

        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["contentScript.js"]
        })
    }
})
