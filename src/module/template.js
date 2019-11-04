const body = document.querySelector('body');

export function addTemplate() {
    let article = document.createElement('article');
    article.classList.add('wrapper');
    body.append(article);

    let sectionTextArea = document.createElement('section');
    sectionTextArea.classList.add('textArea');
    article.append(sectionTextArea);

    let textArea = document.createElement('textarea');
    let rowsTextArea = document.createAttribute('rows');
    let colsTextArea = document.createAttribute('cols');
    rowsTextArea.value = '6';
    colsTextArea.value = '60';
    textArea.setAttributeNode(rowsTextArea);
    textArea.setAttributeNode(colsTextArea);
    sectionTextArea.append(textArea);

    let sectionKey = document.createElement('section');
    sectionKey.classList.add('wrapper__keyboard');

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    sectionKey.append(keyboard);

   
    
    let fragment = document.createDocumentFragment();
    
    for(let i=0; i<5; i++){
        let rowKey = document.createElement('div');
        rowKey.classList.add('keyboard__row');
        keyboard.append(rowKey);
    }

    console.log(fragment);

    keyboard.append(fragment);
    return article.append(sectionKey);
}


