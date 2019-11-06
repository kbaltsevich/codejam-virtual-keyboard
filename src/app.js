import './style.scss';
import {addTemplate} from './module/template.js';
import {addKey} from './module/key.js';
import {keys} from './module/keys.js';
import {locStore} from './module/localstor.js';



const metaKeys = ['Tab', 'ShiftLeft', 'ShiftRight', 'AltRight', 'AltLeft', 'ControlLeft', 'ControlRight', 'MetaRight', 'MetaLeft', 'CapsLock', 'ContextMenu', 'Enter', 'Backspace']
addTemplate();

const rows = document.querySelectorAll('.keyboard__row');
let isKlick = null;

rows.forEach((item, index) => {
    keys[index].forEach(k => {
        let key = addKey(...k);
        if (`${k[0]}` == 'Space') {
            key.classList.add('key__space');
        }
        if (`${k[0]}` == 'ShiftLeft' || `${k[0]}` == 'ShiftRight') {
            key.classList.add('key__shift');
        }
        if (`${k[0]}` == 'Tab') {
            key.classList.add('key__tab');
        }
        if (`${k[0]}` == 'Backspace') {
            key.classList.add('key__back');
        }
        if (`${k[0]}` == 'Enter') {
            key.classList.add('key__enter');
        }
        if (`${k[0]}` == 'CapsLock') {
            key.classList.add('key__caps');
        }
        item.append(key);
    });
});

locStore();


const keyboardKeys = document.querySelectorAll('.keyboard__key');
const keyLang = document.querySelectorAll('.lang');
const keyUpDown = document.querySelectorAll('.case');
const textarea = document.querySelector('textarea');


document.addEventListener('keydown', event => {
    event.preventDefault();
    keyDown(event);
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        shiftDown(event);
    }
})

document.addEventListener('keyup', event => {
    event.preventDefault();
    let keyCodes = event.code;
    keyUp(event);
    if (metaKeys.indexOf(keyCodes) === -1) {
        let key = document.querySelectorAll(`.${keyCodes}`);
        key.forEach(item => {
            if (!item.classList.contains('off')) {
                item.querySelectorAll('.case').forEach(k => {
                    if (!k.classList.contains('down')) {
                        textarea.value += k.textContent;
                    }
                })
            }
        })
    } else
    if (keyCodes == 'Tab') { 
        textarea.value += '    ';
    } else
    if (keyCodes == 'Enter') {
        textarea.value += '\n';
    } else
    if (keyCodes == 'Space') {
        textarea.value += '';
    } else
    if (keyCodes == 'Backspace') {
        textarea.value = textarea.value.split('').slice(0, -1).join('');
    } else
    if (keyCodes == 'CapsLock') {
        capsLock(event);
    } else
    if (keyCodes === 'ShiftLeft' && event.ctrlKey) {
        changeLang(event);
    } else
    if (keyCodes === 'ShiftLeft' || keyCodes == 'ShiftRight') {
        shiftUp(event);
    }
})

keyboardKeys.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.classList.add('keyboard__key--active');
        item.querySelectorAll('.lang').forEach(lang => {
            if (!lang.classList.contains('off')) {
                if (!lang.classList.contains('Tab') && !lang.classList.contains('Enter') && !lang.classList.contains('ShiftLeft') && !lang.classList.contains('ShiftRight') && !lang.classList.contains('AltRight') && !lang.classList.contains('AltLeft') && !lang.classList.contains('ControlLeft') && !lang.classList.contains('ControlRight') && !lang.classList.contains('MetaRight') && !lang.classList.contains('MetaLeft') && !lang.classList.contains('ContextMenu') && !lang.classList.contains('Backspace') && !lang.classList.contains('CapsLock')) {
                    lang.querySelectorAll('.case').forEach(k => {
                        if (!k.classList.contains('down')) {
                            textarea.value += k.textContent;
                        }
                    })
                } else
                if (lang.classList.contains('Tab')) {
                    textarea.value += '    ';
                } else
                if (lang.classList.contains('Enter')) {
                    textarea.value += '\n';
                } else
                if (lang.classList.contains('Space')) {
                    textarea.value += '';
                } else
                if (lang.classList.contains('Backspace')) {
                    textarea.value = textarea.value.split('').slice(0, -1).join('');
                } else
                if (lang.classList.contains('CapsLock')) {
                    keyUpDown.forEach(function (key) {
                        if (!key.classList.contains('down')) {
                            key.classList.add('down');
                        } else {
                            key.classList.remove('down');
                        };
                    })
                }
            }
        })
    })
    item.addEventListener('mouseup', () => {
        item.classList.remove('keyboard__key--active');
    })
})


function capsLock(event) {
    keyUpDown.forEach(key => {
            if (!key.classList.contains('down')) {
                key.classList.add('down');
            } else {
                key.classList.remove('down');
            };
    });
}

function changeLang(event) {
    keyLang.forEach((key, index) => {
        key.classList.toggle('off');
        if (key.classList.contains('off')) {
            localStorage.setItem(`${index}`, 'off');
        } else {
            localStorage.removeItem(`${index}`);
        }
    })
}

function shiftUp(event) {
    if (!isKlick) {
        isKlick = Date.now();
        keyUpDown.forEach(function (key) {
            key.classList.toggle('down');
        });
    }
}

function shiftDown(event) {
    isKlick = null;
    console.log(event);
    keyUpDown.forEach(function (key) {
        if (!key.classList.contains('down')) {
            key.classList.add('down');
        } else {
            key.classList.remove('down');
        };
    });
}

function keyDown(event) {
    keyboardKeys.forEach(item => {
        if (item.querySelector(`.${event.code}`)) {
            item.classList.add('keyboard__key--active');
        }
    })
}

function keyUp(event) {
    keyboardKeys.forEach(item => {
        if (item.querySelector(`.${event.code}`)) {
            item.classList.remove('keyboard__key--active');
        }
    })
}