//ОБРАБОТКА ФОРМЫ



//----------------Проверка на корректное нажатие клавиш при вводе номера телефона----------------
function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || 
            key == '+' || key == '('  ||
            key == ')' || key == '-'  ||
            key == 'ArrowLeft' || key == 'ArrowRight' ||
            key == 'Delete' || key == 'Backspace';
}



//----------------Нажатие на кнопку "Отправить данные"--------------------
function SendDate(el) {
    
    //Получение значений полей ввода 
    var nameValue  = document.getElementById('nameField').value;
    var phoneValue = document.getElementById('phoneField').value;
    var postValue  = document.getElementById('postField').value;

    //Получение атрибута style у полей ввода
    var nameStyle  = document.getElementById('nameField').style;
    var phoneStyle = document.getElementById('phoneField').style;
    var postStyle  = document.getElementById('postField').style;
    var informWindow = document.getElementById('informWindow').style;


    //Правила проверки полей ввода
    let nameRule = /^[a-zа-яё]+$/i;
    let postRule = /^[\w-\.]+@mail.ru$/i;
    let numberRule = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    
    //Проверка input'ов на правильность ввода
    if (nameRule.test(nameValue)) 
        errorEdit(nameStyle, true)
    else 
        errorEdit(nameStyle, false);
    
    if (numberRule.test(phoneValue)) 
        errorEdit(phoneStyle, true)
    else 
        errorEdit(phoneStyle, false);
    
    if (postRule.test(postValue)) 
        errorEdit(postStyle, true)
    else 
        errorEdit(postStyle, false);
    

    //Метод визуализации ошибки
    function errorEdit(elStyle, flag) {
        if (flag == true) {
            elStyle.borderColor = "black";
        } else {
            elStyle.borderColor = "red";
        }
    }

    
    //Если все поля заполнены корректно, то уведомить пользователя об отправке данных
    if (nameStyle.borderColor == "red" || phoneStyle.borderColor == "red" || postStyle.borderColor == "red") {
        informWindow.visibility = "hidden";
    } else {
        informWindow.visibility = "visible";
    }


    //Вернуть значение false, чтоб страница не обновлялась
    return false;
}