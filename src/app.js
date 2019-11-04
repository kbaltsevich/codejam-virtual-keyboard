import './style.scss';
import {addTemplate} from './module/template.js';
import {addKey} from './module/key.js';
import {keys} from './module/keys.js';

addTemplate();
const rows = document.querySelectorAll('.keyboard__row');

rows.forEach(function (item, index) {
    keys[index].forEach(function (k) {
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

const keyboardKeys = document.querySelectorAll('.keyboard__key');
const keyLang = document.querySelectorAll('.lang');
const keyUpDown = document.querySelectorAll('.case');
const textarea = document.querySelector('textarea');


document.addEventListener('keydown', event => {
    keyDown(event);
    event.preventDefault();
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        keyUpDown.forEach(function (key) {
            if (!key.classList.contains('down')) {
                key.classList.add('down');
            } else {
                key.classList.remove('down');
            };
        });
    }
})

document.addEventListener('keyup', event => {
    let keyCodes = event.code;
    if (keyCodes != 'Tab' && keyCodes != 'ShiftLeft' && keyCodes != 'ShiftRigth' && keyCodes != 'AltRigth' && keyCodes != 'AltLeft' && keyCodes != 'ControlLeft' && keyCodes != 'ControlRight' && keyCodes != 'MetaRight' && keyCodes != 'MetaRLeft' && keyCodes != 'CapsLock' && keyCodes != 'ContextMenu' && keyCodes != 'Enter' && keyCodes != 'Backspace') {
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
    }
    if (keyCodes == 'Tab') {
        event.preventDefault();
        textarea.value += '    ';
    }
    if (keyCodes == 'Enter') {
        event.preventDefault();
        textarea.value += '\n';
    }
    if (keyCodes == 'Space') {
        event.preventDefault();
        textarea.value += '';
    }
    if (keyCodes == 'Backspace') {
        event.preventDefault();
        textarea.value = textarea.value.split('').slice(0, -1).join('');
    }
})

document.addEventListener('keyup', event => {
    keyUp(event);
    event.preventDefault();
})

document.addEventListener('keyup', event => {
    if (event.code == 'CapsLock') {
        keyUpDown.forEach(function (key, index) {
            if (!key.classList.contains('down')) {
                key.classList.add('down');
            } else {
                key.classList.remove('down');
            };
        });
    }
})

document.addEventListener('keyup', event => {
    if (event.code == 'ShiftLeft' && event.ctrlKey) {
        keyLang.forEach(function (key) {
            key.classList.toggle('off');
        })
    }
})

document.addEventListener('keyup', event => {
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        keyUpDown.forEach(function (key) {
            key.classList.toggle('down');
        });
    }
})


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