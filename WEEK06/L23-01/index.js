let meraPromise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('I am insde Promise1');
        }, 5000);
        resolve(1234567890);
        // reject(new Error('Bhaisahab Error aaaye hai'))
});

meraPromise1.then((value) => { console.log(value)}, (error) => { console.log("Recieved an Error")});

let waadaa1 = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        console.log('setimeout1 started');
    },2000);
    resolve(true);
})

let output = waadaa1.then(() => {
    let waadaa2 = new Promise(function(resolve, reject) {
        setTimeout(()=> {
            console.log('setimeout2 started');
        },3000);
        resolve("waada 2 resolved");
    })
    return waadaa2;
})

output.then((value) => console.log(value));


async function utility() {


        let delhiMausam = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("Delhi me bhot garmi hai");
            },5000);
        });
    
        let hydMausam = new Promise((resolve, reject) => {
            setTimeout(()=>{
            resolve("Hyderabad is Cool");
        },6000);
        });
    
    let dM = await delhiMausam;
    let hM = await hydMausam;
    
    return [dM, hM];
}

async function apiCall() {
    let api = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let apiOutput = await api.json();
    console.log(apiOutput);
}
apiCall();

async function helper() {

    let options = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Ahmar',
          body: 'Tagdi Body ',
          userId: 2002,
          weight: 70,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let contentAPI = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = contentAPI.json();
    return response;
}


async function utilityAPI() {
    let ans = await helper();
    console.log(ans);
}

utilityAPI();

function init() {
    let name = "Mozilla"; 
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();
