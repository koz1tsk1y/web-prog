const bgAlert = document.querySelector('.myAlert'),
      hAlert = document.querySelector('.headerAlert'),
      pAlert = document.querySelector('.pAlert'),
      array_help_btn = document.querySelectorAll('.placeholder-container i');


bgAlert.addEventListener('click', function(e) {
    bgAlert.style.display = 'none';
});
    
const openAlert = (h, p) => {
    hAlert.textContent = h;
    pAlert.textContent = p;
    bgAlert.style.display = 'flex';
    window.style.overflow = 'hidden';
};


for (let index = 0; index < array_help_btn.length; index++) {
    array_help_btn[index].addEventListener('click', function(e) {
        switch(array_help_btn[index].className) {
            case 'fa fa-question helpName':
                openAlert('Имя поля: имя','Введите своё имя используя буквы русского или латинского алфавита.');
                break;
            case 'fa fa-question helpNumber':
                openAlert('Имя поля: номер телефона','Номер телефона должен быть белорусского стандарта: +375(25|29|33|44)*** ** **');
                break;
            case 'fa fa-question helpPost':
                openAlert('Имя поля: Адрес эл. почты','В имени можно использовать: латинские буквы; цифры; точку, подчеркивание или дефис: ._-. Эти символы не могут идти друг за другом или стоять в начале или конце имени. Так же адрес должен содержать доменную часть @mail.ru.');
                break;
        };
    });
}

