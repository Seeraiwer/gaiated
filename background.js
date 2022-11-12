function launchMain(info, tab) {
    browser.tabs.executeScript(tab.id, {
        code: "typeof mainFunc === 'function';",
    }).then((results) => {
        console.log(results)
        if (!results || results[0] !== true) {
            console.log('inject JS')
            browser.tabs.executeScript(tab.id, { file: "content.js" });
        }
    }).then(() => {
        setTimeout(function() {
            browser.tabs.executeScript(tab.id, {
                code: "mainFunc()"
            });
        }, 500)
    }).catch((error) => {
        console.error("Failed to execute function : " + error);
    });
}

chrome.contextMenus.create({ "title": "GaiaID Explorer", "contexts": ["selection"], "onclick": launchMain });