// document.addEventListener('click',function(){
//     console.log('you have just click');
// });

let parent = document.querySelector('.hamburger-icon');
let child =  document.querySelector('.hamburger-list');
let cross = document.querySelector('.cross');


parent.addEventListener('click',function(){
     child.style.cssText = 'opacity : 1; transform: translateY(0);';
     
 });

cross.addEventListener('click',function(){
    child.style.cssText = 'opacity : 0';
}); 