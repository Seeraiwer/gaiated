const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

function launchMain(info, tab) {
    const tabId = tab.id;
    const selectionText = typeof info.selectionText === "string" ? info.selectionText : "";

    extensionAPI.tabs
        .executeScript(tabId, {
            code: "typeof mainFunc === 'function';",
        })
        .then((results) => {
            if (!results || results[0] !== true) {
                return extensionAPI.tabs.executeScript(tabId, { file: "content.js" });
            }
            return undefined;
        })
        .then(() => {
            return extensionAPI.tabs.executeScript(tabId, {
                code: `mainFunc(${JSON.stringify(selectionText)})`,
            });
        })
        .catch((error) => {
            console.error("Failed to execute function : " + error);
        });
}

extensionAPI.contextMenus.create({
    title: "GaiaID Explorer",
    contexts: ["selection"],
    onclick: launchMain,
});
