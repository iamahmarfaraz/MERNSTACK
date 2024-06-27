let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let content = document.querySelector('.count');

// plus.addEventListener('click',function(){
//     let counter = parseInt(content.innerText);
//     counter++;
//     content.innerText = counter;
// });

function increment(){
    let counter = parseInt(content.innerText);  //this parseInt will convert content.innerText from string to integer
    counter++;
    content.innerText = counter;
};

function decrement(){
    let counter = parseInt(content.innerText);  //this parseInt will convert content.innerText from string to integer
    counter--;
    content.innerText = counter;
};