//ОБРАБОТКА ФОРМЫ


//----------------Нажатие на кнопку "Отправить данные"--------------------
function Send(el) {
    
    //Получение значений полей ввода
    var nameValue = document.getElementById('namePerson').value;
    var phoneValue = document.getElementById('phoneNumber').value;
    var postValue  = document.getElementById('postAddres').value;

    //Получение атрибута style у полей ввода
    var phoneStyle = document.getElementById('phoneNumber').style;
    var postStyle  = document.getElementById('postAddres').style;


    //Правила проверки полей ввода
    let postRule = /^[\w-\.]+@mail.ru$/i;
    let numberRule = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    
    //Проверка input'ов на правильность ввода
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
    if (phoneStyle.borderColor != "red" && postStyle.borderColor != "red") 
        alert(nameValue + ", подписка успешно оформлина!!!");


    //Вернуть значение false, чтоб страница не обновлялась
    return false;
}