let array_li_a = document.querySelectorAll('.nav .container li a'),
    array_li_hr = document.querySelectorAll('.nav .container li hr');

    
for (let index = 0; index < array_li_a.length; index++) {

    array_li_a[index].addEventListener('mouseover', function(e) {
        array_li_hr[index].style.width = '70%';
    });

    array_li_a[index].addEventListener('mouseout', function(e) {
        array_li_hr[index].style.width = '0%';
    });    
}


// Links menu caps
// let aMain = document.querySelector('.aMain'),
//     aAbout = document.querySelector('.aAbout'),
//     aPopul = document.querySelector('.aPopul'),
//     aTop = document.querySelector('.aTop'),
//     aFeedback = document.querySelector('.aFeedback'),

//     // Lines under links
//     hrMain = document.querySelector('.hrMain'),
//     hrAbout = document.querySelector('.hrAbout'),
//     hrPopul = document.querySelector('.hrPopul'),
//     hrTop = document.querySelector('.hrTop'),
//     hrFeedback = document.querySelector('.hrFeedback'),

//     // Arrays of links and lines
//     aArray = [aMain, aAbout, aPopul, aTop, aFeedback],
//     hrArray = [hrMain, hrAbout, hrPopul, hrTop, hrFeedback];


// Adding events to each link
// for (let index = 0; index < aArray.length; index++) {
    
//     aArray[index].addEventListener('mouseover', function(e) {
//         hrArray[index].style.width = '70%';
//     });

//     aArray[index].addEventListener('mouseout', function(e) {
//         hrArray[index].style.width = '0%';
//     });    
// }


