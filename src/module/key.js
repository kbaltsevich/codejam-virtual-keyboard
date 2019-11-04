export function addKey(keyCode, keyLangOneUp, keyLangOneDown, keyLangTwoUp, keyLangTwoDown){

    let key = document.createElement('div');
    key.classList.add('keyboard__key');

    let keyCodeOn = document.createElement('span');
    keyCodeOn.classList.add(`${keyCode}`);
    keyCodeOn.classList.add('lang');
    
    let addKeyLangOneUp = document.createElement('span');
    addKeyLangOneUp.innerText = `${keyLangOneUp}`;
    addKeyLangOneUp.classList.add('case');
    

    let addKeyLangOneDown = document.createElement('span');
    addKeyLangOneDown.innerText = `${keyLangOneDown}`;
    addKeyLangOneDown.classList.add('case');
    addKeyLangOneDown.classList.add('down');
    keyCodeOn.append(addKeyLangOneUp);
    keyCodeOn.append(addKeyLangOneDown);

    let keyCodeOff = document.createElement('span');
    keyCodeOff.classList.add(`${keyCode}`);
    keyCodeOff.classList.add('lang');
    keyCodeOff.classList.add('off');

    let addKeyLangTwoUp = document.createElement('span');
    addKeyLangTwoUp.classList.add('case');
    addKeyLangTwoUp.innerText = `${keyLangTwoUp}`;

    let addKeyLangTwoDown = document.createElement('span');
    addKeyLangTwoDown.innerText = `${keyLangTwoDown}`;
    addKeyLangTwoDown.classList.add('case');
    addKeyLangTwoDown.classList.add('down');

    keyCodeOff.append(addKeyLangTwoUp);
    keyCodeOff.append(addKeyLangTwoDown);

    key.append(keyCodeOn);
    key.append(keyCodeOff);

    return key;
}

