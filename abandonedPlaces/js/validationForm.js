const nameInput  = document.querySelector('.nameInput'),
      numberInput = document.querySelector('.numberInput'),
      postInput  = document.querySelector('.postInput');


const managingFields = (input, flag) => {
    
    if(flag == true) {
        input.style.borderColor = '#BFE2FF';
    } else {
        input.style.borderColor = 'red';
    }
    
}

const checkingFields = (input, rule) => {
    if(rule.test(input.value)) {
        managingFields(input, true);
        return true;
    } else {
        managingFields(input, false)
        return false;
    };
}


const sendData = (e) => {

    //Правила проверки полей ввода
    let nameRule = /^[a-zа-яё]+$/i,
        postRule = /^[\w-\.]+@mail.ru$/i,
        numberRule = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;


    checkingFields(nameInput, nameRule);
    checkingFields(numberInput, numberRule);
    checkingFields(postInput, postRule);

    if (checkingFields(nameInput, nameRule) && checkingFields(numberInput, numberRule) && checkingFields(postInput, postRule)) {
        return true;
    } else {
        return false;
    }
}