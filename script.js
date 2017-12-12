window.onload = function() {
    
    // изменение стиля кнопок
    for(let i=0; i<document.querySelectorAll('.mode-button').length; i++) {
        document.querySelectorAll('.mode-button')[i].addEventListener('click', changeBtnStyle);
    };

    var isEasyBtnActive = true; 
    
    function changeBtnStyle (event) {
        if(event.target == document.getElementById('easy') && isEasyBtnActive == true) {
            return;
        };

        if(event.target === document.getElementById('full') && isEasyBtnActive == false) {
            return;
        };

        if(isEasyBtnActive) {
            document.getElementById('easy').classList.remove('active-btn');
            document.getElementById('full').className = 'active-btn';
            
            document.getElementById('easy-mode').style.display = 'none';
            document.getElementById('full-mode').style.display = 'block';

            isEasyBtnActive = false
        } else if(isEasyBtnActive == false) {
            document.getElementById('full').classList.remove('active-btn');
            document.getElementById('easy').className = 'active-btn';
            
            document.getElementById('full-mode').style.display = 'none';
            document.getElementById('easy-mode').style.display = 'block';
        
            
            isEasyBtnActive = true; 
        }
        console.log(isEasyBtnActive)
    };

}