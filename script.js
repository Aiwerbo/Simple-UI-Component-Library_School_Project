function disable(){
    let disTextField = document.querySelector('.mds-text-field__input');
    let disTextLabel = document.querySelector('.mds-text-field__label');
    let radioSpan = document.querySelectorAll('.mds-radio__span');
    disTextField.setAttribute('disabled', true);
    
    let disRadios = document.querySelectorAll('.mds-radio__input');
    for(let disRadio of disRadios){
        disRadio.setAttribute('disabled', true);
    }
    let disCheckbox = document.querySelector('.mds-checkbox__span');
    disCheckbox.setAttribute('disabled', true);
    let disCheckboxInput = document.querySelector('.mds-checkbox__input');
    disCheckboxInput.setAttribute('disabled', true);
    let disSwitch = document.querySelector('.mds-switch__input');
    disSwitch.setAttribute('disabled', true);
    let disSwitchSpan = document.querySelector('.mds-switch__span');
    disSwitchSpan.classList.add('mds-switch--span')
    let disHeader = document.querySelector(".mds-header")
    disHeader.style.background = '#eeeeee';
        
        if(disTextField.value.length <= 0){
            disTextField.style.borderBottom = '';
            disTextLabel.style.color = '#ccc'
            
        }
        else if (disTextField.value.length > 0){
            
            
            disTextLabel.style.color = '#ccc';
            disTextField.style.color = '#ccc';
            disTextField.style.borderBottom = '2px solid #ccc';
        }
    disCheckbox.style.borderColor = '#eeeeee'    
    for(let radioSpaner of radioSpan){
        radioSpaner.style.borderColor = '#eeeeee';
    }
        
        
    

}
// Enable all inputs

function enable(){
    let enTextField = document.querySelector('.mds-text-field__input');
    let enTextLabel = document.querySelector('.mds-text-field__label');
    let radioSpan = document.querySelectorAll('.mds-radio__span');
    enTextField.removeAttribute('disabled');
    let enRadios = document.querySelectorAll('.mds-radio__input');
    for(let enRadio of enRadios){
        enRadio.removeAttribute('disabled');
    }
    let enCheckbox = document.querySelector('.mds-checkbox__span');
    enCheckbox.removeAttribute('disabled');
    let enCheckboxInput = document.querySelector('.mds-checkbox__input');
    enCheckboxInput.removeAttribute('disabled');
    let enSwitch = document.querySelector('.mds-switch__input');
    enSwitch.removeAttribute('disabled');
    let enSwitchSpan = document.querySelector('.mds-switch__span');
    enSwitchSpan.classList.remove('mds-switch--span')
    document.querySelector(".mds-header").style.background = '#F44336';

    if(enTextField.value.length <= 0){
        enTextField.style.borderBottom = '';
        enTextLabel.style.color = ''
    }
    else if(enTextField.value.length > 0){
        enTextLabel.style.color = '#F44336'
        enTextField.style.borderBottom = '2px solid #F44336';
        enTextField.style.color = '#00000099';
        
    }
    for(let radioSpaner of radioSpan){
        radioSpaner.style.borderColor = '';
    }
    enCheckbox.style.borderColor = '#0000008a'
}
