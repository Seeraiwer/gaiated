function mainFunc() {
    console.log('mainFunc launched');
    let GaiaList = ["https://google.com/maps/contrib/XXXXXX","https://web.archive.org/web/*/https://plus.google.com/XXXXXX*","https://web.archive.org/web/*/https://get.google.com/albumarchive/XXXXXX*"];
    // selected text
    let string = window.getSelection().toString();
    if (string.length === 21 && !isNaN(string)) {
        console.log("Alles Guet :)");
        for (i=0;i<GaiaList.length;i++) {
            window.open(GaiaList[i].replace('XXXXXX', string));
        }
    } else {
        console.log("Ce n'est pas un Google ID (Doit être 21 caractères numériques).");
    }
}