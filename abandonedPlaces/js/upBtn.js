const circle = document.querySelector('.progress-ring__circle'),
      btnUp = document.querySelector('.upBtn'),
      radius = circle.r.baseVal.value,
      circumFerence = 2 * Math.PI * radius;

      
btnUp.addEventListener('mouseover', function(e) {
    btnUp.style.opacity = '1';
});
btnUp.addEventListener('mouseout', function(e) {
    if (window.pageYOffset > 0) {
        btnUp.style.opacity = '0.5';
    } else {
        btnUp.style.opacity = '0';
    }
})


circle.style.strokeDasharray = ` ${circumFerence} ${circumFerence}`;
circle.style.strokeDashoffset = circumFerence;

const setProgress = (precent) => {
    const offset = circumFerence - precent / 100 * circumFerence;
    circle.style.strokeDashoffset = offset;
}

window.addEventListener('scroll', function(e) {

    // Если пользователь про скроллил страницу, то показать кнопку
    if (window.pageYOffset > 0) {
        btnUp.style.opacity = '0.5';
    } else {
        btnUp.style.opacity = '0';
    }

    // Подсчиать процент скролла страницы
    const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight,
    percentage = document.querySelector(".upper");
    const total = bodyHeight - heightOfWindow,
        got = contentScrolled,
        percent = parseInt((got/total) * 100)
        setProgress(percent);

})
