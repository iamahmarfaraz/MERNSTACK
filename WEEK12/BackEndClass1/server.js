const express = require('express');
const app = express();

// Used to Parse request.body in Express -> PUT or POST
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.listen(3000, () => {
    console.log("Server Started at Port:3000");
})

app.get('/',(request,response)=>{
    response.send("Hello, What's up");
})

app.post('/api/cars',(request,response) => {
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Succesfully")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cars', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connection Established")
}).catch((err) => {
    console.log("Connection Not Established", err);
});
