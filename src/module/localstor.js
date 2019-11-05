export let locStore = () => {
    if(localStorage.length>0){
        document.querySelectorAll('.lang').forEach( lang => {
            if(lang.classList.contains('off')){
                lang.classList.remove('off');
            }
        })
        
        document.querySelectorAll('.lang').forEach( function(lang, index){
            if(localStorage[`${index}`]){
                lang.classList.add('off');
            }
        })
    }
}