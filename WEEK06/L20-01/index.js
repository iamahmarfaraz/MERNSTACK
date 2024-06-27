document.getElementById('elementfetch');


document.getElementsByClassName('ftc')

document.getElementsByTagName('div');


let a = document.querySelector('.ftc');

console.log(a);

let c = document.querySelectorAll('.ftc');

let innerHTMLImplementation = document.querySelector('.parentdiv');

// get 
innerHTMLImplementation.innerHTML;

// set
// innerHTMLImplementation.innerHTML = ' ';

// let outerHTMLImplementation = document.querySelector('.b');

// outerHTMLImplementation.outerHTML;

let content = document.querySelector('.child1');

content.textContent;
content.innerText;


let newchild = document.createElement('div');
content.appendChild(newchild);

// Creating TextNode

// Hard way
// let newChildPara = document.createElement('p');
// let paratext = document.createTextNode(`i'm Ahmar Faraz`);
// newChildPara.appendChild(paratext);
// content.appendChild(newChildPara);

// EasyWay
let childpara = document.createElement('h1');
childpara.textContent = `i'm Ahmar Faraz`;
content.appendChild(childpara);

// Now we positioning newly created textnode on our own
let contentNew = document.querySelector('.parentdiv');
let childPara = document.createElement('p');
childPara.textContent = `I'm a fragile weakling`;
contentNew.insertAdjacentElement('afterbegin',childPara);

// Removal

contentNew.removeChild(childPara);


// CSS change

// 1.Style
// contentNew.style.backgroundColor = 'red';
// contentNew.style.color = 'yellow';

// 2.cssText
contentNew.style.cssText = 'color:pink; background-color:aqua';