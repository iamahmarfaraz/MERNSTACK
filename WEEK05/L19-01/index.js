// Function Declaration
function run(){
    console.log('running');
}

// Function Assingment
let stand = function walk(){
    console.log('walking');
};


// Name Function Assignment
let stand2 = function walk2(){
    console.log('walking');
};

// Name Function Assignment
let stand3 = function(){
    console.log('walking');
};

let marks = [10,20,30,40,50,60,70,80,90];
let sliced = marks.slice(2,6);

for (let i of sliced) {
    console.log(i);
}
