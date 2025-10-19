function mainFunc(selectionText) {
    console.log('mainFunc launched');
    const gaiaList = [
        "https://google.com/maps/contrib/XXXXXX",
        "https://web.archive.org/web/*/https://plus.google.com/XXXXXX*",
        "https://web.archive.org/web/*/https://get.google.com/albumarchive/XXXXXX*",
    ];

    const string = (typeof selectionText === 'string' && selectionText.length > 0)
        ? selectionText
        : window.getSelection().toString();

    if (string.length === 21 && !isNaN(string)) {
        console.log("Alles Guet :)");
        for (let i = 0; i < gaiaList.length; i++) {
            window.open(gaiaList[i].replace('XXXXXX', string));
        }
    } else {
        console.log("Ce n'est pas un Google ID (Doit être 21 caractères numériques).");
    }
}
