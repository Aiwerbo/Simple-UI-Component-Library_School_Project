
// Disable all inputs
(function() {


function textField(element){
    let selectLabel = element.querySelector('.mds-text-field__label');
    let selectInput = element.querySelector('.mds-text-field__input');


    selectInput.addEventListener('focus', function(e){

        selectInput.style.color = 'black'
        
        if(selectInput){
            
            
            selectInput.style.fontSize = '16px'
            selectLabel.style.color = '#F44336'
            selectLabel.classList.add("mds-text-field__input--inputActive");
        }

    })


    selectInput.addEventListener('blur', function(e){

        let selectInputValue = selectInput.value;
        selectInput.style.color = '#00000099';
        selectLabel.style.color = '#00000099';
        if(selectInputValue <= 0){

        selectLabel.classList.remove("mds-text-field__input--inputActive");
        selectLabel.style.color = '#00000099'
        selectInput.style.borderBottom = '' 


        }

        
    })

    
}


function noop(){

} 

window.mds = {
  textField: textField,
  switch: noop,
  checkbox: noop,
  radioButton: noop
};


}());
