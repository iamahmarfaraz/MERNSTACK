import React, { useState } from 'react';

import './App.css';

function App() {

  // const [fullName, setfullName] = useState("");
  // const [fatherName, setfatherName] = useState("");

  const [formData, setformData] = useState({
    fullName : "",
    fatherName : "",
    email : ""
  });

  function changeHandler(event){
    setformData(prevformData => {
      return{
        ...prevformData,
        [event.target.name] : event.target.value
      }
    });
    console.log(formData);
  }

  // function changeFullNameHandler(e){
  //   setfullName(e.target.value)
  //   console.log("Printing Full Name");
  //   console.log(fullName)
  // }

  // function changeFatherNameHandler(event){
  //   setfatherName(event.target.value);
  //   console.log("Printing Father's Name");
  //   console.log(fatherName);
  // }

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder = "Full Name" onChange={changeHandler} name='fullName' value={formData.fullName}/>
        <input type="text" placeholder = "Father's Name" onChange={changeHandler} name='fatherName' value={formData.fatherName} />
        <input type="email" name="email" id="" placeholder='Enter your Email' onChange={changeHandler} value={formData.email/>
      </form>
    </div>
  );
}

export default App;
