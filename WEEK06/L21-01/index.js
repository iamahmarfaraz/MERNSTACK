document.addEventListener('click',function(){
    console.log('you have just click');
});

let content = document.querySelector('h1')

content.addEventListener('click',function(){
    content.innerHTML = 'Mahnoor';
     content.style.cssText = 'background-color : red;';
 });
 

//  document.addEventListener("DOMContentLoaded", function() {
//     let day1 = document.querySelector('.day1');
//     let day1card = document.querySelector('.day1card');

//     let day2 = document.querySelector('.day2');
//     let day2card = document.querySelector('.day2card');

//     function cardEffect(card) {
//         return function() {
//             card.style.opacity = '1';
//             card.style.transform = 'translateX(0)';
//         }
//     }

//     day1.addEventListener('change', cardEffect(day1card));
//     day2.addEventListener('change', cardEffect(day2card));
// });
